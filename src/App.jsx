import './App.css'; 
import IndexPage from './Index'; 
import Navbar from './Navbar'; 
import Features from './Features'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import ContactUs from './ContactUs';
import Footer from './assets/Footer';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes> 
        <Route path="/" element={<IndexPage />} /> 
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/Contact" element={<ContactUs />} /> 
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
