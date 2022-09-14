const mongoose = require('mongoose');

const TrainerSchema = new mongoose.Schema({
    title: {type:String, required:true},
    desc: {type:String, required:true},
    degree: {type:String, required:true},
    imageUrl: {type:String, required:true},
    email: {type:String, required:true, unique:true}
},{timestamps: true});

mongoose.models = {}
module.exports = mongoose.model("Trainer",TrainerSchema)