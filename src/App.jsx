import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contactus' element={<ContactUs />} />
        </Routes>
    </Router>
  )  
}

export default App;
