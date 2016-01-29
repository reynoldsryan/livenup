import { jwt } from 'jwt-simple';
import { secret } from './utilities';
import { bcrypt } from 'bcrypt';

module.exports = {  //add expires to payload, then check against
  login(req, res){
    const promise = new Promise ( (resolve, reject) => {
      const user = req.body.user.username;
      const email = req.body.user.email;
      const password = bcrypt(req.body.user.password);

      //should then call a database function which returns the hashed password
      //then call bcrypt.compare to see if the user exists
        //if they do - return a token
          const payload = {user: user, email: email, scope: secret.scope};
          const token = jwt.encode(payload, secret.salt);
          resolve(token);
        //else reject and redirect
          reject();
    });
      return promise;
  },

  checkUser(req, res, next){
    const token = req.header.token;
    const decoded = jwt.decode(toke, seceret.salt);

    if(decoded.payload.scope === secret.scope){
      next();
    }
    else{ throw new Error('invalid token') };
  },

  addUser(req, res){
    const user = req.body.user.username;
    const email = req.body.user.email;
    const password = bcrypt(req.body.user.password);

    //call database function to submit user info
    //redirect to login

<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes
  }

};
