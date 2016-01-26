import { express } from 'express';
import { auth } from './../auth';

const router = express.Router();

router.route('/', auth.checkUser)
  .post((req, res) => {
    const userData = req.body.user.params;
    //calls database and saves user profile
  })
  .put((req, res) => {
    const userData = req.body.user.params;
    //calls database and modifies a user profile;
  })
  .delete((req, res) => {
    const userName = req.body.user.username;
    //calls a database function that deletes the specified user
  });

module.exports = router;
