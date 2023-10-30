const express = require("express");

//Activate the express
const app =  express();

//calling the server port
require("dotenv").config();
const port = process.env.PORT;

app.get("/",(req, res) =>{
    res.send("Crud Application")
})

app.listen(port,()=> console.log(`Server is running on the port ${port}`))