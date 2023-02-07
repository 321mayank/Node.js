const express = require('express')
const bcrypt = require('bcrypt')

const app=express()

app.use(express.json())

const users=[]


app.get('/users' ,(req,res)=>{

    res.json(users)
    }
)

app.post('/users',async (req,res)=>{
    try {
        const salt = await bcrypt.genSalt()
        const hashPassword = await bcrypt.hash(req.body.password, salt)
        console.log(salt)
        console.log(hashPassword)
        const user ={
            name: req.body.name,
            password: hashPassword
        }
        users.push(user)
        res.send("success")
    }
    catch{
        res.send("something went wrong")
    }
    
    
})


app.post('/users/login', async (req, res) => {
    const user = users.find(user => user.name === req.body.name)
    if (user == null) {
      return res.send('User does not exist')
    }
    try {
      if(await bcrypt.compare(req.body.password, user.password)) {
        res.send('Success')
      } else {
        res.send('Wrong password')
      }
    } 
    catch {
      res.send("something went wrong")
    }
  })




app.listen(3000)