var express = require('express')
var mysql = require('mysql')
var bodyParser = require('body-parser')
const { result } = require('@hapi/joi/lib/base')

app= express()

app.use(bodyParser.json())

//creating connection to database
const con =mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"root",
    database:'newdb',
    connectionlimit:1

})

con.connect((err)=>{
    if(err){
        console.log(err)
    }else{
       console.log("Database connected")
    }
})

//posting request 
app.post('/',(req,res)=>{
    const id=req.body.id
    const name=req.body.name
    const deprt=req.body.deprt

    con.query('insert into emp values(?,?,?)',[id,name,deprt],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("Posted")
        }
    })
})

app.post('/data',(req,res)=>{
    const ID=req.body.ID
    const Date=req.body.Date
    const Login=req.body.Login
    const Logout=req.body.Logout
    const Task_Done=req.body.Task_Done
    const Task_Assign=req.body.Task_Assign

    con.query('insert into emp_data values(?,?,?,?,?,?)',[ID,Date,Login,Logout,Task_Done,Task_Assign],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("Posted Data")
        }
    })


})

app.listen(3000)

