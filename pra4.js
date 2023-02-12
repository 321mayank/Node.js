var express = require('express')
var cors = require('cors')
app=express()
var body=require('body-parser')

app.use(body)

app.use(cors)

const bat = fetch("http://localhost:4000/data")
.then(res => res.json())
.then(data => console.log(data))

app.get('/',(req,res)=>{
    res.end(bat)
}
)

app.listen(3000)