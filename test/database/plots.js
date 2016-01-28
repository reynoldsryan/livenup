'use strict';

var _mongoose = require('mongoose');

var plotSchema = new _mongoose.mongoose.Schema({
  name: { type: String },
  length: { type: Number },
  width: { type: Number },
  plants: { type: Array },
  user: { type: Array }
});

var Plot = _mongoose.mongoose.model('Plot', plotSchema);

module.exports = {
  find: function find(user, callback) {
    Plot.find({ user: user }, function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },
  add: function add(name, length, width, plants, user, callback) {
    var plot = new Plot({
      name: name,
      length: length,
      width: width,
      plants: plants,
      user: user
    });

    plot.save(function (err, result) {
      if (err) throw err;
      callback({
        message: "Successfully added plot",
        data: result
      });
    });
  },
  update: function update(id, properties, callback) {
    Plot.findById(id, function (err, result) {
      if (err) throw err;
      if (!result) {
        callback({ message: "Plot with " + id + " not found" });
      }
      result.name = properties[0] || result.name;
      result.length = properties[1] || result.length;
      result.width = properties[2] || result.width;
      result.plants = properties[3] || result.plants;
      result.user = properties[4] || result.user;

      result.save(function (err) {
        if (err) throw err;
        callback({
          message: "Successfully updated the plot",
          data: result
        });
      });
    });
  },
  remove: function remove(id, callback) {
    Plot.findOneAndRemove({ _id: id }, function (err, result) {
      if (err) throw err;
      callback({
        message: "Successfully deleted plot",
        data: result
      });
    });
  }
};