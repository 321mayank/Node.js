var express = require('express');
var app = express()
var path = require('path')
var port = 8888
var morgan = require('morgan');

app.use(morgan('combined'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.html'))
  
})
app.get('/boot',auth, (req, res) => {
  res.sendFile(path.join(__dirname,'boot.html'))
  
})


function auth (req,res,next){
  if (req.query.admin === 'true'){
    next()
  }
  else{
    res.send('No auth')
  }
}

app.listen(port)
