const courseModel = require("../models/courseModel");
const lecturerModel = require("../models/lecturerModel");

exports.createCourse = async (req, res) => {
    try {
        const lecturerid = req.params.lecturerid;

        const findlecturer = await lecturerModel.findById(lecturerid);
        if(!findlecturer){
            return res.status(404).json({
            message: "lecturer not found.",
        });
        };

        const data = {
            courseCode: req.body.courseCode,
            courseTitle: req.body.courseTitle,
            department: findlecturer.department,
            lecturer:   findlecturer._id
        };

        const addCourse = await courseModel.create(data);
        res.status(201).json({
            message: "Course created 100%",
            course: addCourse
        });
    } catch (error) {
        res.status(500).json({
            message: "something is going wrong",
            error: error.message
        });
    }
};


