var jwt = require('jwt-simple');
var secret = require('./utilities').authenticate.salt;
var scope = require('./utilities').authenticate.scope;
var bcrypt = require('bcrypt');

module.exports = {
  //this function should return a promise
  //add expires to payload, then check against
  login: (req, res, next) => {
    var user = req.body.user.username;
    var email = req.body.user.email;
    var password = bcrypt(req.body.user.password);

    //should then call a database function which returns the hashed password
    //then call bcrypt.compare to see if the user exists
      //if they do - return a token
      var payload = {user: user, email: email, scope: scope}
      var token = jwt.encode(payload, secret);
      res.set('token', token);
      res.sendStatus(200);

      //else redirect to signup

      next();
  },
  checkUser: (req, res, next) => {
    var token = req.header.token;
    var decoded = jwt.decode(toke, seceret);

    if(decoded.payload.scope === scope){
      next(true);
    }

  }

};
