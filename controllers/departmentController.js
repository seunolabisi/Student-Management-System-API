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


exports.getAllDepartment = async (req, res) => {
    try {
        const data = await departmentModel.find()

        if (data.length == 0) {
            return res.status(404).json({
                message: "Departments cannot be found"
            })
        }

        res.status(200).json({
            message: "Departments retrieved successfully",
            data
        })
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error.message
        })
    }
}



exports.getOneDepartment = async (req, res) => {
    try {
        const deptId = req.params.id
        
        const data = await departmentModel.findById(deptId)    

        if (!data) {
            return res.status(404).json({
                message: "Department not found"
            })
        }

        res.status(200).json({
            message: "Department retrieved successfully",
            data
        })
        
    } catch (error) {
                res.status(500).json({
                  message: "Something went wrong",
                  error: error.message,
                });
        
    }
}


exports.updateDepartment = async (req, res) => {
    try {
        const deptId = req.params.id

        const data = await departmentModel.findByIdAndUpdate(deptId, req.body, {
          new: true,
          runValidators: true,
        });

        res.status(200).json({
            message: "Department Record updated successfully",
            data
        })
        
    } catch (error) {
        res.status(500).json({
        message: "Something went wrong",
        error: error.message,
    });
        
    }

}



exports.deleteDepartment = async (req, res) => {
    try {
        const deptId = req.params.id

        const data = await departmentModel.findByIdAndDelete(deptId)

        if (!data) {
            return res.status(404).json({
                message: "Department not found"
            })
        }

        res.status(200).json({
            message: "Department deleted successfully",
            data
        })      
    } catch (error) {
                res.status(500).json({
                  message: "Something went wrong",
                  error: error.message,
                });      
    }
}