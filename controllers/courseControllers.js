const courseModel = require("../models/courseModel");
const lecturerModel = require("../models/lecturerModel");

exports.createCourse = async (req, res) => {
  try {
    const lecturerid = req.params.lecturerid;

    const findlecturer = await lecturerModel.findById(lecturerid);
    if (!findlecturer) {
      return res.status(404).json({
        message: "lecturer not found.",
      });
    }

    const data = {
      courseCode: req.body.courseCode,
      courseTitle: req.body.courseTitle,
      department: findlecturer.department,
      lecturer: findlecturer._id,
    };

    const addCourse = await courseModel.create(data);
    res.status(201).json({
      message: "Course created 100%",
      course: addCourse,
    });
  } catch (error) {
    res.status(500).json({
      message: "something is going wrong",
      error: error.message,
    });
  }
};

exports.getAllCourse = async (req, res) => {
  try {
    const allCourse = await courseModel.find();
    if (allCourse.length === 0) {
      return res.status(400).json({
        message: "No course found.",
      });
    }

    res.status(200).json({
      message: "All Course gotton 100%",
      course: allCourse,
    });
  } catch (error) {
    res.status(500).json({
      message: "something is going wrong",
      error: error.message,
    });
  }
};

exports.oneCourse = async (req, res) => {
  try {
    const courseid = req.params.courseid;

    const findOneCourse = await courseModel.findById(courseid);
    if (!findOneCourse) {
      return res.status(404).json({
        message: "Course id not found.",
      });
    }

    res.status(200).json({
      message: "Course found 100%",
      course: findOneCourse,
    });
  } catch (error) {
    res.status(500).json({
      message: "something is going wrong",
      error: error.message,
    });
  }
};

exports.updateOneCourse = async (req, res) => {
  try {
    const courseid = req.params.courseid;

    const checkCourse = await courseModel.findById(courseid);
    if (!checkCourse) {
      return res.status(404).json({
        message: "Course id not found.",
      });
    }

    const updateCourse = await courseModel.findByIdAndUpdate(
      courseid,
      {
        courseCode: req.body.courseCode,
        courseTitle: req.body.courseTitle,
      },
      { returnDocument: "after", runValidators: true },
    );
    res.status(200).json({
      message: "Course updated 100%",
      course: updateCourse,
    });
  } catch (error) {
    res.status(500).json({
      message: "something is going wrong",
      error: error.message,
    });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const courseID = req.params.courseID;

    const deleteCourseId = await courseModel.findByIdAndDelete(courseID);
    if (!deleteCourseId) {
      return res.status(404).json({
        message: "Course not found.",
      });
    }

    res.status(200).json({
      message: "Course deleted.",
    });
  } catch (error) {
    res.status(500).json({
      message: "something is wrong",
      error: error.message,
    });
  }
};
