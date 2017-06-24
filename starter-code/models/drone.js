const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DroneSchema = new Schema({
  droneName: {
    type: String,
    required: [true, 'Please enter your name']
  },
  propellers: Number,
  maxSpeed: {
    type: Number,
    max: 100
  }
});

const Drone = mongoose.model('Drone', DroneSchema);
module.exports = Drone;
