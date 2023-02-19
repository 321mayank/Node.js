const { login } = require('../validation/validation');
const { register } = require('../validation/validation');
const { loginQuery, registerQuery } = require('../database/query')
const {connection_sql} = require('../database/mysql_connection')
const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser');
const {hashPassword  }= require('../authentication/password_hashing')
const bcrypt = require('bcrypt')
const session = require('express-session')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
router.use(session({
  secret: 'abdjjdirgnkszvvk',
  resave: true,
  saveUninitialized: true
}))
router.get('/', (req, res) => { //rendered the login page
    res.render('login1');


  });
  

  router.post('/login', (req, res) => { 
    const data = login.body.validate(req.body)
     const { email, password } = req.body
      const fetchQuery = loginQuery(email);
      connection_sql.query(fetchQuery, async  (err,result)=>{
        
        if (err) {
          console.log(err);
          res.send('An error occurred');
        } else {
        
          if (result.length > 0) {
            const { hash , salt } = result[0];  

            const inputHash = await hashPassword(password, salt);
           
            if (inputHash === hash) {
             
              res.render('session')
              req.session.user = result[0];
              
            } else {
              res.send('Email or password is incorrect');
            }
          } else {
            res.send('Email or password is incorrect');
          }

        }
      })
   
      
    }); 

router.get('/register',(req,res)=>{
        res.render('register')
      })
      
  
  

      router.post('/register',async (req,res) => { // validated the register data 
        const reg_data = register.body.validate(req.body)

        const {name, email , password }  = req.body
        const salt = await bcrypt.genSalt();
        const passHash = await hashPassword(password,salt); // used hashPassword to bcrypt password 
        
        console.log(salt)
        console.log(passHash)

        const checkQuery = `SELECT * FROM user WHERE email='${email}'`
        connection_sql.query(checkQuery,(err,sql_value)=>{ // checking if email allready exist 
          if (sql_value.length>0) {
            res.send("email allready exist")
          }
          else{
            const insertQuery = registerQuery(name, email, password, passHash, salt);; 
        connection_sql.query(insertQuery, (err, result) => { // if no error then the insert query will execute and add the user to database
          if (err) throw err;
          console.log("User data inserted successfully");
        
    
        })
          }
        })

        res.send("User registerd Successfully")
     
        console.log(reg_data)
       })
      
       router.post('/session', (req, res) => {
      // get user data from session
      req.session.data = req.body.data;
      const data = req.session.data
       
      res.send(`Data in session = ${data}`);
      })

  module.exports= router
  