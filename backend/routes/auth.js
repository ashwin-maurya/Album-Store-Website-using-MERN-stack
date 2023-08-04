const express = require('express')
const User = require('../models/User');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router()
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const dotenv = require("dotenv")
dotenv.config({ path: './config.env' });

const JWT_SECRET = process.env.JWTSECRET;
//ROUTE 1:: Create a user using POST "/api/auth/createuser"
router.post('/createuser', [
    //validations
    body('username', 'Enter a valid Name').isLength({ min: 5 }),
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Enter a valid Password').isLength({ min: 5 }),
], async(req, res) => {
    let success = false;

    //if there are errors returns the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //check if a user already exists
    try {
        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ success, errors: "Sorry a User woth this email already exists." })

        }
        const salt = await bcrypt.genSalt(10)
        const secPass = await bcrypt.hash(req.body.password, salt);
        //if no existing user is found then user is entered in database
        user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: secPass,
        })
        const data = {
            user: {
                id: user.id,
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)
        success = true;
        res.json({ success, authToken })
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Occured. Please try again later.")
    }

})

//ROUTE 2:: login a user using POST "/api/auth/login"
router.post('/login', [
    //validations
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password cannot be blank').isLength({ min: 5 }),
], async(req, res) => {
    let success = false;
    //if there are errors returns the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ success, error: "Wrong login credentials" });
        }

        const passCompare = await bcrypt.compare(password, user.password);
        if (!passCompare) {
            return res.status(400).json({ success, error: "Wrong login credentials" });
        }

        const data = {
            user: {
                id: user.id,
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET)
        success = true;
        res.json({ success, authToken })
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Occured. Please try again later.")
    }

})


//ROUTE 3:: Get logged in user details using POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser, async(req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Occured. Please try again later.")
    }

})


module.exports = router