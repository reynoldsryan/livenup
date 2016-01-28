'use strict';

const jwt = require('jwt-simple');
const secret = require('./utilities');
const bcrypt = require('bcrypt');
const user = require('./../database/users');
const salt = bcrypt.genSaltSync(10);

module.exports = {  //add expires to payload, then check against
  login (req, res) {
    let promise = new Promise ( (resolve, reject) => {
      let  _email = req.body.user.email;

      user.find(_email, (data) => {
        let payload = {email: _email, scope: secret.scope};
        let token = jwt.encode(payload, salt);

        if(bcrypt.compareSync(req.body.user.password, data[0].password)) {
          resolve(token);
        }
        else {
          reject();
        }
      });
    });
      return promise;
  },

  checkUser (req, res, next) {
    let _token = req.header.token;
    let _decoded = jwt.decode(token, salt);

    if(decoded.payload.scope === secret.scope){
      next();
    }
    else{ console.error('invalid token') };
  },

addUser (req, res) {
  console.log('inside addUser auth, req.body: ', req.body);
  let _email = req.body.user.email;
  let _password = bcrypt.hashSync(req.body.user.password, salt);
  let _user = req.body.user.username;
  let _location = req.body.user.location;

console.log('inside addUser auth, User: ', user);
  user.add(_email, _password, _user, _location, (data) => {
    res.send(data);
  });
}

};
