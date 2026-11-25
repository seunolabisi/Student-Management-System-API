const registrationModel = require("../models/registrationModel")
const studentModel = require("../models/studentModel")
const courseModel = require("../models/courseModel")


exports.registerStudent = async (req, res) => {
    try {
        const studentData = {
            student: req.body.student,
            course: req.body.course,
            semester: req.body.semester,
            session: req.body.session
        }

        const checkStudent = await studentModel.findById(studentData.student)
        if (!checkStudent) {
            return res.status(404).json({
                message: "Student does not exist"
            })
        }

        const checkCourse = await courseModel.findById(studentData.course)
        if(!checkCourse) {
            return res.status(404).json({
            message: "course does not exist",
         });

    }

    const data = await registrationModel.create(studentData)
    res.status(201).json({
        message: "Student Course registration is successful!",
        data
    })

        
    } catch (error) {
        res.status(500).json({
        message: "Something went wrong",
        error: error.message
    });
}

}


exports.getAllRegistration = async (req, res) => {
    try {
        const data = await registrationModel.find().populate("student").populate("course")

        if (data.length === 0) {
            return res.status(404).json({
                message: "No registrations found"
            })
        }

        res.status(200).json({
            message: "All registrations retrieved successfully",
            data
        })
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}



exports.getOneRegistration = async (req, res) => {
    try {
        const registrationId = req.params.id

        const data = await registrationModel.findById(registrationId).populate("student").populate("course")
        if (!data) {
            return res.status(404).json({
                message: "Registration not found"
            })
        }
        res.status(200).json({
            message: "Registration retrieved successfully",
            data
        })

    } catch (error) {
                res.status(500).json({
                  message: "Something went wrong",
                  error: error.message,
                });
        
    }
}



exports.updateRegistration = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}