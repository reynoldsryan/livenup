'use strict';

const express = require('express');
const auth  = require('./../auth');
const jwt = require('jwt-simple');
const secret = require('./../utilities');

const router = express.Router();

router.route('/')
  .post(auth.checkUser, (req, res) => {
    let userData = req.body.user;
    //calls database and saves user profile
  })
  .put((req, res) => {
    let userData = req.body.user.params;
    //calls database and modifies a user profile;
  })
  .delete((req, res) => {
    let userName = req.body.user.username;
    //calls a database function that deletes the specified user
  });

router.route('/hardware')
  .post((req, res) => {
    let _token = req.headers.token;
    let _decoded = jwt.decode(_token, secret.salt);

    let options = {
       host: 'blouhm url',
       port: 8070,
       path: '/user/path/something',
       method: 'GET',
       headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
       body: {'userEmail': _decoded.email}
    }

    let request = http.request(options, (res) => {

    })
    res.send(_decoded.email);
  })

module.exports = router;
