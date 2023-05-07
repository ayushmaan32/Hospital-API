const express = require("express");

const router = express.Router();

const doctorsController = require("../../../controllers/api/v1/doctors_api_controllers");
// doctor register routes
router.post("/register", doctorsController.register);
// doctor login routes
router.post("/login", doctorsController.login);

module.exports = router;
