const { createStudent } = require("../controllers/studentController")

const router = require("express").Router()



router.post("/student", createStudent)


module.exports = router