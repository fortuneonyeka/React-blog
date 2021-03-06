// import { useState } from "react";
const Blogs = ({blogsProp, titleProp, handleDelete}) => {
  
  return (
    <div className='blogs'>
      <h1 style={{ marginBottom: '20px', marginTop: '25px' }}>{titleProp}</h1>
      {blogsProp.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Wrtiten by: {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete</button>
          <h2>{blog.body} </h2>
        </div>
      ))}
    </div>
  );
}
 
export default Blogs;