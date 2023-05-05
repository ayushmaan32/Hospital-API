const Doctor = require("../../../models/doctors");

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
