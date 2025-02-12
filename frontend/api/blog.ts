import {Blog}  from "@/lib/blogs";

export const fetchBlogs = async ()=>{
    
    const response = await fetch("http://localhost:5000/blogs");
    return await response.json();
}
export const fetchOneBlog = async (_id:string) => {
    const response = await fetch(`http://localhost:5000/blogs/${_id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch blog');
    }
    return await response.json();
}

export const createBlogs = async (data:Blog)=> {
    const response = await fetch("http://localhost:5000/blogs" , {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }, 
    });
    return await response.json();
};
