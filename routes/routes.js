const express = require('express');
const routes = express.Router();
// const Products = require('./models/productModel')

// routes
routes.get('/', (req, res) =>{ 
    res.send('Hello NODE API')

})

routes.get('/blog', (req, res) =>{ 
    res.send('Hello NODE blog')

})


// get  all data from database
// routes.get('/productall',  async(req, res) =>{ 
//     try {
//         const product = await Products.find({});
//         res.status(200).json(product)
//         console.log(product);
        
//         }catch (error) {
//             res.status(500).json({message:error.message})
//     }

// })

module.exports = routes;