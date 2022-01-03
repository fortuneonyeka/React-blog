import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Fortune Blog</h1>
      <div
        className="links"
      >
        <NavLink to="/">Home</NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink to="/newblog">New Blog</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
