const path=require('path');
// const fs=require('fs');
// const jso= path.join(__dirname,'../data/products.json');

const db=require('../models/product');


exports.shopGet=(req, res, next) => {

    db.findAll()
.then((results)=>{
  res.render('render',{content:results});

})
.catch(err=>console.log(err))

  }

