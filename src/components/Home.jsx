// import { useState, useEffect } from "react"
import useFetch from "../useFetch";
import Blogs from "./Blogs";

const Home = () => {
  const { data:blogs, isLoading, error } = useFetch("http://localhost:3000/blogs");
  
  // const handleDelete = (id) => {
  //   const filteredBlogs = blogs.filter((blog) => blog.id !== id)
  //   setBlogs(filteredBlogs)
  // }

  
  return (
    <div className="home">
      {isLoading && <div> Loading... </div>}
      {error && <div>{error}</div>}
      {blogs && <Blogs blogsProp={blogs} titleProp="All Blogs" />}
      {/* {blogs && <Blogs blogsProp={blogs.filter((blog) => blog.author === 'Mikel')} titleProp="Mikel's Blogs"/>} */}
    </div>
  );
}
 
export default Home;