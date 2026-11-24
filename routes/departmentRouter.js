const { createDepartment } = require("../controllers/departmentController");

const router = require("express").Router()



router.post("/departments", createDepartment);


module.exports = router