const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        minlength:[13,'email is too short'],
    },
    username:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        unique:true,
        minlength:[3,'username is too short'],
    },
    password:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        minlength:[3,'password is too short'],
    }
})

const userModel = mongoose.model('user',userSchema);

module.exports = userModel;