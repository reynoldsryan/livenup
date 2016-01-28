'use strict';

var _jwtSimple = require('jwt-simple');

var _utilities = require('./utilities');

var _bcrypt = require('bcrypt');

var _users = require('./../../database/users');

module.exports = { //add expires to payload, then check against

  login: function login(req, res) {
    var promise = new Promise(function (resolve, reject) {
    var email = req.body.user.email;

      _users.find(email, function (data) {
        var salt = _bcrypt.genSaltSync(10);
        var payload = { user: _users, email: email, scope: _utilities.scope };
        var token = _jwtSimple.encode(payload, salt);

        console.log('+++line22  userPass', req.body.user.password)
        console.log("+++line23  dataPass: ", data[0].password)
        if (_bcrypt.compareSync(req.body.user.password, data[0].password)) {
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
    var decoded = _jwtSimple.decode(token, _utilities.salt);

    if (decoded.payload.scope === _utilities.scope) {
      next();
    } else {
      console.error('invalid token');
    };
  },
  addUser: function addUser(req, res) {
    var salt = _bcrypt.genSaltSync(10);
    var email = req.body.user.email;
    var password = _bcrypt.hashSync(req.body.user.password, salt);
    var user = req.body.user.name;
    var location = req.body.user.location;

    console.log("+++line48 password: ", password);
    _users.add(email, password, user, location, function(data){
      res.send(data);
    })
  }
};
