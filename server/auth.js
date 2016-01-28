import { jwt } from 'jwt-simple';
import { secret } from './utilities';
import { bcrypt } from 'bcrypt';
import { user } from './../database/users';

module.exports = {  //add expires to payload, then check against
  login(req, res){
    const promise = new Promise ( (resolve, reject) => {
      const email = req.body.user.email;

      user.find(email, (data) => {
        const payload = {user: user, email: email, scope: secret.scope};
        const token = jwt.encode(payload, secret.salt);

        if(bcrypt.compareSync(req.body.user.password, data.password)) {
          resolve(token);
        }
        else {
          reject();
        }
      })
    });
      return promise;
  },

  checkUser(req, res, next){
    const token = req.header.token;
    const decoded = jwt.decode(token, seceret.salt);

    if(decoded.payload.scope === secret.scope){
      next();
    }
    else{ console.error('invalid token') };
  },

  addUser(req, res){
    const user = req.body.user.username;
    const email = req.body.user.email;
    const password = bcrypt.hash(req.body.user.password);

    //call database function to submit user info
    //redirect to login

  }

};
