const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Hospital_Api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});

//Setting up connection to MONGODB
const db = mongoose.connection;
db.on("error", console.error.bind(console, "error on connectiong to db"));
db.once("open", function () {
  console.log("connected to database :: MongoDB");
});

module.exports = db;
