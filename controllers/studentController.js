const studentModel = require("../models/studentModel");



exports.createStudent = async (req, res) => {
  try {
    studentData = {
        matricNumber: req.body.matricNumber,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        level: req.body.level,
        department: req.body.department
    }

    const checkMatricNumber = await studentModel.findOne({ matricNumber: req.body.matricNumber})
    const checkEmail = await studentModel.findOne({email: req.body.email})

    if (checkMatricNumber || checkEmail) {
        res.status(400).json({
            message: "Email or Matric Number already exist"
        })
    }

    const data = await studentModel.create(studentData)
    res.status(201).json({
        message: "Student Record created successfully..",
        data
    })

  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
