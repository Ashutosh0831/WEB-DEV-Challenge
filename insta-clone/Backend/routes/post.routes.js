const express = require("express")
const postContoller = require("../controller/post.controller")
const identifyUser = require("../middleware/auth.middleware")



const postRoutes = express.Router()

postRoutes.post('/',identifyUser,postContoller.addPostContoller)






module.exports = postRoutes