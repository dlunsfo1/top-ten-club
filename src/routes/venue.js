var express = require('express');
var app = express();
var venueRouter = express.Router();

// Require Item model in our routes module
var Venue = require('../models/Venue');

// Defined store route
venueRouter.route('/add/post').post(function(req, res) {
  var item = new Venue(req.body);
  item
    .save()
    .then(item => {
      res.status(200).json({ Item: 'Item added successfully' });
    })
    .catch(err => {
      res.status(400).send('unable to save to database');
    });
});

// Defined get data(index or listing) route
venueRouter.route('/').get(function(req, res) {
  Venue.find(function(err, itms) {
    if (err) {
      console.log(err);
    } else {
      res.json(itms);
    }
  });
});

// Defined edit route
venueRouter.route('/edit/:id').get(function(req, res) {
  var id = req.params.id;
  Venue.findById(id, function(err, item) {
    res.json(item);
  });
});

//  Defined update route
venueRouter.route('/update/:id').post(function(req, res) {
  Venue.findById(req.params.id, function(err, item) {
    if (!item) return next(new Error('Could not load Document'));
    else {
      // do your updates here
      item.item = req.body.item;

      item
        .save()
        .then(item => {
          res.json('Update complete');
        })
        .catch(err => {
          res.status(400).send('unable to update the database');
        });
    }
  });
});

// Defined delete | remove | destroy route
venueRouter.route('/delete/:id').get(function(req, res) {
  Venue.findByIdAndRemove({ _id: req.params.id }, function(err, item) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = venueRouter;
