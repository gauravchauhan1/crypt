import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul className="nav-items">
          <li className="mb-1 nav-link-item">
            <Link to="/home" className="nav-link">
              <span></span>
              <span>Home</span>
            </Link>
          </li>
          <li className="mb-1 nav-link-item">
            <Link to="/cryptocurrencies" className="nav-link">
              <span></span>
              <span>Cryptocurrencies</span>
            </Link>
          </li>
          <li className="mb-1 nav-link-item">
            <Link to="/exchanges" className="nav-link">
              <span></span>
              <span>Exchanges</span>
            </Link>
          </li>
          <li className="mb-1 nav-link-item">
            <Link to="/news" className="nav-link">
              <span></span>
              <span>News</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
