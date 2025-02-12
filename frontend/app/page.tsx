"use client"; // لأننا نستخدم Hooks، يجب إضافة هذا السطر


import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Blog } from "@/lib/blogs";
import { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard";
import { fetchBlogs } from "../api/blog";
import AddBlog from "./add-blog/page";
import Details from "./details/page";

export default function Home() {
  
  const [blogs, setBlogs] = useState<Blog[]>([]);
  return (
    <div className="container mx-auto p-4  min-h-screen">
    <div>
    {/* <AddBlog blogs={blogs} setBlogs={setBlogs} /> */}
    <Details/>
    </div>
    </div>
  );
}