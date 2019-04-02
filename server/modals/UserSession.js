const mongoose =  require('mongoose');

const UserSessionSchema = new mongoose.Schema({
 
    userId:{
        type:number,
        default:-1
    },
    timestamp:{
        type:Date,
        default:Date.now()
    },
    isDeleted:{
        type:boolean,
        default:false
    }
})
module.exports = mongoose.model('UserSession',UserSessionSchema)