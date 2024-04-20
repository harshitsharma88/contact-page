const express= require('express');
const router= express.Router();

const contactController=require('../controllers/contact-successController')

router.get('/',contactController.contactGet)

module.exports=router;