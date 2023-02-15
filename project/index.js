
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router= require('./router/request')
// const {connection_sql} = require('./database/mysql_connection')
// const {check_connection } = require('./database/mysql_connection')
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/',router)


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
