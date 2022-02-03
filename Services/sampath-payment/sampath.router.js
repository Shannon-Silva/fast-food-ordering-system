const express = require('express');
const router = express.Router();

router.post('/pay', (req,res) =>{
    console.log('Payment made successfully');
    res.send({message: 'payment completed'});
});

module.exports = router;