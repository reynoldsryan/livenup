var express = require ('express');
var routes = require ('./routes/routes.js');
var bodyParser = require ('body-parser');
var mongoose = require ('mongoose');

mongoose.connect('mongodb://chuck:1qaz2wsx3edc4rfv@ds051595.mongolab.com:51595/heroku_d6g9mbk4');
console.log(mongoose.connection.readyState);

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));

app.use((req, res, next) => {
  res.header('Access-Controll-Allow-Origin', '*');
  res.header('Access-Controll-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Controll-Expose-Headers', 'token');

  next();
});

app.use('/', routes);

app.listen(PORT, () => console.log('listening on port ', PORT));
