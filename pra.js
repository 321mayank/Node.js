var express = require('express')
var morgan = require('morgan')

app = express();

app.get('/', (req,res)=>{
res.end("Hello")
}
)
console.log("Server is Running")

app.listen(4000)