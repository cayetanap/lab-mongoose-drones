const express = require('express');
const Drone = require('../models/drone');
// require the Drone model here

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
  Drone.find({}, (err, drones) => {
    if (err) {
      return next(err)
    }

    res.render('index', {
      drones: drones
    });
  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
  res.render('drones/new');
});

router.post('/drones', (req, res, next) => {

  let dronito = {
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  }

  const drone = new Drone(dronito);

  drone.save((err) => {
    if (err) {
      return res.render("drones/new", {
        errors: drone.errors
      })
    } else {
      res.redirect('/drones');
    }
  });

  // res.render('droneName', drone);
});

router.get('/drones/:id', (req, res, next) => {
  const droneId = req.params.id;

  Drone.findById(droneId, (err, drone) => {
    if (err) {
      return next(err)
    }
    res.render('drones/show', {
      drone: drone
    });

  });
});

router.get('/drones/:id/edit', (req, res, next) => {
  const droneId = req.params.id;

  Drone.findById(droneId, (err, drone) => {
    if (err) {
      return next(err)
    }
    res.render('drones/edit', {
      drone: drone
    });

  });
});

router.post('/drones/:id', (req, res, next) => {
  const droneId = req.params.id;

  const updates = {
    droneName: req.body.droneName,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed
  };

  Drone.findByIdAndUpdate(droneId, updates, (err, drone) => {
    if (err) {
      return next(err)
    }
    return res.redirect('/drones');
  });

  // res.render('droneName', drone);
});

module.exports = router;
