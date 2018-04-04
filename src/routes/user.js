var express = require('express');
var app = express();
var userRouter = express.Router();
var util = require('../lib/util');

// Require Item model in our routes module
var User = require('../models/User');
//
var bcrypt = require('bcrypt-nodejs');
var session = require('express-session');

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
);

// Defined store route
userRouter.route('/add').post(function(req, res) {
  console.log('userRouter ', req.body);
  var item = new User(req.body);
  item
    .save()
    .then(item => {
      res.status(200).json({ Item: 'User added successfully' });
    })
    .catch(err => {
      res.status(400).send('unable to save User to database');
    });
});

// Defined get data(index or listing) route
userRouter.route('/').get(function(req, res) {
  User.find(function(err, itms) {
    if (err) {
      console.log(err);
    } else {
      res.json(itms);
    }
  });
});

// Defined edit route
userRouter.route('/edit/:id').get(function(req, res) {
  var id = req.params.id;
  User.findById(id, function(err, item) {
    res.json(item);
  });
});

//  Defined update route
userRouter.route('/update/:id').post(function(req, res) {
  User.findById(req.params.id, function(err, item) {
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
userRouter.route('/delete/:id').get(function(req, res) {
  User.findByIdAndRemove({ _id: req.params.id }, function(err, item) {
    if (err) res.json(err);
    else res.json('Successfully removed');
  });
});

module.exports = userRouter;
