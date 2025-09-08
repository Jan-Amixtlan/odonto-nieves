
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DentalHero from './Components/Hero/DentalHero';
import HomeScreen from './pages/HomeScreen';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;