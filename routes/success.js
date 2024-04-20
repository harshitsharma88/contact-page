const express = require('express');
const router =express.Router();
const successController=require('../controllers/contact-successController');

router.post('/',successController.successPost);

module.exports=router;



