
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DentalHero from './Components/Hero/DentalHero';
import HomeScreen from './pages/HomeScreen';
import AboutMeScreen from './pages/AboutMeScreen';
import ServicesScreen from './pages/ServicesScreen';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutMeScreen />} />
        <Route path="/services" element={<ServicesScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;