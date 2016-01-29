import { express } from 'express';
import { auth } from './../auth';
import { plots } from './plots';
import { plants } from './plants';
import { users } from './users';

const router = express.Router();


router.post('/login', (req, res) => {
  auth.login(req, res)
    .then( (token) => {
      res.set('token', token);
      res.sendStatus(200);
    })
    .catch( () => {
      //redirect to signup
    });
  });

router.post('/signup', (req, res) => {
<<<<<<< Updated upstream
  auth.signUp(req, res);
=======
  auth.addUser(req, res)
    .then( (promise) => {
      res.set('token', promise.token);
      res.json(promise.data);
    })
    .catch( () => {
      //handle error
      res.sendStatus(500);
    });
>>>>>>> Stashed changes
});

router.use('/plot', plots);
router.use('/api', api);
router.use('/plant', plants);
router.use('/user', users);


module.exports = router;
