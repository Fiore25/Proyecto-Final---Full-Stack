var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/User');

passport.use(new GoogleStrategy({
    clientID: "355953527167-t7t76mjcuhnbladdb7kres0nhfpf00jc.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "/auth/google.js"
  },
  function(accessToken, refreshToken, profile, done) {
      User.findOrCreate({ userid: profile.id }, { name: profile.displayName,userid: profile.id }, function (err, user) {
          return done(err, user);
      });
  }
));


module.exports = passport;
