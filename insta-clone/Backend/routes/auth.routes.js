const express = require("express")
const authController = require("../controller/auth.controller")



const authRouter = express.Router()

//route for register the user
authRouter.post("/register", authController.registerController)


//route for login the user
authRouter.post('/login',authController.loginController)





module.exports = authRouter