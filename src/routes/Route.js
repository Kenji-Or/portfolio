import React, {useEffect} from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
// Importer vos composants de page
import Home from '../pages/Home';
import Competences from '../pages/Competences';
import Projets from '../pages/Projets';
import Veille from '../pages/Veille';
import Contact from '../pages/Contact';

const AppRoutes = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
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
