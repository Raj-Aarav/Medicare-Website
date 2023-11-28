// models.js

const mongoose = require('mongoose');

const healthHistorySchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  gender: String,
  medicalHistory: String,
});

const HealthHistoryModel = mongoose.model('HealthHistory', healthHistorySchema);

module.exports = HealthHistoryModel;
