const  mongoose = require('mongoose');
const  Schema = mongoose.Schema;

let Blog = new Schema({
    title:{
        type:String
    },
    imageUrl:{
        type:String
    },
    description:{
        type:String
    },

});

module.exports = mongoose.model('blog',Blog);