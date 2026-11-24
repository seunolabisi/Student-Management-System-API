const departmentModel = require("../models/departmentModel")

//create a department
exports.createDepartment = async (req, res) => {
    try {
        departmentData = {
            name: req.body.name,
            code: req.body.code,
            faculty: req.body.faculty
        }

        if (!departmentData.name || !departmentData.code || !departmentData.faculty) {
            res.status(400).json({
                message: "All fields are required"
            })
        }
        
        const data = await departmentModel.create(departmentData)
        res.status(201).json({
            message: "Department created successfully",
            data
        })
    } catch (error) {
            res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
        
    }
}