const mongoose = require('mongoose')
const photoSchema = new mongoose.model({
    title:{
        type:String,
        default:'non title'
    },
    imageUrl:{
        type:String,
        require: true
    }
},{})
module.exports = mongoose.model('Photo',photoSchema)