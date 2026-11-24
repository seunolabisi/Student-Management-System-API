const express = require("express")
require("./db")
PORT = 9999
const app = express()
app.use = express.json()
app.listen(PORT, ()=>{console.log(`My port is running on `+PORT)})