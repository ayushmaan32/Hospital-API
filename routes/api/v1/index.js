const express = require("express");

const reportRoutes = require("./reports");

const router = express.Router();

router.use("/doctors", require("./doctors"));
router.use("/patients", require("./patients"));
router.use("/reports", reportRoutes);

module.exports = router;
