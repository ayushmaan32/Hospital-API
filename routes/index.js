const express = require("express");

const router = express.Router();

const homeControllers = require("../controllers/home.controller");
router.get("/", homeControllers.home);
//to handle all routes of /doctors url
router.use("/doctors", require("./doctors"));

module.exports = router;
