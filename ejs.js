var express = require('express');
var bodyParser = require( 'body-parser');
var cors = require('cors');
var path = require( 'path');
var app = express();


app.use(bodyParser.json());
app.use(cors());
app.set('views', path. join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.render('index')

})

app.listen(3000,()=>{
    console.log("server is running on 3000")
}
)