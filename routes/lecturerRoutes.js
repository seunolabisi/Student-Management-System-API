const {
  lectureform,
  getAlllecturer,
  onelecturer,
  updateOneLecturer,
  deleteLecturer,
} = require("../controllers/lecturerControllers");

const router = require("express").Router();

router.post("/lectureform/:departmentid", lectureform);

router.get("/lectureall", getAlllecturer);

router.get("/lectureone/one/:lecturerid", onelecturer);

router.put("/updateone/one/:lecturerid", updateOneLecturer);

router.delete("/deleteone/one/:lecturerid", deleteLecturer);

module.exports = router;
