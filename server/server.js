const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const blogRoutes = express.Router();
const PORT = 4000;

let Blog = require('./models/blog');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/blog',{
    useNewUrlParser:true
});
const connection = mongoose.connection;

connection.once('open',function () {
    console.log("mongoDB database connection established");
});

blogRoutes.route('/').get(function (req,res) {
    Blog.find(function (err,blogs) {
        if(err){
            console.log(err);
        }else{
            res.json(blogs);
        }
    })
});

blogRoutes.route('/:id').get(function (req,res) {
    let id = req.params.id;
    Blog.findById(id,function (err,blog) {
        res.json(blog);
    })
});

// blogRoutes.route('/add').post(function (req,res) {
//     let blog = new Blog(req.body);
//     blog.save()
//         .then(todo => {
//             res.status(400).send('adding new blog  field');
//         });
// });

blogRoutes.route('/update/:id').post(function(req, res) {
    Blog.findById(req.params.id, function(err, blog) {
        if (!blog)
            res.status(404).send("data is not found");
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
    });
});

blogRoutes.route('/add').post(function(req, res) {
    let blog = new Blog(req.body);
    blog.save()
        .then(todo => {
            res.status(200).json({'blog': 'blog added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new blog failed');
        });
});

app.use('/blog',blogRoutes);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
