import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo_ko.webp"

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <Link className="navbar-brand" to="/"><img id='logo' src={logo} alt="logo" /></Link>
        <div className="navbar-collapse collapse" id='navbarNav'>
          <ul className="navbar-nav w-100 d-flex justify-content-between">
          <li className="nav-item">
              <Link className="nav-link text-uppercase" to="/me">A propros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase" to="/competences">Compétences</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase" to="/projets">Projets</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase" to="/veille">Veille</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-uppercase" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
