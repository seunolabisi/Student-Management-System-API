const { createStudent, getAllStudent, getStudentById } = require("../controllers/studentController")

const router = require("express").Router()



router.post("/student", createStudent)
router.get("/student", getAllStudent)
router.get("/student/:id", getStudentById)


module.exports = router