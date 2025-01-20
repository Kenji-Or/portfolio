import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/Route';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
function App() {
  return (
      <>
      <Navbar />
        <AppRoutes />
        <Footer />
      </>
  );
}

export default App;
