const CONSTANTS = require('./consts');
const express = require('express');
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin",
      "https://sharp-northcutt-1bdda8.netlify.app/");
  res.header("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS");
});

// http://localhost:3000
// https://sharp-northcutt-1bdda8.netlify.app

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const session = require('cookie-session')
app.use(session({
  secret: 'keyboard cat',
  cookie: {}
}));

const mongoose = require('mongoose');
mongoose.connect(CONSTANTS.MONGODB_URL);

require('./users/user-controller')(app);

app.listen(process.env.PORT || 4000);