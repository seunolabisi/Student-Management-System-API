const env = require("dotenv")
env.config()
const express = require("express")
require("./db")
const studentRouter = require("./routes/studentRouter")
const departmentRouter = require("./routes/departmentRouter")
const courserouter = require("./routes/courseRouter")
PORT = 9999


const app = express()
app.use(express.json())

app.use(studentRouter)
app.use(departmentRouter)
app.use(courserouter)


app.listen(PORT, ()=>{console.log(`My port is running on `+PORT)})    