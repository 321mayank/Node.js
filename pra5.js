var express = require('express')
var joi = require("@hapi/joi")
var bodyParser = require('body-parser')
var morgan = require("morgan")

app = express()
app.use(bodyParser.json())
app.use(morgan('combined'))

const userSchema= joi.object({
    name: joi.string().min(3).max(10)
})

app.post('/',(req,res)=>{
    data = userSchema.validate(req.body)
    res.send(data)
}
)

app.listen(2000)