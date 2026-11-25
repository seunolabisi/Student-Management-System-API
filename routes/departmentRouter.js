const { createDepartment, getAllDepartment, getOneDepartment, updateDepartment, deleteDepartment } = require("../controllers/departmentController");

const router = require("express").Router()



router.post("/departments", createDepartment);
router.get("/departments", getAllDepartment)
router.get("/departments/:id", getOneDepartment)
router.put("/departments/:id", updateDepartment);
router.delete("/departments/:id", deleteDepartment);


module.exports = router