const express = require("express");

//Activate the express
const app =  express();

//calling the server port
require("dotenv").config();
const port = process.env.PORT;

//set the view engine
app.set('view engine', 'ejs');

//load assets


app.get("/",(req, res) =>{
    res.render('index');
})

app.listen(port,()=> console.log(`Server is running on the port ${port}`))