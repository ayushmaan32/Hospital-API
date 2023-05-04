const express = require("express");

const router = express.Router();

const patientsController = require("../controllers/patientsControllers");

router.post("/register", patientsController.createPatient);

module.exports = router;
