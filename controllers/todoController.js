const Todo = require('../models/Todo')

const getAllTodos = async (req,res)=>{
    const todos = await Todo.find()/*.sort({_id:-1})*/.lean()
    if(!todos)
       return res.status(400).json({message:'not found todos'})

    res.json(todos)
}

module.exports = {getAllTodos}