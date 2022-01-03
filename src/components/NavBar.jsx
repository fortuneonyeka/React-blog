import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Fortune Blog</h1>
      <div className="links">
        <NavLink to="/">
            Home
        </NavLink>
        
        <NavLink to="/newblog"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
            fontSize: 30,
          }}>
          New Blog
        </NavLink>
        <NavLink to="/about">
            About
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
