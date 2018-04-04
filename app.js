var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = 4200;
var cors = require('cors');
var config = require('./config/config');

console.log();

// Mongoose connection with mongodb
mongoose.Promise = require('bluebird');
mongoose
  .connect(
    `mongodb://${config.CLIENT_ID}:${
      config.SECRET_ID
    }@ds121599.mlab.com:21599/rpt05`
  )
  .then(() => {
    // if all is ok we will be here
    console.log('Start');
  })
  .catch(err => {
    // if error we will be here
    console.error('App starting error:', err.stack);
    process.exit(1);
  });

// Required application specific custom router module
var itemRouter = require('./src/routes/venue');
var userRouter = require('./src/routes/user');

// Use middlewares to set view engine and post json data to the server
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/items', itemRouter);
app.use('/user', userRouter);

// Start the server
app.listen(port, function() {
  console.log('Server is running on Port: ', port);
});
