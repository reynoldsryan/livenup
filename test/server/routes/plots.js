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
<<<<<<< Updated upstream
  console.log('ln 17: in route/plots POST');
  var plot = req.body.plot.name;
  var length = req.body.plot.length;
  var width = req.body.plot.width;
  var plants = req.body.plot.plants;
  var user = req.body.user.email;

  _plots.add(name, length, width, plants, user, function (data) {
=======
  //var user = req.body.user.username;
  //var plot = req.body.plot;
  //calls database and save a plot to a user
  console.log('POST | req.body',req.body);
  // var user = 'Oliver';
  // var name = 'Garden';
  // var length = 2;
  // var width = 6;

  plot.add(req.body.data.user, req.body.data.plot.name, req.body.data.plot.length, req.body.data.plot.width, function(data){
>>>>>>> Stashed changes
    res.send(data);
  });
}).put(function (req, res) {
<<<<<<< Updated upstream
  console.log('ln 28: in route/plots PUT');
  var plot = req.body.plot.name;
  var length = req.body.plot.length;
  var width = req.body.plot.width;
  var plants = req.body.plot.plants;
  var user = req.body.user;

  _plots.update(id, [plot, length, width, plants, user], function (data) {
=======
  // var user = req.body.user.username;
  // var plot = req.body.plot;
  var id = req.body.data.plot._id
  var plotProps = [req.body.data.plot.name, req.body.data.plot.length, req.body.data.plot.width, req.body.data.plot.user];
  // var id = '56a95a1cde3f91ee07acaeb9';
  // ["patio", , , ]
  plot.update(id, plotProps, function(data) {
>>>>>>> Stashed changes
    res.send(data);
  });
}).delete(function (req, res) {
<<<<<<< Updated upstream
  console.log('ln 39: in route/plots DELETE');
  var id = req.body.plot._id;

  _plots.plot.remove(id, function (data) {
=======
  // var user = req.body.user.username;
  // var plotName = req.body.plot.name;
  console.log('delete plog id:',req.body.id, 'on line 48 in plots.js');
  var id = req.body.id;
  console.log(req.query.id);
  id = req.query.id;
  plot.remove(id, function(data) {
>>>>>>> Stashed changes
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
