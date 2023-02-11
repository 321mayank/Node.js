var express = require('express');
var app = express()
var morgan = require('morgan');
var body = require('body-parser');
var path = require('path')
var port = 8000

app.use(morgan('combined'));

app.use(body.urlencoded({extended : false}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/add', (req, res) => {
    res.send(`<form method="POST">
    <div><input name='username' /></div>
    <div><button>Add User</button></div>
    </form>`);
    });
    

app.post('/add', (req,res)=>{
    console.log(req.body);
})
    

app.post('/', function(req,res){
    res.end(JSON.stringify(req.body))
} )

app.listen(port)
