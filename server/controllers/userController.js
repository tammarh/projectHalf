const User= require("../models/User")

const getAllUsers = async (req,res) =>{
    const users = await User.find().lean()
    if(!users)
        return res.status(400).json({message:'not users found'})
    res.json(users)
} 

const getUserById = async (req,res)=>{
    const {id}=req.body
    const userFound = await User.findById(id)
    if(!userFound)
        return res.status(404).message("not found user with Id:"+{id})

    res.json(userFound)
}

//Post
const createUser = async (req,res)=>{
    const {name,username,email,address,phone}= req.body
    if(!name || ! username)
        return res.status(401).message("not add ditails to create")
    const user = {name,username, email,address, phone }
    const newuser =await User.create(user)
    res.json(newuser)
}



module.exports = { getAllUsers , getUserById , createUser }