'use strict';

const express = require('express');
const auth = require('./../auth');
const space = require('../../database/spaces');
const plant = require('../../database/plants');

const router = express.Router();

router.route('/')
  .get(auth.checkUser, (req, res) => {
    console.log('ln 9: in route/plots GET');

    let _user = req.query.user;

    space.find(_user, function(data){
      res.send(data);
    });
  })
  .post(auth.checkUser, (req, res) => {
    console.log('ln 17: in route/spaces POST');

    let _name = req.body.space.name;
    let _length = req.body.space.length;
    let _width = req.body.space.width;
    let _plants = req.body.space.plants;
    let _user = req.body.user.email;

    space.add(_name, _length, _width, _plants, _user, function(data){
      res.send(data);
    });
  })
  .put(auth.checkUser, (req, res) => {
    console.log('ln 28: in route/spaces PUT');

    let _space = req.body.space.name;
    let _length = req.body.space.length;
    let _width = req.body.space.width;
    let _plants = req.body.space.plants;
    let _user = req.body.user;
    let _id = req.body.space._id;

    space.update(_id, [_space, _length, _width, _plants, _user], function(data) {
      res.send(data);
    });
  })
  .delete(auth.checkUser, (req, res) => {
    console.log('ln 39: in route/spaces DELETE');
    let _id = req.query.id;

    space.remove(_id, function(data) {
      res.send(data);
    });
  });

// router.route('/plant')
//   .get(auth.checkUser, (req, res) => {
//     let _plant = req.query.plant;
//     //calls database function to return info on plant;
//     console.log('in route /spaces/plants GET');
//
//     plant.find(_plant, function(data))
//   })
//   .post(auth.checkUser, (req, res) => {
//     let plant = req.body.plant;
//     //calls a database function to save a plant
//     console.log('in route /spaces/plants POST');
//   })
//   .put(auth.checkUser, (req, res) => {
//     let plant = req.body.plant;
//     //calls a database function to edit a plant
//     console.log('in route /spaces/plants PUT');
//   })
//   .delete(auth.checkUser, (req, res) => {
//     console.log('in route /spaces/plants DELETE');
//
//     let _id = req.body.space._id;
//     space.remove(id, function(data) {
//       res.send(data);
//     });
//   });


module.exports = router;
