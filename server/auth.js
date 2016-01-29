'use strict';

const jwt = require('jwt-simple');
const secret = require('./utilities');
const bcrypt = require('bcrypt');
const user = require('./../database/users');
const salt = bcrypt.genSaltSync(10);

module.exports = {  //add expires to payload, then check against
  login (req, res) {
    let existingUser = new Promise ( (resolve, reject) => {
      let  _email = req.body.user.email;

      user.find(_email, (data) => {
        console.log('data in user.find in auth: ', data);

        let payload = {email: _email, scope: secret.scope};
        let token = jwt.encode(payload, secret.salt);

        if(bcrypt.compareSync(req.body.user.password, data[0].password)) {
          resolve({token: token, data: data});
        }
        else {
          reject();
          //------/ ADD ERROR HANDLING /-----//

        }
      });
    });
      return existingUser;
  },

  checkUser (req, res, next) {
    // console.log('****** Checking User Auth: ', req.headers.token);
    // console.log('****** Secret in user.find in auth: ', secret);

    let _token = req.headers.token;
    let _decoded = jwt.decode(_token, secret.salt);

    // console.log('****** Decoded in user.find in auth: ', _decoded);

    if(_decoded.scope === secret.scope){
      next();
    }
    else{ console.error('invalid token') };
  },

  addUser (req, res) {
    let newUser = new Promise ((resolve, reject) => {

      //console.log('inside addUser auth, req.body: ', req.body);

      let _email = req.body.user.email;
      let _password = bcrypt.hashSync(req.body.user.password, salt);
      let _user = req.body.user.name;
      let _location = req.body.user.location;

      let payload = {email: _email, scope: secret.scope};
      let token = jwt.encode(payload, salt);

      user.add(_email, _password, _user, _location, (data) => {
        let resolved = {token: token, data: data};
        resolve(resolved);
        //------/ ADD ERROR HANDLING /-----//
      });
    });
    return newUser;
  }

};
