import { Blog } from "@/lib/blogs";
import Link from "next/link";

interface BlogCardProps {
  blogs:Blog[];
}

export default function BlogCard({ blogs }: BlogCardProps) {
  return (
      <>
      {blogs.map((blog)=>{
        return (
          
          <div className="flex justify-center items-center">
            <div className="border p-4 mt-5 w-[300px]  md:w-[50vw] lg:w-[80vw] rounded-lg shadow-sm">
          <div className="space-y-4">
          <h2 className="text-3xl font-semibold">{blog.title}</h2>
          <p className="text-gray-600">By {blog.author} on {blog.date}</p>
          <Link href={`/blogs/${blog._id}`} className="text-indigo-500 hover:underline mt-2 inline-block">
            Read More
          </Link>
          </div>
          </div>
          </div>
          
        )
      })}
      </>
    
  );
}