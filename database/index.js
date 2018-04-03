const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://fontmonger:Pr3tty1nPinK@ds121599.mlab.com:21599/rpt05'
); //   'mongodb://127.0.0.1/fetcher'
//mongoose.Promise = global.Promise;
mongoose.Promise = require('bluebird');

var db = mongoose.connection;
mongoose
  .connect('mongodb://fontmonger:Pr3tty1nPinK@ds121599.mlab.com:21599/rpt05')
  .then(() => {
    console.log('Started mongo instance');
  })
  .catch(error => {
    console.log('problem starting Mongo', error.stack);
    process.exit(1);
  });

//db.on('error', console.error.bind(console, 'MongoDB connection error: '));

let topTenSchema = mongoose.Schema({
  // TODO: your schema here!
  // repo_id: { type: Number, index: { unique: true, dropDups: true } }, // Number,
  name: String,
  // owner: String,
  // count: Number,
  // url: String,
  // avatar_url: String,
  created_at: Date
});

let Venue = mongoose.model('Venue', topTenSchema);

let save = venueData => {
  venueData.forEach(venue => {
    var dataRecord = {
      venueName: venue.name,
      created_at: venue.created_at
    };

    Repo.findOneAndUpdate({ $set: dataRecord }, { upsert: true }, () => {
      console.log('inserted succsssfully');
    });
  }, this);
};

module.exports = {
  save
};
