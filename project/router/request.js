const { login } = require('../validation/validation');
const { register } = require('../validation/validation');
const { connection_sql } = require('../database/mysql_connection')
const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/', (req, res) => { //rendered the login page
    res.render('login1');
  });
  
  router.post('/login', (req, res) => { // validated the login page 
    const data = login.body.validate(req.body)
  
    res.send(data)
    
  });


  router.get('/register',(req,res)=>{
        res.render('register')
      })
      
      router.post('/register',(req,res) => { // validated the register data 
        const reg_data = register.body.validate(req.body)

        const {id,name, email, password }  = req.body

        const insertQuery = `INSERT INTO user (id, name, email, password) VALUES ('${id}','${name}', '${email}', '${password}')`;
        connection_sql.query(insertQuery, (err, result) => {
          if (err) throw err;
          console.log("User data inserted successfully");
        });
        res.send(reg_data)
       })
      
  


  module.exports= router
  