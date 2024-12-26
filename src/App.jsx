// Importing necessary modules and components
import React from 'react'; // React is essential for building components
import Navbar from './components/Navbar'; // Navigation bar component
import Hero from './components/Hero'; // Hero section (likely the landing or banner area)
import ParticleBackground from './components/Particle'; // Particle effect background
import About from './components/About'; // About section
import Projects from './components/Projects'; // Projects/Portfolio section
import Testimonials from './components/Testimonials'; // Testimonials or reviews section
import Contact from './components/Contact'; // Contact form or information
import Footer from './components/Footer'; // Footer component

// Main App Component
const App = () => {
  return (
    <>
      {/* Particle effect background for aesthetic visuals */}
      <ParticleBackground />

      {/* Navigation bar at the top */}
      <Navbar />

      {/* Hero section (main attraction or headline area) */}
      <Hero />

      {/* About section providing details about the individual or business */}
      <About />

      {/* Projects section showcasing work or portfolio */}
      <Projects />

      {/* Testimonials section to display client reviews or feedback */}
      <Testimonials />

      {/* Contact section for user inquiries */}
      <Contact />

      {/* Footer component at the bottom of the page */}
      <Footer />
    </>
  );
};

// Exporting the App component as default
export default App;
