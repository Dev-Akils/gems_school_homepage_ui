import { SiHiltonhotelsandresorts } from 'react-icons/si';
import './App.css';
import GemsLegacy from './components/GemsLegacy';
import Home from './components/Home';
import ReimageLearing from './components/ReimageLearning';
import TheSriTeam from './components/TheSriTeam';
import ExperienceUI from './pages/ExperienceUI';
import HomePage from './pages/HomePage';
import PoineerElements from './pages/PoineerElements';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Faq from './components/Faq';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Home />
              <HomePage/>
              <GemsLegacy />
              <TheSriTeam />
              <ReimageLearing />
              <PoineerElements />
              <ExperienceUI />
              <Faq />
              <Footer />
            </>
          }
        />

        {/* Legacy route */}
        <Route path="/legacy" element={<GemsLegacy />} />

        {/* Team route */}
        <Route path="/sriteam" element={<TheSriTeam />} />

        {/* Reimagine route */}
        <Route path="/reimagine" element={<ReimageLearing />} />

        {/* Pioneer route */}
        <Route path="/poineer_elements" element={<PoineerElements />} />

        {/* FAQ route */}
        <Route path="/faq" element={<Faq />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
