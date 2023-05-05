const express = require("express");

const router = express.Router();

const patientsController = require("../../../controllers/api/v1/patients_api_controllers");

router.post("/register", patientsController.createPatient);

module.exports = router;
