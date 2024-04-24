const {DataTypes} = require('sequelize');

const sequelize= require('../util/database');

const product=sequelize.define('products',{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.STRING
    },
    price:{type:DataTypes.INTEGER},
    desc:{type:DataTypes.STRING}

})

module.exports=product;
