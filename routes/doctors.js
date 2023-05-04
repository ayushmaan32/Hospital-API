const express = require("express");

const router = express.Router();

const doctorsController = require("../controllers/doctorsControllers");

router.post("/register", doctorsController.register);

module.exports = router;
