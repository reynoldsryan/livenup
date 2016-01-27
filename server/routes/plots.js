import { express } from 'express';
import { auth } from './../auth';

const router = express.Router();

router.route('/', auth.checkUser)
  .get((req, res) => {
    const user = req.body.user.username;
    //calls database and return list of plots and plants based on user
  })
  .post((req, res) => {
    const user = req.body.user.username;
    const plot = req.body.plot;
    //calls database and save a plot to a user
  })
  .put((req, res) => {
    const user = req.body.user.username;
    const plot = req.body.plot;
    //calls database and modifies a plot
  })
  .delete((req, res) => {
    const user = req.body.user.username;
    const plotName = req.body.plot.name;
    //calls a database function that deletes the specified plot
  });

router.route('/plant', auth.checkUser)
  .get((req, res) => {
    const plant = req.body.plant;
    //calls database function to return info on plant;
  })
  .post((req, res) => {
    const plant = req.body.plant;
    //calls a database function to save a plant
  })
  .put((req, res) => {
    const plant = req.body.plant;
    //calls a database function to edit a plant
  })
  .delete((req, res) => {
    const plant = req.body.plant;
    //calls a database function that deletes the specified plant
  });

module.exports = router;
