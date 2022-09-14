const mongoose = require('mongoose');

const DegreeSchema = new mongoose.Schema({
    title: {type:String, required:true},
    desc: {type:String, required:true}
},{timestamps: true});

mongoose.models = {}
module.exports = mongoose.model("Degree",DegreeSchema)

