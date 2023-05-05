const express = require("express");

const router = express.Router();

const patientsController = require("../../../controllers/api/v1/patients_api_controllers");
const passport = require("passport");

router.post(
  "/register",
  passport.authenticate("jwt", { session: false }),
  patientsController.createPatient
);

module.exports = router;
