const {setupMiddleware} = require('../middleware/setupMiddleware')


function user_hash(){
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

}


module.exports={
    
}