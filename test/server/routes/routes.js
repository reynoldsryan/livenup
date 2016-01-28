'use strict';

var _express = require('express');

var _auth = require('./../auth');

var _plots = require('./plots');

var _plants = require('./plants');

var _users = require('./users');

var router = _express.express.Router();

router.post('/login', function (req, res) {
  _auth.auth.login(req, res).then(function (token) {
    res.set('token', token);
    res.sendStatus(200);
  }).catch(function () {
    //redirect to signup
  });
});

router.post('/signup', function (req, res) {
  _auth.auth.signUp(req, res);
});

router.use('/plot', _plots.plots);
router.use('/api', api);
router.use('/plant', _plants.plants);
router.use('/user', _users.users);

module.exports = router;