const mongoose = require("mongoose");

// Schema for Patients
const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone_Number: {
      type: String,
      required: true,
      unique: true,
    },
    reports: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Report",
      },
    ],
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
  },
  { timestamps: true }
);

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
