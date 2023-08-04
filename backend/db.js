const mongoose = require("mongoose");

const connectToMongo = async() => {
    const DB = process.env.DATABASE

    mongoose.connect(DB).then(() => {
        console.log('connection successfull');
    }).catch((err) = console.log('no connection'));
};
module.exports = connectToMongo;