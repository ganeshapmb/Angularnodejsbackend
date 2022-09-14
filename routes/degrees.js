const express = require('express');
const Degree = require('../models/Degree')
const router = express.Router();

router.get('/',(req,res)=>{
    abc = {
        a:'mb',
        number:45
    }
    res.json(abc)
})

router.post('/create',(req,res)=>{
    console.log(req.body);
    const degree = Degree(req.body);
    degree.save()
    res.send(req.body);
})
module.exports = router