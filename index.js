const express = require("express");
const bodyParser = require("body-parser");

const port = 8000;

const app = express();
const db = require("./config/mongoose");
const passport = require("passport");
const passportJWT = require("./config/passport-jwt-strategy");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(passport.initialize());

//use express router
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in connecting to server on port: ${port}`);
  }
  console.log(`Succesfully connected on port: ${port}`);
});
