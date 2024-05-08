import './App.css'; 
import IndexPage from './components/Index'; 
import Navbar from './components/Navbar'; 
import Features from './components/Features'; 
import AboutUs from './components/AboutUs'; 
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Services from './components/Services';
import PricingPage from './components/Pricing';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes> 
        <Route path="/" element={<IndexPage />} /> 
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
