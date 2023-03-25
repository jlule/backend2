const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        brandname: {
            type: String,
            required: [true, "Please enter a brand"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        weight: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        image: {
            type: String,
            required: false,
        }

    },
    {
        timestamps: true
    }
)


const Product = mongoose.model('Product', productSchema)

module.exports = Product;
