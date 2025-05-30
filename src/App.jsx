import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import AboutSkills from './components/AboutSkills';
import CertificateCarousel from './components/CertificateCarousel';
import Services from './components/Services';
import Contact from './components/Contact';
import Project from './components/Project';
import ScrollToTopButton from './components/ScrollToTopButton';
import Footer from './components/Footer';
import AnimatedName from './components/AnimatedName';

function App() {
  return (
    <div className="absolute top-0 z-[-2] min-h-full sm:min-w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] py-1">
      <NavBar />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="about-skills">
        <AboutSkills />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="certificates">
        <CertificateCarousel />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
