
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DentalHero from './Components/Hero/DentalHero';
import HomeScreen from './pages/HomeScreen';
import AboutMeScreen from './pages/AboutMeScreen';
import ServicesScreen from './pages/ServicesScreen';
import GaleryScreen from './pages/GaleryScreen';  
import ContactScreen from './pages/ContactScreen';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutMeScreen />} />
        <Route path="/services" element={<ServicesScreen />} />
        <Route path="/galery" element={<GaleryScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;