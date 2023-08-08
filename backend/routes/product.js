const express = require('express')
const router = express.Router()
const fetchuser = require('../middleware/fetchuser');
const Product = require('../models/Product');
const { body, validationResult } = require('express-validator');

//ROUTE 1:: Get all the products using GET "/api/product/getproducts". Login required
router.get('/fetchproducts', async(req, res) => {
    let success = false;
    try {
        const page = parseInt(req.query.page) || 1; // Current page number (default: 1)
        const limit = 10; // Number of products per page

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        // Get products for the current page with the specified limit
        const products = await Product.find().skip(startIndex).limit(limit).exec();

        // Get the total number of products in the database
        const totalProducts = await Product.countDocuments().exec();

        const totalPages = Math.ceil(totalProducts / limit);

        success = true;
        res.json({ success, products, totalPages });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error. Please try again later.");
    }
});

//ROUTE 2:: Adding products using POST "/api/product/addproducts". Login required

router.post('/addproducts', fetchuser, [
    //validations
    body('category', 'Choose a Valid Category').exists(),
    body('name', 'Must be more than 5 Characters').isLength({ min: 5 }),
    body('desc', 'Must be more than 5 Characters').isLength({ min: 5 }),
    body('price', 'Cannot be empty').exists(),
    body('imageURLs', 'Cannot be empty').exists(),
], async(req, res) => {
    let success = false;
    try {
        const {
            category,
            name,
            desc,
            size,
            price,
            imageURLs,
            downloadUrl
        } = req.body
            //if there are errors returns the error
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success, errors: errors.array() });
        }

        const product = new Product({
            category,
            name,
            desc,
            size,
            price,
            imageURLs,
            downloadUrl
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

        const { category, name, desc, size, price, imageURLs, downloadUrl } = req.body

        const newProduct = {}
        if (category) { newProduct.category = category }
        if (name) { newProduct.name = name }
        if (desc) { newProduct.desc = desc }
        if (size) { newProduct.size = size }
        if (price) { newProduct.price = price }
        if (imageURLs) { newProduct.imageURL = imageURLs }
        if (downloadUrl) { newProduct.downloadUrl = downloadUrl }

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
        const query = req.query.q;

        const results = await Product.find({
            $or: [
                { name: { $regex: query, $options: 'i' } },
                { category: { $regex: query, $options: 'i' } },
            ],
        });

        res.json(results);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});



module.exports = router