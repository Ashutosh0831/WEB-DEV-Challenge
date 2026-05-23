const express = require("express");
const authRouter = require("../routes/auth.routes")
const postRoutes = require("../routes/post.routes")
const cookieParser = require("cookie-parser")

const app = express()
app.use(express.json())
app.use(cookieParser)


//Authentication Routes
app.use('/api/auth',authRouter)


//Post Routes
app.use('/api/post',postRoutes)








module.exports = app