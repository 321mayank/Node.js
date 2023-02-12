const mysql = require("mysql");

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    connectionLimit: 1
});

con.query(`select * from newdb.employee limit 1,1`, (err, res)=>{
    return console.log(res)
});