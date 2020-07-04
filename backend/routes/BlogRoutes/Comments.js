const express = require("express")
const router = express.Router()
const Comment = require("../../models/blogs/Comments")

router.get('/',async(req,res)=>{
    const AllComments =await Comment.find()
    res.send(AllComments)
})

router.post('/',async(req,res)=>{
    const AddComment = new Comment({
        comment: req.body.comment
    })
    const saveComment =await AddComment.save()
                                        .then(save=>{
                                            res.send("Data Added")
                                        })
                                        .catch(err=>res.send(err))
})

module.exports = router