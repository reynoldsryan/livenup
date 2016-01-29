'use strict';

const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema( {
  name: {type: String},
  description: {type: String},
  durability: {type: String},
});

const Plant = mongoose.model('Plant', plantSchema);

module.exports = {
  find (name, callback) {
    Plant.find({name: name}, (err, result) => {
      if(err) throw err;
      callback(result);
    })
  }
}
