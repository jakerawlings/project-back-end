const mongoose = require('mongoose');
const {Schema} = require("mongoose");
const userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  role: {type: String},
  favorites: {type: [Schema.Types.Mixed], defaultValue: []}
}, {collection: 'users'});
module.exports = userSchema;