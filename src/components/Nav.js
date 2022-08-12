import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar-container">
      <Link to="/blog-rest-client">
        <h2>Cap'n Hook's Blog</h2>
      </Link>
    </div>
  );
};

export default Nav;
