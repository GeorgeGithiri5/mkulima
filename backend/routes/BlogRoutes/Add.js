const express = require('express');
const router = express.Router()
const AddBlog = require("../../models/blogs/Add")

router.get("/",async(req,res)=>{
    const AllBlog = await AddBlog.find()
    res.json(AllBlog)
})

router.post('/',async(req,res)=>{
    const AddBloog = new AddBlog({
        topic: req.body.topic,
        message: req.body.message,
        image: req.body.image
    })
    const save = AddBloog.save()
                        .then(save=>{
                            res.send("Data Added")
                        })
})

module.exports = router