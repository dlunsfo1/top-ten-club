var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Users
let User = new Schema(
  {
    item: {
      name: String,
      favorites: Array,
      emailaddress: String,
      admin: Boolean,
      created_at: Date
    }
  },
  {
    collection: 'users'
  }
);

module.exports = mongoose.model('User', User);
