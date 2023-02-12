const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));


app.post('/submit', (req, res) => {
  const inputData = req.body;
  console.log(inputData);
  res.send('Data received successfully!');
});

app.listen(3000, () => {
  console.log('Server running');
});
