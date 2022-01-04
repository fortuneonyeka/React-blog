import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useNavigate } from "react-router-dom";


const BlogDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: blog, error, isLoading } = useFetch("http://localhost:3000/blogs/" + id);

  

  return (
    <div className="blog-details">
      {isLoading && <div>Loading ...</div>}
      {error && <div className="errorMessage">{error}</div>}
      {blog && (
        <article>
          <h2 className="blog-detail-title">{blog.title}</h2>
          <p className="blog-detail-author">Written By : {blog.author}</p>
          <div>{blog.body}</div>
         
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
