// routes.js
const express = require('express');
const HealthHistoryModel = require('../models/Health');

const router = express.Router();

// API endpoint for submitting health history
router.post('/health-history', async (req, res) => {
  try {
    const {healthHistory} = req.body;
    console.log(healthHistory);
    console.log(req.body);
    // A new instance of the HealthHistory model with the submitted data
    const newHealthHistory = new HealthHistoryModel(healthHistory);
  
    // Save the data to MongoDB
    await newHealthHistory.save();
    res.status(201).json(newHealthHistory);
    console.log(newHealthHistory)
  } catch (error) {
    console.error(error);
    res.status(500).json({msg : "server error"});
  }
});

module.exports = router;
