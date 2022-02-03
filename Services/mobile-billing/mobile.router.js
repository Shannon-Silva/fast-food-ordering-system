const express = require("express");
const router = express.Router();

router.post('/pay', (req, res)=>{
    console.log("Payment is successfully made");
    res.send({message: 'payment completed'});
});

module.exports = router;