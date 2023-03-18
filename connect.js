const dotenv = require('dotenv')
require("dotenv").config();
const url = process.env.MONGODB_URI;

const mongoose = require('mongoose');
//  connect to database
async function connectToDatabase() {
    mongoose.set("strictQuery", false)
    mongoose.connect(process.env.MONGODB_URI).then(() =>
    {
        console.log('connected to MongoDB')

    }).catch((error) => {
        console.log(error)
    })
}

module.exports = connectToDatabase();