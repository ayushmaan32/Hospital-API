const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

const Doctor = require("../models/doctors");

let opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: "hospitalapi",
};

passport.use(
  new JWTStrategy(opts, async function (jwtPayLoad, done) {
    try {
      const doctor = await Doctor.findById(jwtPayLoad._id);
      if (doctor) {
        return done(null, doctor);
      } else {
        return done(null, false);
      }
    } catch (err) {
      console.log("Error in finding Doctor from JWT");
      return done(err, false);
    }
  })
);

module.exports = passport;
