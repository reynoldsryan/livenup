'use strict';

var _mongoose = require('mongoose');

var userSchema = new _mongoose.mongoose.Schema({
  email: { type: String },
  password: { type: String },
  name: { type: String },
  location: { type: String }
});

var User = _mongoose.mongoose.model('User', userSchema);

module.exports = {
  find: function find(email, callback) {
    User.find({ email: email }, function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  add: function add(email, password, name, location) {
    var user = new User({
      email: email,
      password: password,
      name: name,
      locaiton: location
    });

    user.save(function (err, result) {
      if (err) throw err;
      callback({
        message: "Successfully added user",
        data: result
      });
    });
  },
  update: function update(id, properties, callback) {
    Plot.findById(id, function (err, result) {
      if (err) throw err;
      if (!result) {
        callback({ message: "User with " + id + " not found" });
      }
      result.email = properties[0] || result.email;
      result.password = properties[1] || result.password;
      result.name = properties[2] || result.name;
      result.locaiton = properties[3] || result.location;

      result.save(function (err) {
        if (err) throw err;
        callback({
          message: "Successfully updated user",
          data: result
        });
      });
    });
  },
  remove: function remove(id, callback) {
    Plot.findOneAndRemove({ _id: id }, function (err, result) {
      if (err) throw err;
      callback({
        message: "Successfully deleted user",
        data: result
      });
    });
  }
};