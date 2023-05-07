const Report = require("../../../models/reports");
const Patient = require("../../../models/patient");

//CREATE REPORT FOR A PATIENT ACTION.
module.exports.createReport = async function (req, res) {
  try {
    if (req.body.status == undefined) {
      return res.status(206).json({
        message: "Incomplete data provided",
      });
    }

    let reportCreated = await Report.create({
      doctor: req.user._id,
      status: req.body.status,
      patient: req.params.id,
    });

    let patient = await Patient.findById(req.params.id);

    patient.reports.push(reportCreated);
    await patient.save();

    //POPULATE FUNCTION DO NOT WORK WITH CREATE..THEREFORE WE FIRST FIND THE JUST CREATED REPORTED AND
    // THEN POPULATE ITS DOCTOR FIELD
    let reportFound = await Report.findById(reportCreated._id).populate(
      "doctor"
    );

    return res.status(200).json({
      message: "Report created for the patient.",
      data: {
        createdBy: reportFound.doctor.name,
        status: reportFound.status,
        createdOn: reportFound.createdAt.toDateString(),
        patientDetails: {
          name: patient.name,
          phone_Number: patient.phone_Number,
        },
      },
    });
  } catch (error) {
    console.log("Error Found:", error);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};

//Fetching all report of patient action

module.exports.allReports = async function (req, res) {
  try {
    let reports = await Report.find({ patient: req.params.id });

    return res.status(200).json({
      message: "reports of patient",
      reports: reports,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

//REPORTS BY STATUS ACTION
module.exports.reportsByStatus = async function (req, res) {
  try {
    //FINDING THE REPORT BY STATUS
    let reports = await Report.find({ status: req.params.status }).exec();

    return res.status(200).json({
      message: `Reports of patients having status ${req.params.status}`,
      data: {
        reports: reports,
      },
    });
  } catch (error) {
    console.log("Error Found:", error);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};
