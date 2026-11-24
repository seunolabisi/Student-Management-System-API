const env = require("dotenv")
env.config()
const express = require("express")
require("./db")
const studentRouter = require("./routes/studentRoute")
PORT = 9999


const app = express()
app.use(express.json())

app.use(studentRouter)


app.listen(PORT, ()=>{console.log(`My port is running on `+PORT)})    