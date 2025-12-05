import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo_ko.webp"
import {Button} from "react-bootstrap";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef(null);
    const { isDark, toggleTheme } = useTheme();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

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
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
              onClick={toggleNavbar}
          >
              <span className="navbar-toggler-icon"></span>
          </button>

          {/* Liens de la navbar */}
          <div className={`collapse navbar-collapse w-100 ${isOpen ? 'show' : ''}`} id="navbarNav" ref={navbarRef}>
              <ul className="navbar-nav w-100 d-flex justify-content-around">
                  <li className="nav-item">
                      <Link className="nav-link text-uppercase" to="/competences" onClick={closeNavbar}>Compétences</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link text-uppercase" to="/projets" onClick={closeNavbar}>Projets</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link text-uppercase" to="/veille" onClick={closeNavbar}>Veille</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link text-uppercase" to="/contact" onClick={closeNavbar}>Contact</Link>
                  </li>
                  <li className="nav-item">
                    <Button
                      variant={isDark ? "outline-light" : "outline-dark"}
                      className="theme-toggle-btn"
                      onClick={toggleTheme}
                      title={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
                    >
                      {isDark ? <MdOutlineWbSunny /> : <IoMoonOutline />}
                    </Button>
                  </li>
              </ul>
          </div>
          </div>
      </nav>
  );
};

export default Navbar;
