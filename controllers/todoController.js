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
        return res.status(400).message('not exssiting todos not complaited !!')

    res.json(todosNotComplaited)
}

const getComplaited = async (req,res)=>{
    const todosComplaited = await Todo.find(t=>t.completed).lean()
    if(!todosComplaited)
        return res.status(400).message('not exssiting todos complaited !!')

    res.json(todosComplaited)
}

const createTodo = async (req,res) =>{
    const {title,tags,completed} = req.body
    if(!title)
        return res.status(400).message('not found todo')

    ///////// add code
}

const updateTitle = async (req,res) => {
    const {id , title} = req.body
    const todo = await Todo.findById(id).exec()
    if(!todo)
        return res.status(400).message('not found todo to update')
    todo.title = title
    const updatetodo = await todo.save()
    res.send(`todo :${id} update title`)
}

const updateComplete = async (req, res) => {
    const { id } = req.params
    const todo = await Todo.findById(id).exec()
    if (!todo) {
    return res.status(400).json({ message: 'Todo not found' })
    }
    todo.complete = !todo.complete
    const updatedTodo = await todo.save()
    res.json(`'${updatedTodo.title}' updated`)
}

const deleteTodo = async (req, res) => {
    const { id } = req.body
    const todo = await Todo.findById(id).exec()
    if (!todo) {
    return res.status(400).json({ message: 'Todo not found' })
    }
    const result = await todo.deleteOne()
    const reply=`Todo '${result.title}' ID ${result._id} deleted`
    res.json(reply)
    }
module.exports = {getAllTodos , getComplaited , getNotComplaited}