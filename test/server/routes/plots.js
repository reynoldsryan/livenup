'use strict';

var _express = require('express');

var _auth = require('./auth');

var _plots = require('../../database/plots');

var router = _express.Router();

router.route('/', _auth.checkUser).get(function (req, res) {
  console.log('ln 9: in route/plots GET');
  var user = req.body.user;

  _plots.find(user, function (data) {
    res.send(data);
  });
}).post(function (req, res) {
  console.log('ln 17: in route/plots POST');
  var plot = req.body.plot.name;
  var length = req.body.plot.length;
  var width = req.body.plot.width;
  var plants = req.body.plot.plants;
  var user = req.body.user.email;

  _plots.add(name, length, width, plants, user, function (data) {
    res.send(data);
  });
}).put(function (req, res) {
  console.log('ln 28: in route/plots PUT');
  var plot = req.body.plot.name;
  var length = req.body.plot.length;
  var width = req.body.plot.width;
  var plants = req.body.plot.plants;
  var user = req.body.user;

  _plots.update(id, [plot, length, width, plants, user], function (data) {
    res.send(data);
  });
}).delete(function (req, res) {
  console.log('ln 39: in route/plots DELETE');
  var id = req.body.plot._id;

  _plots.plot.remove(id, function (data) {
    res.send(data);
  });
});

router.route('/plant', _auth.checkUser).get(function (req, res) {
  var plant = req.body.plant;
  //calls database function to return info on plant;
  console.log('in route /plots/plants GET');
}).post(function (req, res) {
  var plant = req.body.plant;
  //calls a database function to save a plant
  console.log('in route /plots/plants POST');
}).put(function (req, res) {
  var plant = req.body.plant;
  //calls a database function to edit a plant
  console.log('in route /plots/plants PUT');
}).delete(function (req, res) {
  console.log('in route /plots/plants DELETE');

  var id = req.body.plot._id;
  _plots.remove(id, function (data) {
    res.send(data);
  });
});

module.exports = router;
