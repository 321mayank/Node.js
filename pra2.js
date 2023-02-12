
var express = require('express')
app =express()
var mysql = require('mysql')

const con =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"newdb",
    connectionlimit:1
})

con.connect()

app.get('/employee',(req,res)=>{
    con.query(`select *  from newdb.employee`,(err,data)=>{
        // if(error) throw error;
        // console.log(error)
        console.log(data)
        res.send(data)
    }
)}

)

app.listen(3000,()=>{
    console.log("server is running on 3000")
}
)