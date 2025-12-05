import React from 'react';
import AppRoutes from './routes/Route';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
