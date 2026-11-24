const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://seunolabisi131_db_user:E0XOF0T7nAeev3VZ@cluster0.1xuozlz.mongodb.net/").then(()=>{console.log("Database is established")}).catch((err)=>{console.log(`Unable to Connect`+err)})

