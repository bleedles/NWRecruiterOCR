'use strict';

var validator = require('validator'),
  fs = require('fs'),
  path = require('path'),
  BoxSDK = require('box-node-sdk'),
  multer = require('multer'),
  cognitiveServices = require('cognitive-services'),
  config = require(path.resolve('./config/config'));

var sdk = new BoxSDK({
  clientID: config.box.clientID,
  clientSecret: config.box.clientSecret,
  appAuth: {
      keyID: config.box.appAuth.publicKeyID,
      privateKey: config.box.appAuth.privateKey,
      passphrase: config.box.appAuth.passphrase
  }
});
//Box Client
var client = sdk.getBasicClient(config.box.appAuth.accessToken);

/**
 * Render the main application page
 */
exports.getAndRunOCR = function (req, res) {
    client.files.get(req.params.file_id, null, function(err, fileinfo) {
        if(err) {
            console.error(err);
            res.status(500).send({message: err.message});
        } else {
            client.files.getReadStream(req.params.file_id, null, function(err, stream) {
                if (err) {
                    // handle error
                    console.error(err);
                    res.status(500).send({message: err.message});
                } else {
                    // write the file to disk
                    var output = fs.createWriteStream('./public/images/downloads/' + fileinfo.name);
                    stream.pipe(output);
                }
            });
        }
    });
};

exports.testOCR = function(req, res) {
    const computerVision = cognitiveServices.computerVision({
        API_KEY: config.azure.cognitiveServicesKey1
    });
    
    const parameters = {
        language: "unk",
        detectOrientation: "true",
        "content-type": "application/json"
    };
    /* Input passed within the POST body. Supported input methods: raw image binary or image URL. 
    
    Input requirements: 
    
    Supported image formats: JPEG, PNG, GIF, BMP. 
    Image file size must be less than 4MB.
    Image dimensions must be between 40 x 40 and 3200 x 3200 pixels, and the image cannot be larger than 100 megapixels.
    
    */
    const body = {
        'url': 'https://nwrecruiter.azurewebsites.net/downloads/ResumeScreenShot.png'
    };
    
    computerVision.ocr({
            parameters,
            body
        })
        .then((response) => {
            console.log('Got response', response);
            var out = '';
            var regionsout = [];
            for(var r in response.regions) {
                var regionout = {};
                var region = response.regions[r];
                for(var l in region.lines) {
                    var lineout = {};
                    var line = region.lines[l];
                    for(var w in line.words) {
                        var word = line.words[w].text;
                        out += word + ' ';
                    }
                    out += '\n';
                }
                out += '\n';
            }
            out = out.toLowerCase();
            var matchedKeywords = [];
            for(var k in config.keywords) {
                var keyword = config.keywords[k].toLowerCase();
                if(out.includes(keyword)) {
                    matchedKeywords.push(keyword);
                }
            }
            res.status(200).send({OCR: out, matchedKeywords: matchedKeywords});

        })
        .catch((err) => {
            console.error('Encountered error making request:', err);
            res.status(500).send({message: e.message});
        });
};

exports.uploadFile = function(req, res) {
    console.log("req:");
    console.log(req);
    console.log("req.file:");
    console.log(req.file);
    console.log("req.body:");
    console.log(req.body);
    var upload = multer({ dest: './public/images/uploads' }).single('resumeUpload');
    uploadImage()
      .then(function () {
        var stream = fs.createReadStream('./public/images/uploads/' + req.file.filename);
        client.files.uploadFile('32442834639', req.file.filename, stream, function(err, response){
            if(err) {
                console.error(err);
                res.status(500).send(err);
            } else {
                console.log(response);
                //
                res.json({message: "success"});
            }
        });
      })
      .catch(function (err) {
        res.status(500).send(err);
      });

    function uploadImage () {
        return new Promise(function (resolve, reject) {
            upload(req, res, function (uploadError) {
                if (uploadError) {
                    reject(uploadError);
                } else {
                    resolve();
                }
            });
        });
    }
};


