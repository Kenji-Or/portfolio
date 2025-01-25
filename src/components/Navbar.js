import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo_ko.webp"

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div className="container-fluid">
          {/* Logo de la navbar */}
          <Link className="navbar-brand" to="/">
              <img id="logo" src={logo} alt="logo"/>
          </Link>

          {/* Bouton Toggler pour les petits écrans */}
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

          {/* Liens de la navbar */}
          <div className="collapse navbar-collapse w-100" id="navbarNav">
              <ul className="navbar-nav w-100 d-flex justify-content-around">
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
          </div>
      </nav>
  );
};

export default Navbar;
