const Post = require('../models/Post')

const allPosts = async (req,res)=>{
    const posts = await Post.find().lean()
    if(!posts)
        return res.status(400).messege('not found posts')
    res.json(posts)
}

const createPost = async (req,res) =>{
    const {title , body} = req.body
    if(!title)
        return res.status(400).messege('not found post to create')
    const newPost = await Post.create({title,body})
    if(newPost)
        return res.status(201).messege(' new Post created')
    else
        return res.status(400).messege('Invalid post')
}

module.exports = {allPosts , createPost}