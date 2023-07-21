const express = require('express');
const router = express.Router();

const getPrediction = require('../controllers/predictionController');

//get predicted price
router.get("/", getPrediction);

module.exports = router;