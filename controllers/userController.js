const User= require("../models/User")

const getAllUsers = async (req,res) =>{
    const users = await User.find().lean()
    if(!users)
        return res.status(400).json({message:'not users found'})
    res.json(users)
} 



module.exports = { getAllUsers }