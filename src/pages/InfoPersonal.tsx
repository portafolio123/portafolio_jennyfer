import React from 'react';
import photo1 from '../assets/images/OBJETIVOPROFESIONAL.jpg';
import photo2 from '../assets/images/OBJETIVOPROFESIONAL.jpg';
import photo3 from '../assets/images/FAMILIA.jpg';
import gastro1 from '../assets/images/IMG_3884.jpg';
import gastro2 from '../assets/images/IMG_3887.jpg';
import team1 from '../assets/images/3.jpg';
import team2 from '../assets/images/10.jpg';
import friends from '../assets/images/findeanio.jpg';
import reina1 from '../assets/images/2.jpg';
import reina2 from '../assets/images/1.jpg';

const InfoPersonal: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto"> {/* Changed from max-w-4xl to max-w-6xl */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-center mb-8">INFORMACIÓN PERSONAL</h1>

            {/* Foto principal */}
            <div className="w-full h-[500px] bg-gray-200 mb-8"> {/* Changed height */}
              <img src={photo1} alt="Foto Principal" className="w-full h-full object-cover rounded-lg" />
            </div>

            {/* Mi receta personal */}
            <h2 className="text-3xl font-playfair text-center mb-8 text-gray-800">Mi receta personal.</h2>

            <div className="space-y-6 text-gray-700 mb-12">
              {/* ...existing text content... */}
            </div>

            <hr className="my-12 border-gray-200" />

            {/* Foto adicional */}
            <div className="my-8 w-full h-[500px] bg-gray-200"> {/* Changed height */}
              <img src={photo2} alt="Foto Adicional" className="w-full h-full object-cover rounded-lg" />
            </div>

            {/* Objetivo profesional */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4">Objetivo profesional</h3>
              <p className="text-gray-700 leading-relaxed">
                Mi objetivo profesional es abrir un restaurante en Italia, un lugar donde la comida conecte con el alma y cada plato cuente una historia inolvidable.
              </p>
            </div>

            {/* Foto objetivo */}
            <div className="my-8 w-full h-[500px] bg-gray-200"> {/* Changed height */}
              <img src={photo3} alt="Foto Objetivo" className="w-full h-full object-cover rounded-lg" />
            </div>

            {/* Mi familia */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4">Mi familia</h3>
              <p className="text-gray-700 italic">
                "Mi pasión por la cocina nació en casa, gracias al apoyo y cariño de mi familia. Ellos han sido el ingrediente secreto que me impulsa a seguir creciendo profesional y personalmente."
              </p>
            </div>

            <hr className="my-12 border-gray-200" />

            {/* Más allá de la cocina */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">Más allá de la cocina</h3>
              <p className="text-gray-700 mb-8">
                A lo largo de mi carrera he tenido la dicha de compartir momentos inolvidables con personas maravillosas. Mis amigos, compañeros de clase y todas las experiencias vividas dentro y fuera de la ESPOCH han sido parte esencial de mi formación.
              </p>

              {/* Sección Representando a Gastronomía */}
              <div className="mb-12">
                <h4 className="text-xl font-semibold mb-4">Representando a Gastronomía:</h4>
                <div className="grid grid-cols-2 gap-6 mb-4"> {/* Increased gap */}
                  <img src={gastro1} alt="Gastronomía 1" className="w-full h-96 object-cover rounded-lg" /> {/* Changed height */}
                  <img src={gastro2} alt="Gastronomía 2" className="w-full h-96 object-cover rounded-lg" />
                </div>
                <p className="text-gray-700 italic">
                  "Compartiendo conocimientos y experiencias en representación de la carrera de Gastronomía, fortaleciendo mi compromiso con lo que amo."
                </p>
              </div>

              {/* Experiencias de trabajo en equipo */}
              <div className="mb-12">
                <h4 className="text-xl font-semibold mb-4">Experiencias de trabajo en equipo:</h4>
                <div className="grid grid-cols-2 gap-6 mb-4">
                  <img src={team1} alt="Equipo 1" className="w-full h-96 object-cover rounded-lg" />
                  <img src={team2} alt="Equipo 2" className="w-full h-96 object-cover rounded-lg" />
                </div>
                <p className="text-gray-700 italic">
                  "Cada evento me permite aplicar lo aprendido y descubrir nuevas formas de conectar con las personas a través de la gastronomía."
                </p>
              </div>

              {/* Momentos con amigos */}
              <div className="mb-12">
                <h4 className="text-xl font-semibold mb-4">Momentos con amigos:</h4>
                <div className="mb-4">
                  <img src={friends} alt="Amigos" className="w-full h-96 object-cover rounded-lg" />
                </div>
                <p className="text-gray-700 italic">
                  "Celebrando fin de año con quienes hacen este camino más divertido"
                </p>
              </div>

              {/* Reina y elección */}
              <div className="mb-12">
                <h4 className="text-xl font-semibold mb-4">Reina y elección:</h4>
                <div className="grid grid-cols-2 gap-6 mb-4">
                  <img src={reina1} alt="Reina 1" className="w-full h-96 object-cover rounded-lg" />
                  <img src={reina2} alt="Reina 2" className="w-full h-96 object-cover rounded-lg" />
                </div>
                <p className="text-gray-700 italic">
                  "Durante la elección de la Reina, viví una experiencia llena de emociones, gratitud y crecimiento personal."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPersonal;