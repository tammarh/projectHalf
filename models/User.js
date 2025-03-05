const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    username:{
        type:String,
        require:true
    },
    email:{
        type:String
    },
    address:{
        type:String

    },
    phone:{
        type:String
    }
},{
    timestamps:true
})
module.exports = mongoose.model('User',userSchema)