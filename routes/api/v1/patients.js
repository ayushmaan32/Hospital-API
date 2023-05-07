const express = require("express");

const router = express.Router();

const passport = require("passport");
const patientsController = require("../../../controllers/api/v1/patients_api_controllers");

const reportControllers = require("../../../controllers/api/v1/reports_api_controller");

// Routes for register Patients
router.post(
  "/register",
  passport.authenticate("jwt", { session: false }),
  patientsController.createPatient
);

//making routes protected only doctor can access
//putting session to false will disable the generation of session cookies.
// Routes for creating report
router.post(
  "/:id/create_report",
  passport.authenticate("jwt", { session: false }),
  reportControllers.createReport
);

// Routes for all reports of a patients
router.get(
  "/:id/all_reports",
  passport.authenticate("jwt", { session: false }),
  reportControllers.allReports
);

module.exports = router;
