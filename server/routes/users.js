'use strict';

const express = require('express');
const auth  = require('./../auth');
const jwt = require('jwt-simple');
const secret = require('./../utilities');
const socket = require('./../sockets');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    //console.log('req.app.ioMiddleware in users: ', req.app.ioMiddleware);
    // let _token = req.headers.token;
    // let _decodedEmail = jwt.decode(_token, secret.salt).email;
    let _decodedEmail = 'genevieve@email.com';

    socket(req.app.ioMiddleware, _decodedEmail);

  })

module.exports = router;


// router.route('/')
//   .post(auth.checkUser, (req, res) => {
//     let userData = req.body.user;
//     //calls database and saves user profile
//   })
//   .put((req, res) => {
//     let userData = req.body.user.params;
//     //calls database and modifies a user profile;
//   })
//   .delete((req, res) => {
//     let userName = req.body.user.username;
//     //calls a database function that deletes the specified user
//   });
