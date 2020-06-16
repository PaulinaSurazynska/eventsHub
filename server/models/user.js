const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  password: String,
});

// model used to interact with data base
module.exports = mongoose.model('user', userSchema, 'users');
