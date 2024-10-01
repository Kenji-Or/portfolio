import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Importer vos composants de page
import Home from '../pages/Home';
import Competences from '../pages/Competences';
import Projets from '../pages/Projets';
import Veille from '../pages/Veille';
import Contact from '../pages/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/competences" element={<Competences />} />
      <Route path="/projets" element={<Projets />} />
      <Route path="/veille" element={<Veille />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
