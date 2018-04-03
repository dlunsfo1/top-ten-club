var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Venues
let Venue = new Schema(
  {
    item: {
      name: String,
      website: String,
      about: String,
      address: String,
      city: String,
      state: String,
      zipcode: String,
      venuecat: String,
      created_at: Date
    }
  },
  {
    collection: 'venues'
  }
);

module.exports = mongoose.model('Venue', Venue);
