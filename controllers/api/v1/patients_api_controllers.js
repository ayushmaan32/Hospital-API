const Patients = require("../../../models/patient");

//creating patients action
module.exports.createPatient = async function (req, res) {
  console.log(req.body);
  try {
    let patient = await Patients.findOne({
      phone_Number: req.body.phone_Number,
    });
    // if patient found
    if (patient) {
      return res
        .status(400)
        .json({ message: "Patient already exists", patient });
    } else {
      patient = await Patients.create({
        name: req.body.name,
        phone_Number: req.body.phone_Number,
        doctor: req.user._id,
      });

      return res.status(200).json({
        success: true,
        message: "patient successfully registered",
        patient: patient,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Unable to register patient,Internal Server Error",
    });
  }
};
