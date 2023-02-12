const express = require('express')
const app = express()

app.get("/data",(req,res)=>{
    res.json({name: " Tom ", place: "Newyork"})
})

app.listen(4000)