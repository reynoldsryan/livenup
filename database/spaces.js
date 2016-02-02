'use strict';

const mongoose = require('mongoose');

const spaceSchema = new mongoose.Schema( {
  name: {type: String},
  length: {type: Number},
  width: {type: Number},
  plants: {type: Array},
  user: {type: Array}
});

const Space = mongoose.model('Space', spaceSchema);

module.exports = {
  find (user, callback) {
    Space.find({user: user}, (err, result) => {
      if(err) console.error(err);
      callback(result);
    });
  },

  add (name, length, width, plants, user, callback) {
    let space = new Space({
      name: name,
      length: length,
      width: width,
      plants: plants,
      user: user
    });

    space.save((err, result) => {
      if(err) throw err;
      callback({
        message: "Successfully added space",
        data: result
      });
    });
  },

  update (id, properties, callback) {
    Space.findById(id, (err, result) => {
      if(err) console.error(err);
      if(!result) {
        callback({message: "Space with " + id + " not found"});
      }
      result.name = properties[0] || result.name;
      result.length = properties[1] || result.length;
      result.width = properties[2] || result.width;
      result.plants = properties[3] || result.plants;
      result.user = properties[4] || result.user;

      result.save((err) => {
        if(err) console.error(err);
        callback({
          message: "Successfully updated the space",
          data: result
        });
      });
    });
  },

  remove (id, callback) {
    Space.findOneAndRemove({_id: id}, (err, result) => {
      if(err) console.error(err);
      callback({
        message: "Successfully deleted space",
        data: result
      });
    });
  }
}
