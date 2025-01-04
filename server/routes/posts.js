import express from 'express'
import { createPosts, deletePosts, getPosts, updatePosts } from '../controller/posts.js';


const router = express.Router();

router.get("/", getPosts)
router.post("/", createPosts)
router.delete("/:id", deletePosts)
router.put("/:id", updatePosts)

export default router;

