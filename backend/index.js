const connectToMongo = require('./db')
const dotenv = require("dotenv")
dotenv.config({ path: './config.env' });

const express = require('express')
var cors = require('cors')

connectToMongo();

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/product', require('./routes/product'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})