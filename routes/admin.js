const path = require('path');

const express = require('express');

const router = express.Router();

const adminController= require('../controllers/adminController');



// /admin/add-product => GET
router.get('/add-product',adminController.addProductGet);

// /admin/add-product => POST
router.post('/add-product',adminController.addProductPost);

// /admin/add-product => DELETE


router.get('/get-product/:id',adminController.getProductDetails);

router.use('/delete-product/:id',adminController.ProductDelete);





module.exports = router;
