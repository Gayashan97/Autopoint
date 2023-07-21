const Prediction = require('../models/predictionModel');

const getPrediction = async (req,res) => {

    try {
        const response = await Prediction.find({});
        const prediction = response[0].price;
        res.status(200).json({prediction})
    } catch (error) {
       res.status(400).json({error}) 
    }
}

module.exports = getPrediction;