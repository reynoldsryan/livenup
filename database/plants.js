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

function queryPlants (names) {
  let query = `this.name === ${names[0]}`;
  for(let plant = 1 ; plant < names.length ; plant++){
    query += ` || this.name === ${names[plant]}`;
  }
  return query += `;`;
};

module.exports = {
  find (plants, callback) {
    let queryString = queryPlants(plants);

    Plant.find({ }, (err, result) => {
      if(err) console.error(err);
      callback(result);
    }).$where( () => queryString );
  }
}
