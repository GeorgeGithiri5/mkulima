const mongoose = require("mongoose")

const ScreeningSchema = mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    contact:{
        type:String,
        required: true
    },
    qualification: {
        type:String,
        required:true
    },
    cert: {
        type:String
    },
    email: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Screening",ScreeningSchema)