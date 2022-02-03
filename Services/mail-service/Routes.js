const express= require('express');
const router = express.Router();

const MailRouter = require('./mail');

router.use('/mail', MailRouter);

module.exports = router;