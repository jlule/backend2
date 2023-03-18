const mongoose = require('mongoose');

const contactSchema = mongoose.Schema(
    {
        firstName:{
            type:String,
            required: [true, "Please enter first name"]
        },
        lastName:{
            type:String,
            required: [true, "Please enter last name"]
        },
        email:{
            type:String,
            required: [true, "Please enter email"]
        },
        favoriteColor:{
            type:String,
            required: [true, "Please enter favorite color"]
        },
        birthday:{
            type:String,
            required: [true, "Please enter birthday"]
        }
    }
)


const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact;
