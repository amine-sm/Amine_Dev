import React, { useState, useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import Navbar from "./components/navbar/Navbar";
import Home from "./containers/home/Home";
import About from "./containers/about/About";
import Contact from "./containers/contact/Contact";
import Skills from "./containers/skills/Skills";
import Footer from "./components/footer/Footer";
import "./App.css";

const App = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => ({
    background: { color: "#0d0d0d" },
    fpsLimit: 120,
    particles: {
      number: { value: 100, density: { enable: true, area: 1000 } },
      color: { value: ["#00c4e7", "#ffffff", "#ff007f"] },
      shape: { type: "polygon", options: { sides: 6 } },
      opacity: { value: 0.7, random: true, animation: { enable: true, speed: 1.5, minimumValue: 0.3 } },
      size: { value: { min: 2, max: 6 }, random: true, animation: { enable: true, speed: 2, minimumValue: 1 } },
      move: { enable: true, speed: 2, direction: "none", random: false, straight: false, outModes: { default: "out" } },
      links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "bubble" }, onClick: { enable: true, mode: "repulse" } },
      modes: { bubble: { distance: 200, size: 10, duration: 2, opacity: 0.8 }, repulse: { distance: 150, duration: 0.4 } },
    },
    detectRetina: true,
  }), []);

  return (
    <div className="container">
      {init && <Particles id="tsparticles" options={options} />}
      <div className="overlay"></div>
      <Navbar />
      
      {/* Ajout de tous les composants dans la même page */}
      <section id="home"><Home /></section>
    <section id="about"><About /></section>
    <section id="skills"><Skills /></section>
    <section id="contact"><Contact /></section>

      <Footer />
    </div>
  );
};

export default App;
