'use strict';

// Event Routes
var webhooks = require('../controllers/webhooks.box.server.controller');

module.exports = function (app) {
  
  app.route('/api/file/ocr/:file_id').get(webhooks.getAndRunOCR);

  app.route('/api/file/testocr').get(webhooks.testOCR);

};