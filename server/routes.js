var express = require('express');
var router = express.Router();

router.get('/login', (req, res) => {
  //call a function in auth.js
  //verify user in database and create a token
    //here after use middleware to verify token
});

module.exports = routes;
