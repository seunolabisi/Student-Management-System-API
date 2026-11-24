const { createCourse } = require("../controllers/course.controllers");

const router = require("express").Router()



router.post("/createCourse", createCourse);


module.exports = router