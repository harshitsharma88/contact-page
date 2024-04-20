const path=require('path');
// const fs=require('fs');
// const jso= path.join(__dirname,'../data/products.json');

const db=require('../models/database');


exports.shopGet=(req, res, next) => {

  // fs.readFile(jso,(err,data)=>{
  //   if(data.length===0){
  //     return res.sendFile(path.join(__dirname, '../views', 'shop.html'));
  //   }
  //   let content=JSON.parse(data);
  //   res.render('render',{
  //     content:content
  //   });

  // })


    // res.sendFile(path.join(__dirname, '../views', 'shop.html'));


    //////////////////////////////////////////////////////////
    // with database

    db.execute('Select * from products')
.then((results)=>{
  res.render('render',{content:results[0]});

})
.catch(err=>console.log(err))

  }

