import React from 'react';
import HeroSection from '../components/HeroSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Sobre el Portafolio</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Este portafolio representa una colección de trabajos, proyectos y conocimientos adquiridos durante mi 
              trayectoria académica. A través de las diferentes secciones, podrá conocer más sobre mi formación,
              habilidades y experiencias.
            </p>
            <p className="text-lg text-gray-700">
              Le invito a navegar por las distintas secciones para descubrir más sobre mi trabajo y los proyectos
              en los que he participado. Cada apartado ha sido diseñado para proporcionar una visión completa de mis
              competencias y logros.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;