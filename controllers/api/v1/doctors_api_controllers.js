const Doctor = require("../../../models/doctors");
const jwt = require("jsonwebtoken");

module.exports.register = async function (req, res) {
  // console.log(req.body);
  try {
    let doctor = await Doctor.findOne({ email: req.body.email });

    if (doctor) {
      return res.status(400).json({
        message: "Doctor already exists",
      });
    } else {
      //create doctor
      doctor = await Doctor.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });

      return res.status(200).json({
        success: true,
        message: "You are registered Successfully!!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Unable to register doctor,Internal Server Error",
    });
  }
};

//DOCTOR LOGIN ACTION
module.exports.login = async function (req, res) {
  try {
    let doctor = await Doctor.findOne({ email: req.body.email });

    if (!doctor || doctor.password != req.body.password) {
      return res.json(422, {
        message: "Invalid Username or password",
      });
    }

    return res.status(200).json({
      message: "Signed in successfully,tokens are generated",
      data: {
        //converting doctor to json, there is secret key for decryption and expiry time is 1hr.
        token: jwt.sign(doctor.toJSON(), "hospitalapi", {
          expiresIn: "3600000",
        }),
      },
    });
  } catch (error) {
    console.log("Error Found:", error);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};
