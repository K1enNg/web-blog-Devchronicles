import express, { request } from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import Post from './models/posts.js';

dotenv.config()

const app = express();

app.use(express.json());

app.get("/api/posts/", async (request, response) => {
    try {
        const posts = await Post.find({})
        response.status(200).json({ success: true, data: posts})
    } catch (e) {
        console.log("error while fetching post: ", e.message)
        response.status(400).json({ success: false, message: "Server error"})
    }
})

app.post("/api/posts", async (request, response) => {
    const post = request.body;

    if (!post.title || !post.content || !post.image) {
        return response.status(400).json({ success: false, message: "Please provide all fields" });
    }
    

    const newPost = new Post(post)

    try {
        await newPost.save();
        response.status(201).json({ success: true, data: newPost})
    } catch (e) {
        console.error("Error: ", e.message)
        response.status(500).json({ success: false, message: "Server error"})
    }
})

app.delete("/api/posts/:id", async (request, response) => {
    const {id} = request.params

    try {
        await Post.findByIdAndDelete(id);
        response.status(200).json({success: true, message: "Post deleted"})
    } catch (e) {
        console.log("error while deleting post: ", e.message)
        response.status(404).json({success: false, message: "Post not found"})
    }
})

app.put("/api/posts/:id", async (request, response) => {
    
})

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000")
})

