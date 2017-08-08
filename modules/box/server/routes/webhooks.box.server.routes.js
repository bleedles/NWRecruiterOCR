'use strict';

// Event Routes
var webhooks = require('../controllers/webhooks.box.server.controller');

module.exports = function (app) {
  
  app.route('/api/file/ocr/:file_id').get(webhooks.getAndRunOCR);

  app.route('/api/file/testocr').get(webhooks.testOCR);

  app.route('/api/file/upload').post(webhooks.uploadFile);

  app.route('/api/files').post(webhooks.getFilesMatchingKeywords);

  app.route('/api/file/updateMetadata').post(webhooks.updateFileMetadata);

  app.route('/api/file/runOCR').post(webhooks.getOCRTags);

};