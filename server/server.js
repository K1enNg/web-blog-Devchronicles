import express, { request } from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';

import postRoutes from './routes/posts.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/posts", postRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at http://localhost:${PORT}`)
})

