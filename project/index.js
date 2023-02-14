
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const joi = require('joi');
const { login } = require('./validation/validation');
const { register } = require('./validation/validation');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('login1');
});

app.post('/login', (req, res) => {
  const data = login.body.validate(req.body)

  res.send(data)
  
});

app.get('/register',(req,res)=>{
  res.render('register')
})

 app.post('/register',(req,res) => {
  const reg_data = register.body.validate(req.body)
  res.send(reg_data)
 })


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
