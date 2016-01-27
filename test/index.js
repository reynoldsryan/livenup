'use strict';

var _express = require('express');

var _routes = require('./routes/routes.js');

var _bodyParser = require('body-parser');

var app = _express();
var PORT = 3000;

var _mongoose = require('mongoose');

_mongoose.connect('mongodb://chuck:1qaz2wsx3edc4rfv@ds051595.mongolab.com:51595/heroku_d6g9mbk4');
console.log('mongoose connection', _mongoose.connection.readyState);

app.use(_bodyParser.json());
app.use(_bodyParser.urlencoded({ extend: true }));

app.use(function (req, res, next) {
  res.header('Access-Controll-Allow-Origin', '*');
  res.header('Access-Controll-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Controll-Expose-Headers', 'token');

  next();
});

app.use('/', _routes);

app.listen(PORT, function () {
  return console.log('listening on port ', PORT);
});
