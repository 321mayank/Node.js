const express = require('express')
const morgan = require('morgan')
const joi = require('@hapi/joi')
const body = require('body_parser')
const app = express()

app.use(body)

app.use(morgan('combined'))

const userSchema = joi.object({
    name: joi.string().min(3).max(10).required()
});

app.post('/', (req,res)=>{
    const { error,  } = userSchema.validate(req.body)
  if (error) {
    return res.status(400).send("invalid")
}

res.send("successfully")
})

app.listen(3000)