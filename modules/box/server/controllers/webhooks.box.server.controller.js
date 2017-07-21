'use strict';

var validator = require('validator'),
  fs = require('fs'),
  _ = require('lodash'),
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
const folderid = '32442834639';
const scope = 'enterprise_16885475';
const templatekey = 'nwrecruit';
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

function runOCR(url, callback) {
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
    var body = {
        'url': url
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
            callback(null, {OCR: out, matchedKeywordsString: matchedKeywords.join(','), matchedKeywordsArray: matchedKeywords});

        })
        .catch((err) => {
            console.error('Encountered error making request:', err);
            callback(err, null);
        });
};

exports.getFilesMatchingKeywords = function(req, res) {
    var keywords = req.body.keywords;
    //Get all items in folder
    client.folders.getItems(
        folderid,
        {
            fields: 'id,name,modified_at,size,url,tags',
            offset: 0,
            limit: 25
        },
        function(err, response) {
            if(err) {
                console.error(err);
                res.status(500).send(err);
            } else {
                console.log(response);
                var files = [];
                for(var e in response.entries) {
                    var item = response.entries[e];
                    for(var w in keywords) {
                        if(item.type == 'file' && _.includes(item.tags, keywords[w])){
                            var file = item;
                            files.push(file);
                            break;
                        }
                    }
                }
                var counter = 0;
                var outFiles = [];
                for(var f in files) {
                    var file = files[f];
                    (function(file) {
                        //Get Metadata
                        console.log(file);
                        client.files.getAllMetadata(file.id, function(err, response) {
                            if(err) {
                                console.error(err);
                                res.status(500).send(err);
                            } else {
                                console.log("all metadata");
                                console.log(response);
                                for(var m in response.entries) {
                                    var metaTemplate = response.entries[m];
                                    if(metaTemplate.$template == 'nwrecruit') {
                                        file.metadata = metaTemplate;
                                    }
                                    outFiles.push(file);
                                }
                                counter++;
                                if(counter == files.length) {
                                    res.json({files: outFiles});
                                }
                            }
                        });
                    })(file);
                }
            }
        }
    );
};

exports.uploadFile = function(req, res) {
    console.log(req);
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './public/images/uploads');
        },
        filename: function (req, file, cb) {
            //var replaced = file.originalname.replace(/\s/g, '_');
            console.log("Filename: " + file.originalname);
            cb(null, file.originalname);
        }
    });
    var upload = multer({ storage: storage }).single('picture');
    uploadImage()
      .then(function () {
        console.log("req.file:");
        console.log(req.file);
        console.log("req.body:");
        console.log(req.body);

        // Here we have req.file and req.body
        //TODO: create metadata object
        var stream = fs.createReadStream('./public/images/uploads/' + req.file.filename);
        client.files.uploadFile(folderid, req.file.filename, stream, function(err, response){
            if(err) {
                console.error(err);
                res.status(500).send(err);
            } else {
                //TODO: Get ID from response
                var fileid = response.entries[0].id;

                //Update metadata
                
                console.log('Assigning metadata..');
                console.log(req.body);
                
                var metadata = JSON.parse(req.body.data);
                console.log(metadata);
                runOCR('https://nwrecruiter.azurewebsites.net/uploads/' + req.file.filename, function(err, response) {
                    if(err) {
                        console.error(err);
                        res.status(500).send(err);
                    } else {
                        console.log(response);
                        metadata.tags = response.matchedKeywordsString;
                        client.files.update(fileid, {tags : response.matchedKeywordsArray}, function(err, response) {
                            if(err) {
                                console.error(err);
                                res.status(500).send(err);
                            } else {
                                console.log(response);
                                client.files.addMetadata(fileid, scope, templatekey, metadata, function(err, response) {
                                    if(err) {
                                        console.error(err);
                                        res.status(500).send(err);
                                    } else {
                                        console.log(response);
                                        res.json({message: "success"});
                                    }
                                });
                            }
                        });
                        
                    }
                });
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


