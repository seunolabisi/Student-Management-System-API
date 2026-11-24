const mongoose = require("mongoose")

const registrationSchema = mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
      required: true
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "course",
      required: true
    },
    semester: {
      type: String,
      required: true,
      enum: ["First Semester", "Second Semester"]
    },
    session: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Registered",
      enum: ["Registered", "Dropped", "Completed"]
    }
  });

const registrationModel = mongoose.model("registration", registrationSchema);
module.exports = registrationModel;