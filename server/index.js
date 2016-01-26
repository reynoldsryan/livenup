var espress = require('express');
var app = express();
var routes = require('./routes.js');
var bodyParser = require('body-parser');
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));

app.use((req, res, next) => {
  res.header('Access-Controll-Allow-Origin', '*');
  res.header('Access-Controll-Allow-Methods', 'GET, POST, PUT');
  res.header('Access-Controll-Expose-Headers', 'token');

  next();
});

app.use('/', routes);

app.listen(PORT, () => console.log('listening on port ', PORT));
