const express = require('express');
const router = express.Router();

router.post('/send', (req,res) =>{
    console.log('sms sent to: ' + req.body.phone);
    console.log('message : '+ req.body.message);
    res.send('successfully completed');
});

module.exports = router;