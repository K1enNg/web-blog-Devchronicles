import Post from "../models/posts"

export const getPosts = async (request, response) => {
    try {
        const posts = await Post.find({})
        response.status(200).json({ success: true, data: posts})
    } catch (e) {
        console.log("error while fetching post: ", e.message)
        response.status(400).json({ success: false, message: "Server error"})
    }
}

export const createPosts = async (request, response) => {
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
}

export const deletePosts = async (request, response) => {
    const {id} = request.params

    try {
        await Post.findByIdAndDelete(id);
        response.status(200).json({success: true, message: "Post deleted"})
    } catch (e) {
        console.log("error while deleting post: ", e.message)
        response.status(404).json({success: false, message: "Post not found"})
    }
}

export const updatePosts = async (request, response) => {
    const { id } = request.params;

    const post = request.body

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(404).json({ success: false, message: "Invalid Product Id"})
    }

    try {
        const updatePost = await Post.findByIdAndUpdate(id, post, {new: true})
        response.status(200).json({ success: true, data: updatePost});
    } catch (e) {
        response.status(404).json({ success: false, message: "Server Error"})
    }
}