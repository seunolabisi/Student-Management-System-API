const { createStudent, getAllStudent, getStudentById, updateStudent, deleteStudent } = require("../controllers/studentController")

const router = require("express").Router()



router.post("/student", createStudent)
router.get("/student", getAllStudent)
router.get("/student/:id", getStudentById)
router.put("/student/:id", updateStudent)
router.delete("/student/:id", deleteStudent)


module.exports = router