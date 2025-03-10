const Todo = require('../models/Todo')

const getAllTodos = async (req,res)=>{
    const todos = await Todo.find()/*.sort({_id:-1})*/.lean()
    if(!todos)
       return res.status(400).json({message:'not found todos'})

    res.json(todos)
}

const getNotComplaited = async (req,res)=>{
    const todosNotComplaited = await Todo.find(t=>!t.completed).lean()
    if(!todosNotComplaited)
        return res.status(401).message('not exssiting todos not complaited !!')

    res.json(todosNotComplaited)
}

const getComplaited = async (req,res)=>{
    const todosComplaited = await Todo.find(t=>t.completed).lean()
    if(!todosComplaited)
        return res.status(401).message('not exssiting todos complaited !!')

    res.json(todosComplaited)
}

const createTodo = async (req,res) =>{
    const {title,tags,completed} = req.body
    if(!title)
        return res.status(401).message('not found todo')

    ///////// add code
}
module.exports = {getAllTodos , getComplaited , getNotComplaited}