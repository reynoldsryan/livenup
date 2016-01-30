'use strict';

const express = require('express');
const auth = require('./../auth');
const plot = require('../../database/plots');
const plant = require('../../database/plants');

const router = express.Router();

router.route('/')
  .get(auth.checkUser, (req, res) => {
    console.log('ln 9: in route/plots GET');

    let _user = req.query.user;

    plot.find(_user, function(data){
      res.send(data);
    });
  })
  .post(auth.checkUser, (req, res) => {
    console.log('ln 17: in route/plots POST');

    let _name = req.body.plot.name;
    let _length = req.body.plot.length;
    let _width = req.body.plot.width;
    let _plants = req.body.plot.plants;
    let _user = req.body.user.email;

    plot.add(_name, _length, _width, _plants, _user, function(data){
      res.send(data);
    });
  })
  .put(auth.checkUser, (req, res) => {
    console.log('ln 28: in route/plots PUT');

    let _plot = req.body.plot.name;
    let _length = req.body.plot.length;
    let _width = req.body.plot.width;
    let _plants = req.body.plot.plants;
    let _user = req.body.user;
    let _id = req.body.plot._id;

    plot.update(_id, [_plot, _length, _width, _plants, _user], function(data) {
      res.send(data);
    });
  })
  .delete(auth.checkUser, (req, res) => {
    console.log('ln 39: in route/plots DELETE');
    let _id = req.query.id;

    plot.remove(_id, function(data) {
      res.send(data);
    });
  });

// router.route('/plant')
//   .get(auth.checkUser, (req, res) => {
//     let _plant = req.query.plant;
//     //calls database function to return info on plant;
//     console.log('in route /plots/plants GET');
//
//     plant.find(_plant, function(data))
//   })
//   .post(auth.checkUser, (req, res) => {
//     let plant = req.body.plant;
//     //calls a database function to save a plant
//     console.log('in route /plots/plants POST');
//   })
//   .put(auth.checkUser, (req, res) => {
//     let plant = req.body.plant;
//     //calls a database function to edit a plant
//     console.log('in route /plots/plants PUT');
//   })
//   .delete(auth.checkUser, (req, res) => {
//     console.log('in route /plots/plants DELETE');
//
//     let _id = req.body.plot._id;
//     plot.remove(id, function(data) {
//       res.send(data);
//     });
//   });


module.exports = router;
