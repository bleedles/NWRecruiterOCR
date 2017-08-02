'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Invite Schema
 */
var KeywordSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  text: {
    type: String,
    trim: true,
    required: true
  },
  category: {
    type: String,
    trim: true,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  modifiedDate: {
    type: Date,
    default: Date.now
  },
  modifiedBy: {
    type: String
  }
});

mongoose.model('Keyword', KeywordSchema);
