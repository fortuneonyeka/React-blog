import useFetch from "../useFetch";
import Blogs from "./Blogs";


const Home = () => {
  const { data:blogs, isLoading, error } = useFetch( "http://localhost:3000/blogs");
  
  return (
    <div className="home">
      {isLoading && <div> Loading... </div>}
      {error && <div className="errorMessage">{error}</div>}
      {blogs && <Blogs blogsProp={blogs} titleProp="All Blogs" />}
      {/* {blogs && <Blogs blogsProp={blogs.filter((blog) => blog.author === 'Mikel')} titleProp="Mikel's Blogs"/>} */}
    </div>
  );
}
 
export default Home;