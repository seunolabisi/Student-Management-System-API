const mongoose = require("mongoose");

const departmentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
    },
    faculty: {
      type: String,
      required: true,
    }
  }
)

const departmentModel = mongoose.model("department", departmentSchema)
module.exports = departmentModel