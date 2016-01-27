import { express } from 'express';
import { auth } from './../auth';

const router = express.Router();

router.route('/', auth.checkUser)
  .get((req, res) => {
    const user = req.body.user.username;
    //calls database and return list of plots and plants based on user
    console.log('in route /plots GET');
  })
  .post((req, res) => {
    const user = req.body.user.username;
    const plot = req.body.plot;
    //calls database and save a plot to a user
    console.log('in route /plots POST');
  })
  .put((req, res) => {
    const user = req.body.user.username;
    const plot = req.body.plot;
    //calls database and modifies a plot
    console.log('in route /plots PUT');
  })
  .delete((req, res) => {
    const user = req.body.user.username;
    const plotName = req.body.plot.name;
    //calls a database function that deletes the specified plot
    console.log('in route /plots DELETE');
  });

router.route('/plant', auth.checkUser)
  .get((req, res) => {
    const plant = req.body.plant;
    //calls database function to return info on plant;
    console.log('in route /plots/plants GET');
  })
  .post((req, res) => {
    const plant = req.body.plant;
    //calls a database function to save a plant
    console.log('in route /plots/plants POST');
  })
  .put((req, res) => {
    const plant = req.body.plant;
    //calls a database function to edit a plant
    console.log('in route /plots/plants PUT');
  })
  .delete((req, res) => {
    const plant = req.body.plant;
    //calls a database function that deletes the specified plant
    console.log('in route /plots/plants DELETE');
  });

module.exports = router;
