'use strict';

var validator = require('validator'),
  path = require('path'),
  mongoose = require('mongoose'),
  config = require(path.resolve('./config/config')),
  Tag = mongoose.model('Tag');


/**
 * return keywords based on query
 */
exports.getTags = function (req, res) {
  Tag.find({text: { "$regex": req.params.query, "$options": "i" } }).lean().exec(function(err, tags) {
    if(err) {
      console.error(err);
      res.status(500).send(err);
    } else {
      res.json(tags);
    }
  });
};
