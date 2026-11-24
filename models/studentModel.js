const mongoose = require("mongoose")

const studentSchema = mongoose.Schema({
    matricNumber: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    level: {
      type: Number,
      required: true,
      enum: [100, 200, 300, 400, 500]
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "department",
      required: true
    }
  },
)

const studentModel = mongoose.model("student", studentSchema)
module.exports = studentModel