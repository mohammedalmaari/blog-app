"use client"
import { fetchBlogs } from '@/api/blog'
import BlogCard from '@/components/BlogCard'
import { Button } from '@/components/ui/button'
import { Blog } from '@/lib/blogs'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Details = () => {

    const [blogs, setBlogs] = useState<Blog[]>([]);
    
      useEffect(() => {   
        // تحميل المدوّنات عند بدء التطبيق
        fetchBlogs().then((data)=>setBlogs(data))
      }, []);
  return (
    <div className="container mx-auto p-4  min-h-screen">
          <h1 className=" text-3xl font-bold mb-6">Blogs</h1>
    
        <div className="  mt-20">
    
        <Link href="/add-blog" >
    
                    { blogs.length > 0 
                    ?
        
                    <BlogCard blogs={blogs}/>
        
                    :
                    <h1 className="text-red-500 text-center text-4xl font-blod">No-Content</h1>
                    }
        
            <div className="flex justify-center items-center mt-10">
            <Button className="button hover:bg-indigo-700"> Add New Blogs</Button>
            </div>
            
    </Link>
        </div>
        </div>
  )
}

export default Details
