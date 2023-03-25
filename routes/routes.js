// express methods import for routes
const express = require('express');
const routes = express.Router();
// models import 
const Contact = require('../models/contacts')
const Product = require('../models/productModel')
//swagger imports
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerAutoGen = require('swagger-autogen');

const app = express();


// routes
routes.get('/', (req, res) =>{ 
    res.send('Hello NODE API')

})

routes.get('/blog', (req, res) =>{ 
    res.send('Hello NODE blog')

})




// Swagger Documentation


const swaggerOptions = {
    swaggerDefinition: {
        info:{
            title:'Contacts',
            description: "Customer contact",
            server: ["http://localhost:3000/contact"]
        }
    },
    // ['.routes/*.js']
    apis: ["server.js"]
};
// swaggerAutoGen('./swagger.json', ['server.js'],swaggerOptions);
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));



/**
 * @swagger
 * /contact:
 *  get:
 *    description: used to get all contacts
 *    responses:
 *      '200':
 *        description: A succesfull response
 * 
 */  





// contacts routes


// GET All Contacts routes

routes.get('/contact',  async(req, res) =>{ 
    try {
        console.log(req);
        const contact = await Contact.find({});
        res.status(200).json(contact)
        console.log(contact);
        
        }catch (error) {
            res.status(500).json({message:error.message})
    }

})




// Find contact by single id
routes.get('/contact/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const contact = await Contact.findById(id);
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})



// POST route for saving contact into database

/**
 * @swagger
 * /contact:
 *  post:
 *    description: used to add customer to database
 *    responses:
 *      '200':
 *        description: A succesfull response
 * 
 */  
routes.post('/contact', async(req, res) => {
    try {
          const contact = await Contact.create(req.body);
        //   res.status(200).json({message: `added new contact with ID ${id}`});
          res.status(200).json(contact)
         

    } catch(error) {
        console.log(req.body);
        res.status(500).json({message:error.message})
    } 
})

// PUT route

//PUT  contact update route

/**
 * @swagger
 * /contact:
 *  put:
 *    description: update contact by id
 *    responses:
 *      '201':
 *        description: A succesfull response
 * 
 */  
routes.put('/contact/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const contact = await Contact.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!contact){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updatedContact = await Contact.findById(id);
        res.status(200).json({message: `updated contact with name ${contact.firstName},${contact.lastName}`})
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


// DELETE contact route

/**
 * @swagger
 * /contact:
 *  delete:
 *    description: used to delete a single contact by id
 *    responses:
 *      '200':
 *        description: deleted successfully
 * 
 */  


routes.delete('/contact/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const contact = await Contact.findByIdAndDelete(id);
        if(!contact){
            return res.status(404).json({message: `cannot find any contact with ID ${id}`});
        }
        res.status(200).json({message: `deleted contact with name ${contact.firstName},${contact.lastName}`});
        // res.status(200).json(contact);
        console.log('successfully deleted contact');
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})



// get  all data from products database
routes.get('/product',  async(req, res) =>{ 
    try {
        const product = await Product.find({});
        res.status(200).json(product)
        console.log(product);
        
        }catch (error) {
            res.status(500).json({message:error.message})
    }

})

// GET single item //
routes.get('/product/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


// POST route for saving data into database
routes.post('/product', async(req, res) => {
    try {
          const product = await Product.create(req.body)
          res.status(200).json(product)
    } catch(error) {
        console.log(req.body);
        res.status(500).json({message:error.message})
    } 
})

//PUT update route
routes.put('/product/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


// DELETE delete route
routes.delete('/product/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


// ASK TA why these routes didnt work 
// app.get('/product/:id', async(req, res) =>{
//     try {
//         const {id} = req.params;
//         const product = await Product.findById({id});
//         res.status(200).json(product)
//         }catch (error) {
//             res.status(500).json({message:error.message})
//     }
// })


// app.get('/product/:id', async(req, res) =>{
//     try {
//         const {id} = req.params;
//         const product = await Product.findById({id});
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({message: error.message})
//     }
// })


module.exports = routes;