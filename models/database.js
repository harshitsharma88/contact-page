const mysql=require("mysql2");
const conn = mysql.createPool({
    host :'localhost',
    user:'root',
    database:"node-connect",
    password:'Harshit7174@'
})

module.exports=conn.promise();