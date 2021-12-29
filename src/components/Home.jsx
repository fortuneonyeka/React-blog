import { useState, useEffect } from "react"
import Blogs from "./Blogs";

const Home = () => {
  const initialState = [];
  const [blogs, setBlogs] = useState(initialState);
  
  
  // const handleDelete = (id) => {
  //   const filteredBlogs = blogs.filter((blog) => blog.id !== id)
  //   setBlogs(filteredBlogs)
  // }

  useEffect(() => {
    // to get this endpoint, run the following on the command line: npx json-server --watch data/db.json --port3000
    fetch("http://localhost:3000/blogs")
    .then(Response => {
      return Response.json()
    })
    .then(data => {
     setBlogs(data)
    })
  },[])
  return (
    <div className='home'>
      {blogs && <Blogs blogsProp={blogs} titleProp='All Blogs'/>}
      {/* {blogs && <Blogs blogsProp={blogs.filter((blog) => blog.author === 'Mikel')} titleProp="Mikel's Blogs"/>} */}
    </div>
  );
}
 
export default Home;