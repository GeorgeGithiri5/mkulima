const mongoose = require("mongoose")

const AddBlog = mongoose.Schema({
    topic:{
        type:String,
        required: true
    },
    message:{
        type:String,
        require: true
    },
    image:{
        type:String
    }
})

module.exports = mongoose.model("Blogs",AddBlog)