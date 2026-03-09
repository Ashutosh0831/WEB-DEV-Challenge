const express = require("express");
const connectToDb = require("./config/db")
const app = require("./src/app")


connectToDb()

app.listen(3000,()=>{
    console.log("Server Started...");
    
})