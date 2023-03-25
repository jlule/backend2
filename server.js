const express = require('express');
// const mongoose = require('mongoose');
const app = express();
const connect = require('./connect')
const routes = require('./routes/routes.js');
const Contact = require('./models/contacts')




app.use(express.json());

// access all routes contact and products

app.use('/', routes);

app.listen(3000, ()=>{
    console.log('Node API is running on port 3000')
})

//  connect to database
connect




// mongoose.set("strictQuery", false)
// mongoose.connect('mongodb+srv://jlule:root@cluster0.tee8fki.mongodb.net/contacts').then(() =>
// {
//     console.log('connected to MongoDB')

// }).catch((error) => {
//     console.log(error)
// })