'use strict';

var _jwtSimple = require('jwt-simple');

var _utilities = require('./utilities');

var _bcrypt = require('bcrypt');

var _users = require('./../database/users');

module.exports = { //add expires to payload, then check against

  login: function login(req, res) {
    var promise = new Promise(function (resolve, reject) {
      var email = req.body.user.email;

      _users.user.find(email, function (data) {
        var payload = { user: _users.user, email: email, scope: _utilities.secret.scope };
        var token = _jwtSimple.jwt.encode(payload, _utilities.secret.salt);

        if (_bcrypt.bcrypt.compareSync(req.body.user.password, data.password)) {
          resolve(token);
        } else {
          reject();
        }
      });
    });
    return promise;
  },
  checkUser: function checkUser(req, res, next) {
    var token = req.header.token;
    var decoded = _jwtSimple.jwt.decode(token, seceret.salt);

    if (decoded.payload.scope === _utilities.secret.scope) {
      next();
    } else {
      console.error('invalid token');
    };
  },
  addUser: function addUser(req, res) {
    var user = req.body.user.username;
    var email = req.body.user.email;
    var password = _bcrypt.bcrypt.hash(req.body.user.password);

    //call database function to submit user info
    //redirect to login
  }
};