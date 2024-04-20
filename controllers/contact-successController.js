const path = require('path');

exports.contactGet=(req,res)=>{

    // res.render('render2')
    res.sendFile(path.join(__dirname,'../views','contact.html'));


}

exports.successPost=(req,res)=>{
    res.sendFile(path.join(__dirname,'../views','succesfull.html'));
}