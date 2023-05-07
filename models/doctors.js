const mongooose = require("mongoose");

// Schema for doctor
const doctorSchema = new mongooose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: [6, "password should be greater than 6 length characters"],
    },
  },
  {
    timestamps: true,
  }
);

const Doctor = mongooose.model("Doctor", doctorSchema);
module.exports = Doctor;
