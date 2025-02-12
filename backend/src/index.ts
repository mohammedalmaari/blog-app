import express from 'express';
import mongoose from 'mongoose';
import blogsRouter  from '../routers/blogs';
import cors from "cors"
const app = express();
const port = 5000;
app.use(cors({
    origin: "http://localhost:3000"
}))

app.use(express.json());


mongoose.connect('mongodb://127.0.0.1:27017/blogs')
.then(() => console.log('Connected!'));


app.use("/blogs",blogsRouter)
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});