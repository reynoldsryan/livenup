'use strict';

var _jwtSimple = require('jwt-simple');

var _utilities = require('./utilities');

var _bcrypt = require('bcrypt');

module.exports = { //add expires to payload, then check against

  login: function login(req, res) {
    var promise = new Promise(function (resolve, reject) {
      var user = req.body.user.username;
      var password = _bcrypt(req.body.user.password);

      //should then call a database function which returns the hashed password
      //then call bcrypt.compare to see if the user exists
      //if they do - return a token
      var payload = { user: user, scope: _utilities.scope };
      var token = _jwtSimple.encode(payload, _utilities.salt);
      resolve(token);
      //else reject and redirect
      reject();
    });
    return promise;
  },
  checkUser: function checkUser(req, res, next) {
    var token = req.header.token;
    var decoded = _jwtSimple.jwt.decode(toke, seceret.salt);

    if (decoded.payload.scope === _utilities.secret.scope) {
      next();
    } else {
      throw new Error('invalid token');
    };
  },
  addUser: function addUser(req, res) {
    var user = req.body.user.username;
    var email = req.body.user.email;
    var password = (0, _bcrypt.bcrypt)(req.body.user.password);

    //call database function to submit user info
    //redirect to login
  }
};
