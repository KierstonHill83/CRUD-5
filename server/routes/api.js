var express = require('express');
var router = express.Router();
var Vehicle = require('../models/vehicles.js');

// GET all vehicles
router.get('/vehicles', function(req, res, next) {
  Vehicle.find(function(err, data) {
    if(err) {
      res.json({'ERROR': err});
    } else {
      res.json(data);
    }
  });
});

// GET single vehicle
router.get('/vehicle/:id', function(req, res, next) {
  Vehicle.findById(req.params.id, function(err, data) {
    if(err) {
      res.json({'ERROR': err});
    } else {
      res.json(data);
    }
  });
});

// POST all vehicles
router.post('/vehicles', function(req, res, next) {
  newVehicle = new Vehicle ({
    make: req.body.make,
    model: req.body.model,
    year: req.body.year
  });
  newVehicle.save(function(err, data) {
    if(err) {
      res.json({'ERROR': err});
    } else {
      res.json(data);
    }
  });
});

// PUT single vehicle
router.put('/vehicle/:id', function(req, res, next) {
  var update = {
    make: req.body.make,
    model: req.body.model,
    year: req.body.year
  };
  Vehicle.findByIdAndUpdate(req.params.id, update, function(err, data) {
    if(err) {
      res.json({'ERROR': err});
    } else {
      res.json(data);
    }
  });
});

// DELETE single vehicle
router.delete('/vehicle/:id', function(req, res, next) {
  Vehicle.findByIdAndRemove(req.params.id, function(err, data) {
    if(err) {
      res.json({'ERROR': err});
    } else {
      res.json(data);
    }
  });
});


module.exports = router;