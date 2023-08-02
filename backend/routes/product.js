const express = require('express')
const router = express.Router()
const fetchuser = require('../middleware/fetchuser');
const Product = require('../models/Product');
const { body, validationResult } = require('express-validator');

//ROUTE 1:: Get all the products using GET "/api/product/getproducts". Login required

router.get('/fetchproducts', fetchuser, async(req, res) => {
    try {

        const products = await Product.find()
        res.json(products)
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
    body('desc', 'Must be more than 10 Characters').isLength({ min: 10 }),
    body('price', 'Cannot be empty').exists(),
], async(req, res) => {

    try {
        const { category, name, desc, price } = req.body
            //if there are errors returns the error
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const product = new Product({
            category,
            name,
            desc,
            price
        })
        const savedProduct = await product.save()
        res.json(savedProduct)
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Occured. Please try again later.")
    }
})

//ROUTE 3:: Updating products using PUT "/api/product/updateproducts". Login required

router.put('/updateproducts/:id', fetchuser, async(req, res) => {

    try {

        const { category, name, desc, price } = req.body

        const newProduct = {}
        if (category) { newProduct.category = category }
        if (name) { newProduct.name = name }
        if (desc) { newProduct.desc = desc }
        if (price) { newProduct.category = price }

        let product = await Product.findById(req.params.id)
        if (!product) { res.status(404).send("Product not Found") }

        product = await Product.findByIdAndUpdate(req.params.id, { $set: newProduct }, { new: true })
        res.json(product)

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Occured. Please try again later.")
    }
})


//ROUTE 3:: Deleting products using POST "/api/product/deleteproduct". Login required

router.put('/deleteproduct/:id', fetchuser, async(req, res) => {

    try {

        const { category, name, desc, price } = req.body

        let product = await Product.findById(req.params.id)
        if (!product) { res.status(404).send("Product not Found") }

        product = await Product.findByIdAndDelete(req.params.id)
        res.json({ "Success": "The product has been deleted", product: product })
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Occured. Please try again later.")
    }

})

module.exports = router