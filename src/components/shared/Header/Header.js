import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary w-100">
      <div className="container">
        <a href="https://www.pexels.com">
          <img
            id="header"
            src="https://images.pexels.com/lib/api/pexels-white.png"
          />
        </a>
        <Link to="/" className="navbar-brand">
          <h1>HOME</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav"></ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
