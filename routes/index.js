const express = require("express");

const router = express.Router();

const homeControllers = require("../controllers/homecontroller");
router.get("/", homeControllers.home);
//to handle all routes of /api url
router.use("/api", require("./api"));

module.exports = router;
