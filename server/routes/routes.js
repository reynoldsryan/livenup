'use strict';

const express = require('express');
const auth = require('./../auth');
const plots = require('./plots');
const plants = require('./plants');
const users = require('./users');

const router = express.Router();


router.post('/login', (req, res) => {
  auth.login(req, res)
    .then( (token) => {
      res.set('token', token);
      res.sendStatus(200);
    })
    .catch( () => {
      //redirect to signup
    });
  });

router.post('/signup', (req, res) => {
  auth.addUser(req, res);
});

router.use('/plot', plots);
router.use('/plant', plants);
router.use('/user', users);


module.exports = router;
