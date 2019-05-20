const mongoose = required('mongoose');

const auth = mongoose.Schema({
    passwordHash:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    tokenSeed:{
        type:String,
        required:true,
        unique:true,
    },
    createdAt:{
        type:Date,
        default:()=>new Date()
    }
});

module.exports = mongoose.model('auth',auth);