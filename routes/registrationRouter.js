const { registerStudent, getOneRegistration, updateRegistration, deleteRegistration, getAllRegistration } = require("../controllers/registrationController")

const router = require("express").Router()


router.post("/registrations", registerStudent)
router.get("/registrations", getAllRegistration)
router.get("/registrations/:id", getOneRegistration)
router.put("/registrations/:id", updateRegistration)
router.delete("/registrations/:id", deleteRegistration)

module.exports = router