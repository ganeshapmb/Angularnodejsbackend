const mongoose = require('mongoose');

const mongoURI = "localhost:27017/gymmb"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    }).catch(err => console.log(err));
}


module.exports = connectToMongo;