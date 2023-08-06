const express = require('express')
const router = express.Router()
const fetchuser = require('../middleware/fetchuser');
const Product = require('../models/Product');
const { body, validationResult } = require('express-validator');

//ROUTE 1:: Get all the products using GET "/api/product/getproducts". Login required

router.get('/fetchproducts', async(req, res) => {
    let success = false;

    try {
        const products = await Product.find()
        success = true;
        res.json({ success, products })
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Occured. Please try again later.")
    }
})

//ROUTE 2:: Adding products using POST "/api/product/addproducts". Login required

router.post('/addproducts', fetchuser, [
    //validations
    body('category', 'Choose a Valid Category').exists(),
    body('name', 'Must be more than 5 Characters').isLength({ min: 5 }),
    body('desc', 'Must be more than 5 Characters').isLength({ min: 5 }),
    body('price', 'Cannot be empty').exists(),
    body('imageURL', 'Cannot be empty').exists(),
], async(req, res) => {
    let success = false;
    try {
        const { category, name, desc, price, imageURL } = req.body
            //if there are errors returns the error
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() });
        }

        const product = new Product({
            category,
            name,
            desc,
            price,
            imageURL
        })
        const savedProduct = await product.save()
        success = true;
        res.json({ success, savedProduct })
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Occured. Please try again later.")
    }
})

//ROUTE 3:: Updating products using PUT "/api/product/updateproducts". Login required

router.put('/updateproducts/:id', fetchuser, async(req, res) => {
    let success = false
    try {

        const { category, name, desc, price, imageURL } = req.body

        const newProduct = {}
        if (category) { newProduct.category = category }
        if (name) { newProduct.name = name }
        if (desc) { newProduct.desc = desc }
        if (price) { newProduct.price = price }
        if (imageURL) { newProduct.imageURL = imageURL }

        let product = await Product.findById(req.params.id)
        if (!product) { res.status(404).send("Product not Found") }

        product = await Product.findByIdAndUpdate(req.params.id, { $set: newProduct }, { new: true })
        success = true
        res.json({ success, product })

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Occured. Please try again later.")
    }
})


//ROUTE 4:: Deleting products using POST "/api/product/deleteproduct". Login required

router.delete('/deleteproduct/:id', fetchuser, async(req, res) => {
    let success = false
    try {

        const { category, name, desc, price, imageURL } = req.body

        let product = await Product.findById(req.params.id)
        if (!product) { res.status(404).send("Product not Found") }

        product = await Product.findByIdAndDelete(req.params.id)
        success = true
        res.json({ success, product })
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Occured. Please try again later.")
    }

})


// ...

// ROUTE 5:: Searching products by category and name using GET "/api/product/search". Login required
router.get('/search', async(req, res) => {
    try {
        const query = req.query.q; // Assuming you pass the search query as a query parameter 'q'

        // Use the Mongoose .find() method to search for products with the given query
        const results = await Product.find({
            $or: [
                { name: { $regex: query, $options: 'i' } }, // Case-insensitive search on the 'name' field
                { category: { $regex: query, $options: 'i' } }, // Case-insensitive search on the 'category' field
            ],
        });

        res.json(results); // Return the search results as JSON
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// ...


module.exports = router