'use client'


import { useState,useEffect } from "react";

export default function FetchPostPage(){
    const [post, setPost] = useState([]);
        const [error,setError] = useState("");
        const [loading, setLoading] = useState(true);
        useEffect(() => {
            fetch("/api/posts")
            .then((res)=>res.json())
            .then((data)=>{
                if(data.success){
                    setPost(data.data);
                   // setLoading(false);
                }
                else {setError(data.message)}
            })
            .catch((err)=>setError("An expected Error"))
            .finally(()=>setLoading(false))
        },[])
        if(loading){ 
            return
        <p>Loading...</p>}
        if(error){
            return <p>{error}</p>}
            return <div  className="mx-auto w-[70%] flex flex-col items-center justify-center">
                <h1 className="bg-blue-400 text-white px-4 py-2 mt-[3rem] text-center font-extrabold w-[50%] items-center justify-center  rounded-full shadow-md text-[2.5vw]">POSTS</h1>
                <ul >
                    {post.map((post:{id:number;title:string;body:string})=>(
                        <li key={post.id}>
                       <div className=" m-10  border-[3px] border-blue-400 rounded-lg shadow-gray-400 shadow-md">
                       
                        <div className="flex bg-blue-100 p-2 "><h1 className="font-serif font-bold mr-1">ID:</h1>{post.id}</div>
                        <div className="flex bg-blue-200 p-2"><h1 className=" font-serif font-bold mr-1">Title::</h1 >{post.title}</div>
                        <div className="flex bg-blue-300 p-2"><h1 className=" font-serif font-bold mr-1">Body:</h1>{post.body}</div>
                        </div>
                        
                        </li>
                    ))}
                </ul>


            </div>
        }

