'use strict';

// Event Routes
var folders = require('../controllers/folders.box.server.controller');

module.exports = function (app) {
  
  app.route('/api/box/folders').get(folders.getFolder);

};