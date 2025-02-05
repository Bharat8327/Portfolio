import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import AboutSkills from "./components/AboutSkills";
import CertificateCarousel from "./components/CertificateCarousel";
import Services from "./components/Services";

function App() {
  return (
    <div className="absolute top-0 z-[-2] min-h-full min-w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] py-1">
      <NavBar />
      <About />
      <AboutSkills />
      <Services/>
     <CertificateCarousel />
    </div>
  );
}

export default App;
