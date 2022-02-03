var express = require('express');
var router = express.Router();
var controller = require('./user.controller');
const TOKEN = "TOKEN_TOKEN";

router.post('/', (req,res)=>{
    controller.insert(req.body).then(data =>{
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

router.get('/', (req, res)=> {
    controller.Search().then(data=>{
        res.status(data.status).send({message: data.message});
    }).catch(err =>{
        res.status(err.status).send({message: err.message});
    })
});

router.get('/:userName', (req,res)=>{
    controller.SearchUser(req.params.userName).then(data => {
        if(data.password !== req.body.password){
            res.send({message: "Password you entered is incorrect"});
        } else{
            const tok= {
                admin: user.admin
            };
            var token = TOKEN;
            res.json({
                message: 'token received',
                token: token
            });
        }
    }).catch(err =>{
        res.status(err.status).send({message: err.message});
    })
});

module.exports = router;