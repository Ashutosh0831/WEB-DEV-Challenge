const express = require("express");
const authRouter = require("../routes/auth.routes")
const postRoutes = require("../routes/post.routes")

const app = express()
app.use(express.json())


//Authentication Routes
app.use('/api/auth',authRouter)


//Post Routes
app.use('/api/post',postRoutes)








module.exports = app