import React from 'react'
import { useState } from "react"
import { useNavigate } from "react-router-dom";


const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Mike");
  const [isPending, setIspending] = useState(false)
  
 const navigate = useNavigate();
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIspending(true)
    
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    };

    fetch("http://localhost:3000/blogs", requestOptions)
    .then(() => {
      setIspending(false)
       navigate("/");
    })
    
  };



  return (
    <form onSubmit={handleSubmit}>
      <label className="label">Blog Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Blog Title"
        className="blog-title"
        required
      />
      <label className="label">Blog Content</label>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        id="blog-content"
        minLength="10"
        rows="5"
        required
        placeholder="enter your blog body here"
      ></textarea>

      <label className="label">Blog Author</label>
      <select value={author} onChange={(e) => setAuthor(e.target.value)}>
        <option value="Mike">Mike.</option>
        <option value="Yoshi">Yoshi.</option>
        <option value="Fortune">Fortune.</option>
      </select>

      { !isPending && <button className="btn">Add Blog</button> }
      { isPending && <button disabled className="btn"> Adding Blog....</button> }
    </form>
  );
}

export default NewBlog
