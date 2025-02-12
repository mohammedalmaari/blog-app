import express  from "express";
import {blogModel} from "../src/model/blog"

const router = express.Router();

router.get('/',async(req,res)=>{
    const blogs = await blogModel.find();
    res.status(200).send(blogs);
});
router.get('/:id',async(req,res)=>{
    const blogs = await blogModel.findById(req.params.id);
    if(!blogs)
    {
        res.status(404).send("students not found");
    }
        else{
            res.status(200).send(blogs);
        }
    
});
router.post('/', async(req,res)=>{
    
    const data  = req.body;
    const newBlogs = await blogModel.create(data);
    res.status(201).send(newBlogs);
    
    
});
router.put('/:id', async(req,res)=>{
    const id = req.params.id;
    const data  = req.body;
    const blog = await blogModel.findByIdAndUpdate(id ,data, {new:true});
    if(!blog)
        {
            res.status(404).send("students not found");
        }
        else{
            res.send(blog);
        }

    });
    router.delete('/:id', async(req,res)=>{
    const id = req.params.id;
    const blog = await blogModel.findByIdAndDelete(id);
    if(!blog)
        {
            res.status(404).send("students not found");
        }
            else{
                res.send(blog);
            }
});

export default router;