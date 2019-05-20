const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

router.get('/blogs',(req,res,next)=>{
    ///Retrieve all blogs infonpm start
    Blog.find(function (err,blogs) {
        if(err){
            console.log(err);
        }else{
            res.json(blogs);
        }
    })
});

router.post('/blogs',(req,res,next)=>{
    if(req.body){
        Blog.create(req.body)
        .then(data => res.json(data))
        .catch(next)
    }else{
        res.json({
            error:"Error! input field is empty"
        })
    }
});

router.post('/blogs/update/:id',(req,res)=>{
    if(req.body){
        Blog.findById(req.params.id,(err,blog)=>{
            if(!blog){
                res.status(404).send("Data not found");
            }
            else{
                blog.title = req.body.title;
                blog.imageUrl = req.body.imageUrl;
                blog.description = req.body.description;

                blog.save().then(blog => {
                    res.json('blog updated!');
                }).catch(err => {
                        res.status(400).send("Update not possible");
                });
            }
        })
    }
});

router.delete('/blogs/:id',(req,res,next)=>{
    Blog.findOneAndDelete({"_id":req.params.id})
    .then(data => res.json(data))
    .catch(next)
});

router.get('/blogs/:id',(req,res,next)=>{
    Blog.findById({"_id":req.params.id})
    .then(data => res.json(data))
    .catch(next)
});

module.exports = router;