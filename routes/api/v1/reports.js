const express = require("express");

const router = express.Router();

const reportControllers = require("../../../controllers/api/v1/reports_api_controller");

//Routes for List all the reports of all the patients filtered by a specific status
router.get("/:status", reportControllers.reportsByStatus);

module.exports = router;
