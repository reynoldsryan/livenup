import { mongoose } from 'mongoose';

const plotSchema = new mongoose.Schema( {
  name: {type: String},
  length: {type: Number},
  width: {type: Number},
  plants: {type: Array},
  user: {type: Array}
});

const Plot = mongoose.model('Plot', plotSchema);

module.exports = {
  find (user, callback) {
    Plot.find({user: user}, (err, result) => {
      if(err) throw err;
      callback(result);
    });
  },

  add (name, length, width, plants, user, callback) {
    let plot = new Plot({
      name: name,
      length: length,
      width: width,
      plants: plants,
      user: user
    });

    plot.save((err, result) => {
      if(err) throw err;
      callback({
        message: "Successfully added plot",
        data: result
      });
    });
  },

  update (id, properties, callback) {
    Plot.findById(id, (err, result) => {
      if(err) throw err;
      if(!result) {
        callback({message: "Plot with " + id + " not found"});
      }
      result.name = properties[0] || result.name;
      result.length = properties[1] || result.length;
      result.width = properties[2] || result.width;
      result.plants = properties[3] || result.plants;
      result.user = properties[4] || result.user;

      result.save((err) => {
        if(err) throw err;
        callback({
          message: "Successfully updated the plot",
          data: result
        });
      });
    });
  },

  remove (id, callback) {
    Plot.findOneAndRemove({_id: id}, (err, result) => {
      if(err) throw err;
      callback({
        message: "Successfully deleted plot",
        data: result
      });
    });
  }
}
