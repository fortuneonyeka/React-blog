import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <h2 className="errorMessage">Sorry:</h2>
      <p className="errorMessage">Page Not Found</p>
      <Link to="/" className="link-to-home">Back to the Home Page ....</Link>
    </div>
  );
}
 
export default NotFound;