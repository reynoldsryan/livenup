'use strict';

var _express = require('express');

var _auth = require('./auth');

var _plots = require('./plots');

var _plants = require('./plants');

var _users = require('./users');

var router = _express.Router();


router.post('/login', function (req, res) {
  _auth.login(req, res)
  .then(function (token) {
    res.set('token', token);
    res.sendStatus(200);
  }).catch(function () {
    //redirect to signup
  });
});

router.post('/signup', function (req, res) {
  _auth.addUser(req, res);
});

router.use('/plot', _plots);
router.use('/plant', _plants);
router.use('/user', _users);

module.exports = router;
