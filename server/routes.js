import { express } from 'express';
import { auth } from './auth';
const router = express.Router();


router.get('/login', (req, res) => {
  auth.login(req, res)
    .then( (token) => {
      res.set('token', token);
      res.sendStatus(200);
    })
    .catch( () => {
      //redirect to signup
    });
  });


module.exports = router;
