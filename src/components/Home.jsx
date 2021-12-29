import { useState, useEffect } from "react"
import Blogs from "./Blogs";

const Home = () => {
  const initialState = [
    {
      title: 'My website',
      body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, minus.',
      author: 'yoshi',
      id: 1,
    },
    {
      title: 'My Blog',
      body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, minus.',
      author: 'Mikel',
      id: 2,
    },
    {
      title: 'My website',
      body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, minus.',
      author: 'Mikel',
      id: 3,
    },
  ];
  const [blogs, setBlogs] = useState(initialState);
  const [name, setName] = useState('jon')
  
  
  const handleDelete = (id) => {
    const filteredBlogs = blogs.filter((blog) => blog.id !== id)
    setBlogs(filteredBlogs)
  }

  useEffect(() => {
    console.log('use effect running');
    console.log(name);
  },[name])
  return (
    <div className='home'>
      <Blogs blogsProp={blogs} titleProp='All Blogs' handleDelete={handleDelete}/>
      <Blogs blogsProp={blogs.filter((blog) => blog.author === 'Mikel')} titleProp="Mikel's Blogs"/>
      <button onClick={() => setName('Fortune')}>Change Name</button>
      <p>{name}</p>
    </div>
  );
}
 
export default Home;