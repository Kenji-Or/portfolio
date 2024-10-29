import React from 'react';
import AppRoutes from './routes/Route';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
        <AppRoutes />
        <Footer />
    </div>
  );
}

export default App;
