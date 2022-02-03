var express = require('express');
var router = express.Router();
var controller = require('./food.controller');
var token = require('../token').token;

router.post('/', (req, res)=>{
    controller.insert(req.body).then(data => {
        res.status(data.status).send({message: data.message});
    }).catch(err =>{
        res.status(err.status).send({message: err.message});
    })
});

router.get('/', (req, res)=>{
    controller.Search().then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err =>{
        res.status(err.status).send({message: err.message});
    })
});

module.exports = router;