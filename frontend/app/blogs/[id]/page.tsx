"use client"; // لأننا نستخدم Hooks

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Blog } from "@/lib/blogs";
import { Button } from "@/components/ui/button";
import { fetchOneBlog } from "@/api/blog";
import ButtonBack from "@/components/ButtonBack";


export default function BlogDetails() {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const params = useParams();
  const id = params.id as string;

  useEffect(() => {
    if (!id) return; // إذا كان `id` غير معرّف، لا تقم بتنفيذ الطلب

    const fetchBlog = async () => {
      try {
        const data = await fetchOneBlog(id);
        setBlog(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <p className="container m-auto text-indigo-500 text-4xl p-10">Loading...</p>;
  }

  if (error) {
    return <p className="container m-auto text-red-500 text-4xl p-10">{error}</p>;
  }

  if (!blog) {
    return <p className="container m-auto text-gray-500 text-4xl p-10">No blog found</p>;
  }

  return (
    <div className="container mx-auto p-10 min-h-screen">
      
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-600 mb-2">By {blog.author} on {blog.date}</p>
      <p className="text-lg">{blog.content}</p>
      <ButtonBack title="Back to home" url="/" style="button hover:bg-indigo-700 mt-10"/>
    </div>
  );
}