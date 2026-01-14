
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Calculator from './components/Calculator';
import Requirements from './components/Requirements';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

const App: React.FC = () => {
  const toggleCalculator = () => {
    const calcSection = document.getElementById('calculator');
    if (calcSection) {
      calcSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onCalcClick={toggleCalculator} />
      <main className="flex-grow">
        <Hero onCalcClick={toggleCalculator} />
        <About />
        <section id="calculator" className="py-24 bg-white">
           <Calculator />
        </section>
        <Requirements />
        <FAQ />
      </main>
      <Contact />
    </div>
  );
};

export default App;
