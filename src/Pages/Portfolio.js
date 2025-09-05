import React from 'react';
import Hero from '../Components/portfolio/Hero';
import About from '../Components/portfolio/About';
import Experience from '../Components/portfolio/Experience';
import Projects from '../Components/portfolio/Projects';
import Contact from '../Components/portfolio/Contact';
import Education from '../Components/portfolio/Education';
import Skills from '../Components/portfolio/Skills';

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-6 md:px-12 lg:px-24">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
