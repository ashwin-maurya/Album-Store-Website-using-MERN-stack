const mongoose = require('mongoose')
const { Schema } = mongoose;


const ProductSchema = new Schema({
    category: {
        type: String,
        default: "General"
    },
    name: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    size: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    imageURLs: {
        type: [String],
        require: true
    },
    downloadUrl: {
        type: String,
        require: true
    },
    downloads: {
        type: Number,
        default: 189,
    },
    date: {
        type: Date,
        default: Date.now,
    }

});

module.exports = mongoose.model("Product", ProductSchema)