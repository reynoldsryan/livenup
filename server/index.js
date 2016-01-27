import { express } from 'express';
import { routes } from './routes/routes.js';
import { bodyParser } from 'body-parser';
import { mongoose } from 'mongoose';

mongoose.connect('mongodb://chuck:1qaz2wsx3edc4rfv'@ds051595.mongolab.com:51595/heroku_d6g9mbk4);
console.log(mongoose.connection.readyState);

const app = express();
const PORT = 3000;

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
