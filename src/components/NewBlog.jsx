import React from 'react'
// import { useState } from "react"

function NewBlog() {
  
  return (
    <form action="">
      <input type="text" name="title" placeholder="Blog Title" className="blog-title"/>
      <textarea name="blog" id="blog" cols="50" rows="15" placeholder="enter your blog body here"></textarea>
      <button className="btn">Submit</button>
    </form>
  );
}

export default NewBlog
