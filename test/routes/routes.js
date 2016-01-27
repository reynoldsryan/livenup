'use strict';

var _express = require('express');

var _auth = require('./../auth');

var _plots = require('./plots.js');

var _plants = require('./plants.js');

var _users = require('./users.js');

var router = _express.Router();

router.get('/', function(req, res){
  res.send('Welcome to your localhost. Page not yet available, but will soon be LivenUp (or Greenify).')
})

router.post('/login', function (req, res) {
  _auth.login(req, res).then(function (token) {
    res.set('token', token);
    res.sendStatus(200);
  }).catch(function () {
    //redirect to signup
  });
});

router.post('/signup', function (req, res) {
  _auth.signUp(req, res);
});

router.use('/plot', _plots);
router.use('/plant', _plants);
router.use('/user', _users);

module.exports = router;
