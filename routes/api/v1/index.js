const express = require("express");

const reportRoutes = require("./reports");

const router = express.Router();

//to handle all routes of /doctors url
router.use("/doctors", require("./doctors"));
//to handle all routes od /patient url
router.use("/patients", require("./patients"));
//to handle all routes od /report url
router.use("/reports", reportRoutes);

module.exports = router;
