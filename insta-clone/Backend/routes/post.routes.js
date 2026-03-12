const express = require("express")
const postContoller = require("../controller/post.controller")



const postRoutes = express.Router()

postRoutes.post('/',postContoller.addPostContoller)






module.exports = postRoutes