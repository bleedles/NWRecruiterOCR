'use strict';

var validator = require('validator'),
  path = require('path'),
  BoxSDK = require('box-node-sdk'),
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
var client = sdk.getBasicClient('RVCd1g8X85zFTUNVhCkeeGCKkItsMJiF');
/**
 * Render the main application page
 */
exports.getFolder = function (req, res) {
  client.folders.get(0, {}, function(err, folder) {
      if(err) {
          console.error(err);
      } else {
          console.log(folder);
      }
  });
};
