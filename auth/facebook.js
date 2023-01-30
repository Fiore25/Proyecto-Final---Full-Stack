var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/User');

passport.use(new FacebookStrategy({
    clientID: '502415982045077',
    clientSecret: '5c56272c60de4f1f00f3aec42a2e1360',
    callbackURL: '/auth/facebook.js'
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({userid: profile.id}, {name: profile.displayName,userid: profile.id}, function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));

module.exports = passport;