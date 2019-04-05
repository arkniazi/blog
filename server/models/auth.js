const mongoose = required('mongoose');
const Schema = mongoose.Schema;

let auth = new Schema({
    username:{
        type:string
    },
    password:{
        type:string
    }
});


module.exports = mongoose.model('auth',auth);