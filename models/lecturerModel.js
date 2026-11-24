const mongoose = require("mongoose")

const lecturerSchema = mongoose.Schema(
  {
    staffId: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "department",
      required: true
    }
  },
)

const lecturerModel = mongoose.model("lecturer", lecturerSchema)
module.exports = lecturerModel