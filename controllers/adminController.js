
const path = require('path');
const fs= require('fs');
const { json } = require('body-parser');
const db=require('../models/product');
const shopController=require('./shopController');



exports.addProductGet=(req, res, next) => {
  res.sendFile(path.join(__dirname, '../views', 'add-product.html'));
  }


exports.addProductPost=(req, res, next) => {
  db.create({
    title:req.body.title,
    price:req.body.price,
    desc:req.body.desc
  })
  .then(()=>{
  res.redirect('/');

  })
}

exports.ProductDelete=(req,res,next)=>{
  db.destroy({where:{id:req.params.id}})
  .then(()=>{
    res.redirect('/');
  })

}

exports.getProductDetails=(req,res,next)=>{
  db.findAll({where:{
    id:req.params.id
  }})
  .then(result=>{
    res.render('render',{content:result[0].dataValues});
  })
  .catch(err=>console.log(err));
}