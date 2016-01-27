import { express } from 'express';
import { auth } from './../auth';

const router = express.Router();

router.route('/', auth.checkUser)
  .get((req, res) => {
    const params = req.body.search.params;
    //calls database and return list plants based on filter
  })
  .post((req, res) => {
    //calls database and saves a plant
  })
  .put((req, res) => {
    const plant = req.body.plant;
    //calls database and modifies a plant
  })
  .delete((req, res) => {
    const plantName = req.body.plant.name;
    //calls a database function that deletes the specified plant
  });

module.exports = router;
