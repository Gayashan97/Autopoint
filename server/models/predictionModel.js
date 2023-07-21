const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const predictionSchema = new Schema({
    predictionID: String,
    price: Number
})

module.exports = mongoose.model('prediction', predictionSchema);