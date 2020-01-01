const mongoose = require('mongoose');
const crypto = require('crypto');

const ShopSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Name is required'
  },
  image: {
    data: Buffer,
    contentType: String
  },
  description: {
    type: String,
    trim: true
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  },
  owner: {type: mongoose.Schema.ObjectId, ref: 'User'}
})

module.exports =  mongoose.model('Shop', ShopSchema);
