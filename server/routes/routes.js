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
  auth.signUp(req, res);
});

router.use('/plots', plots);
router.use('/api', api);
router.use('/plants', plants);
router.use('/user', users);


module.exports = router;
