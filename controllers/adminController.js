
const path = require('path');
const fs= require('fs');
const { json } = require('body-parser');
const db=require('../models/database');
const shopController=require('./shopController');



exports.addProductGet=(req, res, next) => {
  res.sendFile(path.join(__dirname, '../views', 'add-product.html'));
  }


exports.addProductPost=(req, res, next) => {
  db.execute('insert into products (name,price,des) values(?,?,?)',[req.body.name,req.body.price,req.body.description])
  .then(()=>{
   shopController.shopGet(req,res,next);

  })



   
}

exports.getProductDetails=(req,res,next)=>{
  db.execute(`select * from products where id = ${req.params.id}`)
  .then(result=>{
    res.render('render',{content:result[0][0]})

  })
  .catch(err=>console.log(err))



}