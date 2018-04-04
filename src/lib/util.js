var request = require('request');

/************************************************************/
// Add additional utility functions below
/************************************************************/

// checkUser (per learn app)
// order of the aruguments makes a differnece , req, resp

exports.checkUser = function(request, response, next) {
  if (!request.session.user) {
    console.log('checkUser ', request.session.user);
    //response.redirect('/auth/github');
  } else {
    console.log('checkUser ', request.session.user);
    next();
  }
};

// newSession

exports.newSession = function(request, response, user) {
  return request.session.regenerate(function() {
    console.log('new session started - util.newSession ', user);
    request.session.user = true;
    //request.session.authenticated = true;
    response.redirect(301, '/');
  });
};
