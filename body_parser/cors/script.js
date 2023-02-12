var express = require('express');
var app = express()
var cors =require('cors')

// using cors for granting request to another source
app.use(cors())

const bat = fetch("http://localhost:4000/data")
.then(res => res.json())
.then(data => console.log(data))

app.get('/', (req, res) => {
    res.end(bat)
 })

app.listen(3000)