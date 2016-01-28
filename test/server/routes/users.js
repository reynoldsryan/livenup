'use strict';

var _express = require('express');

var _auth = require('./auth');

var router = _express.Router();

router.route('/').post(function (req, res) {
  var userData = req.body.user.params;

}).put(function (req, res) {
  var userData = req.body.user.params;
  //calls database and modifies a user profile;
}).delete(function (req, res) {
  var userName = req.body.user.username;
  //calls a database function that deletes the specified user
});

module.exports = router;
