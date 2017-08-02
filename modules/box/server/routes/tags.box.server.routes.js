'use strict';

// Event Routes
var tags = require('../controllers/tags.box.server.controller');

module.exports = function (app) {
  
  app.route('/api/tags/:query').get(tags.getTags);

};