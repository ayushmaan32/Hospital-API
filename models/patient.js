const mongoose = require("mongoose");

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
        createdBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Doctor",
        },
        status: {
          type: String,
          enum: [
            "Negative",
            "Travelled-Quarantine",
            "Symptoms-Quarantine",
            "Positive-Admit",
          ],
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
  },
  { timestamps: true }
);

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
