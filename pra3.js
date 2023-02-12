var express =require('express')
var body =require('body-parser')
app = express()

app.use(body.json())
app.use(body.urlencoded({ extended: true }));

app.post('/data',(req,res)=>{
    data = req.body
    
    console.log(data)
    res.send(data)


})

app.listen(4000)