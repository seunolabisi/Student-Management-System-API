const { createStudent, getAllStudent } = require("../controllers/studentController")

const router = require("express").Router()



router.post("/student", createStudent)
router.get("/student", getAllStudent)


module.exports = router