"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Blog } from "@/lib/blogs";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import { createBlogs } from "../../api/blog";
import Link from "next/link";


const intinalize = {
  title: "",
  content: "",
  author: "",
  date: "2022-11-23"
}
export default function AddBlog() {

  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [formData ,setFormData] = useState(intinalize)

  const handleChange =(e:ChangeEvent<HTMLTextAreaElement>)=>
    {
        setFormData({...formData,[e.target.name]:e.target.value})
    }
  const handleChange1 =(e:ChangeEvent<HTMLInputElement>)=>
    {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit = async()=>{
        
      await createBlogs(formData).then((data)=>setBlogs([...blogs,data]))
      
      setFormData(intinalize)         
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Add New Blog</h1>
      <div className="flex justify-center items-center">
      <form  className=" space-y-4 w-[800px]">
        <Input value={formData.title} onChange={handleChange1} name="title" className=" border-2 border-indigo-500 "  placeholder="Title" required />
        <Textarea  value={formData.content} onChange={handleChange} className=" border-2 border-indigo-500 " name="content" placeholder="Content" required />
        <Input value={formData.author} onChange={handleChange1} className=" border-2 border-indigo-500 " name="author" placeholder="Author" required />
        <Link href="/">
        <Button onClick={handleSubmit}   className="button hover:bg-indigo-700 mt-5" type="submit">Add Blog</Button>
        </Link>
      </form>
    </div>
    
    </div>
  );
}