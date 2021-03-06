import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav mx-auto">
          <Link class="nav-item nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
          <Link class="nav-item nav-link" to="/cryptocurrencies">Cryptocurrencies</Link>
          <Link class="nav-item nav-link" to="/exchanges">Exchanges</Link>
          <Link class="nav-item nav-link " to="/news">News</Link>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
