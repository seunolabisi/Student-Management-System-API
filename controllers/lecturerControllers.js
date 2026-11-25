const lecturerModel = require("../models/lecturerModel");
const departmentModel = require("../models/departmentModel");


exports.lectureform = async (req, res) => {
  try {
    const departmentid = req.params.departmentid;

    const finddepartment= await departmentModel.findById(departmentid);
    if (!finddepartment) {
      return res.status(404).json({
        message: "Department not found.",
      });
    }

    const data = {
      staffId: req.body.staffId,
      department: finddepartment._id,
      email: req.body.email,
      fullName: req.body.fullName,
    };

    const addlecture = await lecturerModel.create(data);
    res.status(201).json({
      message: "lecture created 100%",
      lecturers: addlecture,
    });
  } catch (error) {
    res.status(500).json({
      message: "something is going wrong",
      error: error.message,
    });
  }
};



exports.getAlllecturer = async (req, res) => {
  try {
    const alllecturer = await lecturerModel.find();
    if (alllecturer.length === 0) {
      return res.status(400).json({
        message: "No lecturer found.",
      });
    }

    res.status(200).json({
      message: "All lecturer gotton 100%",
      lecturers: alllecturer,
    });
  } catch (error) {
    res.status(500).json({
      message: "something is going wrong",
      error: error.message,
    });
  }
};

exports.onelecturer = async (req, res) => {
  try {
    const lecturerid = req.params.lecturerid;

    const findOnelecturer = await lecturerModel.findById(lecturerid);
    if (!findOnelecturer) {
      return res.status(404).json({
        message: "lecturer id not found.",
      });
    }

    res.status(200).json({
      message: "lecturer found 100%",
      lecturers: findOnelecturer,
    });
  } catch (error) {
    res.status(500).json({
      message: "something is going wrong",
      error: error.message,
    });
  }
};



exports.updateOneLecturer = async (req, res) => {
  try {
    const lecturerid = req.params.lecturerid;

    const checkLecturer = await lecturerModel.findById(lecturerid);
    if (!checkLecturer) {
      return res.status(404).json({
        message: "Lecturer id not found.",
      });
    }

    const updateLecturer = await lecturerModel.findByIdAndUpdate(
      lecturerid,
      {
        fullName: req.body.fullName,
        email: req.body.email,
      },
      { returnDocument: "after", runValidators: true },
    );
    res.status(200).json({
      message: "Lecturer updated 100%",
      Lecturers: updateLecturer,
    });
  } catch (error) {
    res.status(500).json({
      message: "something is going wrong",
      error: error.message,
    });
  }
};

exports.deleteLecturer = async (req, res) => {
  try {
    const lecturerid = req.params.lecturerid;

    const deleteLecturerId = await lecturerModel.findByIdAndDelete(lecturerid);
    if (!deleteLecturerId) {
      return res.status(404).json({
        message: "Lecturer id not found.",
      });
    }

    res.status(200).json({
      message: "Lecturer deleted.",
    });
  } catch (error) {
    res.status(500).json({
      message: "something is wrong",
      error: error.message,
    });
  }
};