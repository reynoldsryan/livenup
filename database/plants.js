'use strict';

const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema( {
  name: {type: String},
  latinName: {type: String},
  description: {type: String},
  hardiness: {type: Number, max: 9, min: 1},
  skillLevel: {type: Number, max: 100, min: 1},
  minHeight: {type: Number},
  maxHeight: {type: Number},
  wateringSchedule: {type: String},
  soil: {type: String},
  photo: {type: String}
});

const Plant = mongoose.model('Plant', plantSchema);

module.exports = {
  find (name, callback) {
    Plant.find({name: name}, (err, result) => {
      if(err) console.error(err);
      callback(result);
    })
  }
}
