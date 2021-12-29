import { useState, useEffect } from "react"
import Blogs from "./Blogs";

const Home = () => {
  const initialState = [];
  const [blogs, setBlogs] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true)
  // const [error, setError] = useState(null)
  
  
  // const handleDelete = (id) => {
  //   const filteredBlogs = blogs.filter((blog) => blog.id !== id)
  //   setBlogs(filteredBlogs)
  // }

  useEffect(() => {
    // to get this endpoint, run the following on the command line: npx json-server --watch data/db.json --port3000
    fetch("http://localhost:3000/blogs")
    .then(Response => {
      // if (!Response.ok) {
      //   throw Error('data did not fetch')
      // }
      return Response.json()
    })
    .then(data => {
     setBlogs(data)
     setIsLoading(false)
    })
    // .catch(err => {
    //   setError(err.message)
    // })
  },[])
  return (
    <div className="home">
      {/* {error && <div>{error}</div>} */}
      {isLoading && <div> Loading... </div>}
      {blogs && <Blogs blogsProp={blogs} titleProp="All Blogs" />}
      {/* {blogs && <Blogs blogsProp={blogs.filter((blog) => blog.author === 'Mikel')} titleProp="Mikel's Blogs"/>} */}
    </div>
  );
}
 
export default Home;