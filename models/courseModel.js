const mongoose = require("mongoose")

const courseSchema = mongoose.Schema(
  {
    courseCode: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
    },
    courseTitle: {
      type: String,
      required: true,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "department",
      required: true
    },
    lecturer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "lecturer",
      required: true
    }
  }
);

const courseModel = mongoose.model("course", courseSchema);
module.exports = courseModel