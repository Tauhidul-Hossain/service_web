import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import About from './pages/About/About/About';
import Appointment from './pages/Appointment/Appointment/Appointment';
import Team from './pages/Team/Team/Team';
import Faq from './pages/Faq/Faq/Faq';
import Services from './pages/Services/Services/Services';
import WaterTankCleanService from "./pages/WaterTankCleanService/WaterTankCleanService/WaterTankCleanService";
import HouseKeepingService from "./pages/HouseKeepingService/HouseKeepingService/HouseKeepingService";
import SepticTankCleanService from "./pages/SepticTankCleanService/SepticTankCleanService/SepticTankCleanService";
import DeepCleanService from "./pages/DeepCleanService/DeepCleanService/DeepCleanService";
import PestControlService from "./pages/PestControlService/PestControlService/PestControlService";
import PaintPolishService from "./pages/PaintPolishService/PaintPolishService/PaintPolishService";
import Projects from './pages/Projects/Projects/Projects';
import Contact from './pages/Contact/Contact/Contact';
import { WOW } from 'wowjs';
import ScrollToTop from './components/ScrollToTop';




const App = () => {
  // wow animation active
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/services" element={<Services />} />
          <Route path="/housekeeping-services" element={<HouseKeepingService />} />
          <Route path="/water-tank-cleaning-services" element={<WaterTankCleanService />} />
          <Route path="/septic-tank-services" element={<SepticTankCleanService />} />
          <Route path="/deep-cleaning" element={<DeepCleanService />} />
          <Route path="/pest-control-service-in-bangladesh" element={<PestControlService />} />
          <Route path="/painting-polishing" element={<PaintPolishService />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;