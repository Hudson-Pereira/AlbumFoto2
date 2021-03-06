import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav
      id="nav"
      className="navbar navbar-expand-lg navbar-dark bg-primary w-100"
    >
      <div className="container">
        <a href="https://www.pexels.com">
          <img
            id="header"
            src="https://images.pexels.com/lib/api/pexels-white.png"
            alt="https://images.pexels.com/lib/api/pexels-white.png"
          />
          <a href="https://www.pexels.com">Photos provided by Pexels</a>
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav"></ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
