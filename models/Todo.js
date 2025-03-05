const mongoose = require('mongoose')
const todoSchema = new mongoose.model({
    title:{
        type:String,
        require:true
    },
    tags:{
        //I need to add code
    },
    completed:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})
module.exports = mongoose.model('Todo',todoSchema)