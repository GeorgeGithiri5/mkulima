const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const cors = require('cors')
const app = express();

// Applying middleware
app.use(bodyParser.json())
app.use(cors())

// Mongoose Database Connect
const db = require("./config/keys").mongoUri
mongoose.connect(db,(err)=>{
    if(err==null){
       return console.log("Database Connected")
    }else{
        console.log(err)
    }
})

// Routes 

const ScreeningRoute = require('./routes/BlogRoutes/ScreeningRoute')
const AddBlog = require('./routes/BlogRoutes/Add')
const Comments = require("./routes/BlogRoutes/Comments")

app.use("/blogscreening",ScreeningRoute)
app.use('/blogAdd',AddBlog)
app.use('/comments',Comments)

// Port
const port = 4000;

app.listen(port,()=>{
    console.log(`Server Listening At Port : ${port}`)
})