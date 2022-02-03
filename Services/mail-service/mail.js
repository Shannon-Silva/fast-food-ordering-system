var express = require('express');
var router = express.Router();

router.post('/sendMail', (req, res)=>{
    console.log('Sucessfully sent');
    res.send('mail sent');
});

module.exports= router;