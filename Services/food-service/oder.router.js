var express = require('express');
var router = express.Router();
var axios = require('axios');

router.post('/mobile', (req,res)=>{
    axios.post('http://localhost:3000/mobile-billing/pay').then((response)=>{
        console.log(response);
        res.status({status: 200}).send({message: response.data});
    }).catch(err =>{
        console.log(err);
        res.status({status: 500}).send({message: "Error:- "+err});
    });
});

router.post('/bank', (req, res)=>{
    axios.post('https://localhost:3000/sampath-payment/pay').then((response)=>{
        console.log(response);
        res.status({status: 200}).send({message: response.data});
    }).catch(err =>{
        console.log('error: '+err);
        res.status({status: 500}).send({message: "Error:- "+err});
    });
});

module.exports = router;