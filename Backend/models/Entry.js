// models.js

const mongoose = require('mongoose');

// Creating a schema for Health History
const userDetails = new mongoose.Schema({
  email:String,
  password: String
});

// Creating a model based on the schema
const userDetailsModel = mongoose.model('User', userDetails);

module.exports = userDetailsModel;
