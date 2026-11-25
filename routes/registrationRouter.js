const { registerStudent, getOneRegistration } = require("../controllers/registrationController")

const router = require("express").Router()


router.post("/registrations", registerStudent)
router.get("/registrations/:id", getOneRegistration)
// router.put("/registrations/:id", updateRegistration)
// router.delete("/registrations/:id", deleteRegistration)

module.exports = router