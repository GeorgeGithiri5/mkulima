const express = require('express');
const router = express.Router()
const Screen = require("../../models/blogs/Screening")

router.get('/',async(req,res)=>{
    const getAll = await Screen.find()
    res.json(getAll)
})

router.post('/', async(req,res)=>{
    const Add = new Screen({
        name: req.body.name,
        contact: req.body.contact,
        qualification: req.body.qualification,
        cert: req.body.cert,
        email: req.body.email
    })
    const post = await Add.save()
                            .then(data=>{
                                res.send("Data Added")
                            })
                            .catch(err=>{
                                res.json({"message": err})
                            })
})

module.exports = router