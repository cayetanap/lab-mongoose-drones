// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');
const Drone = require('../models/drone');

const drones = [{
    droneName: 'Pepe el rápido',
    propellers: 3,
    maxSpeed: 90
  },
  {
    droneName: 'Tortuga la lenta',
    propellers: 1,
    maxSpeed: 10
  },
  {
    droneName: 'la Gacela',
    propellers: 6,
    maxSpeed: 70
  },
];

Drone.collection.drop();

Drone.create(drones, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((drone) => {
    console.log(drone.droneName)
  });
  mongoose.connection.close();
});
