const { INTEGER } = require('sequelize');
const sequelize=require('../util/database');
const User= sequelize.define('User',{
    id:{
        type:INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:STRING,

    }
})

module.exports=User;

