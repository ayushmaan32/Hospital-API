const express = require("express");

const router = express.Router();

const doctorsController = require("../../../controllers/api/v1/doctors_api_controllers");

router.post("/register", doctorsController.register);

router.post("/login", doctorsController.login);

module.exports = router;
