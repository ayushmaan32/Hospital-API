const express = require("express");

const router = express.Router();

const passport = require("passport");
const patientsController = require("../../../controllers/api/v1/patients_api_controllers");

const reportControllers = require("../../../controllers/api/v1/reports_api_controller");

router.post(
  "/register",
  passport.authenticate("jwt", { session: false }),
  patientsController.createPatient
);

router.post(
  "/:id/create_report",
  passport.authenticate("jwt", { session: false }),
  reportControllers.createReport
);

router.get(
  "/:id/all_reports",
  passport.authenticate("jwt", { session: false }),
  reportControllers.allReports
);

module.exports = router;
