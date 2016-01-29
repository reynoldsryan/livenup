'use strict';

var _express = require('express');

var _auth = require('./auth');

var _plots = require('./plots');

var _plants = require('./plants');

var _users = require('./users');

var router = _express.Router();

<<<<<<< Updated upstream
=======
router.get('/',function(req,res){
  console.log(__dirname.slice(0,-11))
  res.sendFile(__dirname.slice(0,-18)+'index.html');
});

router.get('/', function(req, res){
  res.send('Welcome to your localhost. Page not yet available, but will soon be LivenUp (or Greenify).')
})
router.get('/bundle.js',function(req,res){
  console.log(__dirname.slice(0,-11))
  res.sendFile(__dirname.slice(0,-18)+'bundle.js');
});
router.get('/node_modules/bootstrap/dist/css/bootstrap.css',function(req,res){
  console.log(__dirname.slice(0,-11))
  res.sendFile(__dirname.slice(0,-18)+'/node_modules/bootstrap/dist/css/bootstrap.css');
});

>>>>>>> Stashed changes
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
