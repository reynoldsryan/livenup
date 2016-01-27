'use strict';

var _express = require('express');

var _auth = require('./../auth');

var _plots = require('./plots');

var _plants = require('./plants');

var _users = require('./users');

var router = _express.Router();

router.get('',function(req,res){
  console.log(__dirname.slice(0,-11))
  res.sendFile(__dirname.slice(0,-11)+'index.html');
});
router.get('/bundle.js',function(req,res){
  console.log(__dirname.slice(0,-11))
  res.sendFile(__dirname.slice(0,-11)+'bundle.js');
});
router.get('/node_modules/bootstrap/dist/css/bootstrap.css',function(req,res){
  console.log(__dirname.slice(0,-11))
  res.sendFile(__dirname.slice(0,-11)+'/node_modules/bootstrap/dist/css/bootstrap.css');
});

router.post('/login', function (req, res) {
  console.log('req.body',req.body);
  console.log('req.headers',req.headers);

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
