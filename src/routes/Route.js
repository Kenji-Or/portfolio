import React, {useEffect} from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import Home from '../pages/Home';
import Competences from '../pages/Competences';
import Projets from '../pages/Projets';
import Veille from '../pages/Veille';
import Contact from '../pages/Contact';
import Intranet from "../pages/allProjets/Intranet";
import TicketGenerator from '../pages/allProjets/TicketGenerator';
import BaseGrue from "../pages/allProjets/BaseGrue";
import Thingsboard from "../pages/allProjets/Thingsboard";
import CodeGenerator from "../pages/allProjets/CodeGenerator";
import GestionStock from "../pages/allProjets/GestionDeStockGSB";
import SEO from "../pages/allProjets/SEO";
import IPCS from "../pages/allProjets/IPCS";
import AppChat from "../pages/allProjets/AppChat";

const AppRoutes = () => {
    const location = useLocation();
  useEffect(() => {
    // Utilise setTimeout pour s'assurer que le DOM est mis à jour
    const scrollTimeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth' // Animation fluide pour remonter en haut
      });
    }, 0);

    return () => clearTimeout(scrollTimeout);
  }, [location.pathname]);
  return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/projets" element={<Projets />} />
                <Route path="/projets/intranet" element={<Intranet />} />
                <Route path="/projets/ticketgenerator" element={<TicketGenerator />} />
                <Route path="/projets/basegrue" element={<BaseGrue />} />
                <Route path="/projets/thingsboard" element={<Thingsboard />} />
                <Route path="/projets/acg" element={<CodeGenerator />} />
                <Route path="/projets/gestionstock" element={<GestionStock />} />
                <Route path="/projets/seo" element={<SEO />} />
                <Route path="/projets/ipcs" element={<IPCS />} />
                <Route path="/projets/appchat" element={<AppChat/>} />
            <Route path="/veille" element={<Veille />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>

  );
};

export default AppRoutes;
