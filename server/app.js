const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config()

const cors = require('cors');

const app = express();

//define routes
const userRoutes = require("./routes/user");
const carRoutes = require("./routes/car");
const prediction = require("./routes/prediction");

//connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Successfully connected to database!"))
    .catch((error) => console.log(error));

//log the requests to the server
app.use(function (req, res, next) {
    console.log(req.path, req.method);
    next();
})

//prevent cross origin errors
app.use(cors({
    origin: "*",
}));

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/user", userRoutes);
app.use("/api/car", carRoutes);
app.use("/api/prediction", prediction);

//start server
app.listen(process.env.PORT, function () {
    console.log("Server has started on port " + process.env.PORT);
})