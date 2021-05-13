const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  phone: String

},{versionKey : false})

module.exports = mongoose.model('User', UserSchema)