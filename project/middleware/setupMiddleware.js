const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const urlencoded = require('urlencoded');
const bcrypt = require('bcrypt');

function setupMiddleware() {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(helmet());
  app.use(cors());
  app.use(morgan('dev'));
}

module.exports = {
  setupMiddleware
};