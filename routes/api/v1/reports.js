const express = require("express");

const router = express.Router();

const reportControllers = require("../../../controllers/api/v1/reports_api_controller");

router.get("/:status", reportControllers.reportsByStatus);

module.exports = router;
