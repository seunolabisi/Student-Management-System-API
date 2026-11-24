const {
  createCourse,
  getAllCourse,
  oneCourse,
  updateOneCourse,
  deleteCourse,
} = require("../controllers/courseControllers");

const router = require("express").Router();

router.post("/createcourse/:lecturerid", createCourse);

router.get("/getallcourse/all", getAllCourse);

router.get("/findonecourse/one/:courseid", oneCourse);

router.put("/updatecourse/one/:courseid", updateOneCourse);

router.delete("/deletecourse/one/:courseID", deleteCourse);

module.exports = router;
