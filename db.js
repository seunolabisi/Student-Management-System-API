const mongoose = require("mongoose")

const databaseurl = process.env.databaseurl
mongoose.connect(databaseurl).then(()=>{console.log("Database is established")}).catch((err)=>{console.log(`Unable to Connect`+err)})

