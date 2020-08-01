//This is the server

const express = require("express");
const morgan  = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

const mongodb_url = 'mongodb://127.0.0.1:27017/Turing';
mongoose.Promise=global.Promise;
mongoose.connect(mongodb_url);
mongoose.connection.on('error', (err)=> {
    throw err;
    process.exit(1);
})

//PORT DECLARATION
var PORT = process.env.PORT || 3000;
//middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static("src"));
//ROUTES
app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"src/index0.html"));
})







//default route

app.listen(PORT, (error)=>{
    console.log("Servidor Corriendo");
})
