import { jwt } from 'jwt-simple';
import { secret } from ('./utilities').salt;
import { scope } from ('./utilities').scope;
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
          const payload = {user: user, email: email, scope: scope};
          const token = jwt.encode(payload, secret);
          resolve(token);
        //else reject and redirect
          reject();
    });
      return promise;
  },
  
  checkUser(req, res, next){
    const token = req.header.token;
    const decoded = jwt.decode(toke, seceret);

    if(decoded.payload.scope === scope){
      next(true);
    }
    else{ throw new Error('invalid token') }
  }

};
