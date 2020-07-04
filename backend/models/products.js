const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type:String,
        required:true
    },
    incart: {
        default: false
    },
    recommended: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        required:true
    },
    quantity: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("products",ProductSchema)