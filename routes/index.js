const express = require("express");

const router = express.Router();

const homeControllers = require("../controllers/homecontroller");
router.get("/", homeControllers.home);
//to handle all routes of /doctors url
router.use("/doctors", require("./doctors"));

//to handle all routes of /patients url
router.use("/patients", require("./patients"));

module.exports = router;
