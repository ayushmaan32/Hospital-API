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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Patient", patientSchema);
