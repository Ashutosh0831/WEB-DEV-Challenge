const mongoose = require("mongoose")



const userSchema = new mongoose.Schema({
    name : {
        type:String,
        required : [true, "Name is required"]
    },
    email :{
        type : String,
        required : [true, "Email is required"]
    },
    username : {
        type : String,
        required : [true, "username is required"],
        unique : true
    },
    password :{
        type : String,
    }
})


const userModel = mongoose.model("user", userSchema)


module.exports = userModel