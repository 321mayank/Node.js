const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Received!");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
