import { Link } from "react-router-dom";
// import { useState } from "react";
const Blogs = ({blogsProp, titleProp}) => {
  
  return (
    <div className="blogs" style={{ padding: "20px", lineHeight: "40px" }}>
      <h1 style={{ marginBottom: "20px", marginTop: "25px" }}>{titleProp}</h1>
      {blogsProp.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogdetails/${blog.id}`} className="link">
            <h2>{blog.title}</h2>
            <p>Wrtiten by: {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default Blogs;