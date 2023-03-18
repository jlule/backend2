const express = require('express');
// const mongoose = require('mongoose');
const app = express();
const Product = require('./models/productModel')
const connect = require('./connect')
const routes = require('./routes/routes')
const Contact = require('./models/contacts')


// console.log(process.env.MONGODB_URI)


app.use(express.json());
// routes
// app.get('/', (req, res) =>{ 
//     res.send('Hello NODE API')

// })


// GET Contacts routes

app.get('/contact',  async(req, res) =>{ 
    try {
        const contact = await Contact.find({});
        res.status(200).json(contact)
        console.log(contact);
        
        }catch (error) {
            res.status(500).json({message:error.message})
    }

})


// POST route for saving contact into database
app.post('/contact', async(req, res) => {
    try {
          const contact = await Contact.create(req.body)
          res.status(200).json(contact)
    } catch(error) {
        console.log(req.body);
        res.status(500).json({message:error.message})
    } 
})

// PUT route

//PUT  contact update route
app.put('/contact/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const contact = await Contact.findByIdAndUpdate(id, req.body);
        // we cannot find any product in database
        if(!contact){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        const updatedContact = await Contact.findById(id);
        res.status(200).json(updatedContact);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


// DELETE contact route


app.delete('/contact/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const contact = await Contact.findByIdAndDelete(id);
        if(!contact){
            return res.status(404).json({message: `cannot find any product with ID ${id}`})
        }
        res.status(200).json(contact);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})



app.get('/blog', (req, res) =>{ 
    res.send('Hello NODE blog')

})

app.use('/', routes);
app.use('/blog', routes);

// get  all data from database
app.get('/product',  async(req, res) =>{ 
    try {
        const product = await Product.find({});
        res.status(200).json(product)
        console.log(product);
        
        }catch (error) {
            res.status(500).json({message:error.message})
    }

})

// GET single item //

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

app.get('/product/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


// POST route for saving data into database
app.post('/product', async(req, res) => {
    try {
          const product = await Product.create(req.body)
          res.status(200).json(product)
    } catch(error) {
        console.log(req.body);
        res.status(500).json({message:error.message})
    } 
})

//PUT update route
app.put('/product/:id', async(req, res) => {
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
app.delete('/product/:id', async(req, res) =>{
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



// contacts routes


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