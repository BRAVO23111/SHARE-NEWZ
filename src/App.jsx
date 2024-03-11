import './App.css'; 
import IndexPage from './Index'; 
import Navbar from './Navbar'; 
import Features from './Features'; 
import AboutUs from './AboutUs'; 
import ContactUs from './ContactUs';
import Footer from './assets/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Services from './Services';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes> 
        <Route path="/" element={<IndexPage />} /> 
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
