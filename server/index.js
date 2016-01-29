import { express } from 'express';
import { routes } from './routes/routes.js';
import { bodyParser } from 'body-parser';

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

<<<<<<< Updated upstream
=======
console.log('__dirname: ', __dirname);

app.use(express.static(__dirname + '/../client/'));
>>>>>>> Stashed changes
app.use('/', routes);

app.listen(PORT, () => console.log('listening on port ', PORT));
