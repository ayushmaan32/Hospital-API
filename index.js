const express = require("express");
const bodyParser = require("body-parser");

const port = 8000;

const app = express();
const db = require("./config/mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//use express router
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in connecting to server on port: ${port}`);
  }
  console.log(`Succesfully connected on port: ${port}`);
});
