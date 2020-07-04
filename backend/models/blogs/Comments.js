const mongoose = require('mongoose')

const CommentsSchema = mongoose.Schema({
    comment:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Comments",CommentsSchema)