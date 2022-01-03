import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import NewBlog from "./components/NewBlog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Blogs from "./components/Blogs";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/newblog" element={<NewBlog />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
