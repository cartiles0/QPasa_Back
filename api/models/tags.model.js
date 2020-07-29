const mongoose = require('mongoose')

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'Name is required']
  },
  clicks: {
    type: Number,
    default: 0
  }
})

const tagModel = mongoose.model('tag', tagSchema)
module.exports = tagModel
