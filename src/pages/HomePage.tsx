import React from 'react';
import HeroSection from '../components/HeroSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />

      <section className="py-16 bg-pink-100 animate-fadeIn">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-pink-700 animate-slideDown">
            Gracias por tu visita. ¡Te invito a recorrerlo!
          </h2>
          
        </div>
      </section>
    </div>
  );
};

export default HomePage;