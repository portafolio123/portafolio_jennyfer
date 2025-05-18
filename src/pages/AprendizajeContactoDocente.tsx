import React from 'react';
import foto11 from '../assets/images/foto11.jpg';

const AprendizajeDocente: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-12 animate-fadeIn">
            APRENDIZAJE EN CONTACTO CON EL DOCENTE
          </h1>

          {/* Quote */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12 animate-fadeIn">
            <p className="text-2xl text-gray-700 italic text-center">
              "El marketing gastronómico no solo vende comida, vende emociones, recuerdos y experiencias que permanecen en el paladar y en el corazón."
            </p>
          </div>

          {/* Materia Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <h2 className="text-3xl font-bold p-8 text-center">Materia</h2>
            <div className="p-8">
              <iframe
                src="/Materia_medio_ciclo.pdf"
                className="w-full h-[700px] rounded-lg"
                title="Materia Medio Ciclo"
              />
            </div>
            <div className="p-8 bg-gray-50">
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                El marketing gastronómico es una herramienta fundamental en el mundo de la cocina profesional, 
                ya que permite conectar los sabores con las emociones del cliente. A través de esta asignatura, 
                aprendemos a diseñar estrategias para promocionar productos, crear marcas con identidad, 
                comunicar de forma efectiva y destacar en un mercado altamente competitivo. Esta materia no 
                solo nos brinda conocimientos técnicos, sino también una visión creativa para transformar 
                ideas culinarias en experiencias inolvidables.
              </p>
            </div>
          </div>

          {/* Mis Deberes Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <h2 className="text-3xl font-bold p-8 text-center">Mis Deberes</h2>
            <div className="p-8 bg-gray-50">
              <p className="text-gray-700 text-lg mb-8">
                En este apartado encontrarás los trabajos realizados a lo largo del curso de Marketing 
                Gastronómico, donde apliqué los conocimientos adquiridos en clase de forma creativa y 
                práctica. Cada deber refleja mi proceso de aprendizaje, mi visión personal y mi compromiso 
                con la formación profesional en el área culinaria.
              </p>
              <iframe
                src="/LOS_DEBERES.pdf"
                className="w-full h-[700px] rounded-lg"
                title="Mis Deberes"
              />
            </div>
          </div>

          {/* Mulata Restaurant Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Experiencia en el restaurante: Mulata</h2>
              <p className="text-2xl text-gray-700 italic text-center mb-8">
                "Una fusión de tradición y modernidad en cada bocado: así fue nuestra experiencia en el 
                restaurante Mulata, donde la gastronomía ecuatoriana se vive con todos los sentidos."
              </p>
              <iframe
                src="/Mulata_restaurant.pdf"
                className="w-full h-[700px] rounded-lg mb-8"
                title="Mulata Restaurant"
              />
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Visitar el restaurante Mulata fue una experiencia enriquecedora, donde tuvimos la oportunidad 
                de explorar sabores auténticos de la cocina ecuatoriana en un ambiente moderno y lleno de 
                identidad. Más que una comida, fue una vivencia cultural que nos permitió apreciar cómo el 
                marketing, la presentación y la historia detrás de cada plato pueden generar una conexión 
                emocional con el comensal. Esta salida nos inspiró a valorar el poder que tiene la 
                gastronomía para contar historias y transmitir tradiciones.
              </p>
            </div>
          </div>

          {/* Marketing History Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center"> Historia del marketing</h2>
              <p className="text-2xl text-gray-700 italic text-center mb-8">
                "El marketing nació para vender productos, pero con el tiempo evolucionó para conquistar 
                corazones y construir conexiones duraderas."
              </p>
              <div className="w-full h-[400px] mb-8 overflow-hidden rounded-lg">
                <img 
                  src={foto11} 
                  alt="Marketing History" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <iframe
                src="/Evolucion_Marketing.pdf"
                className="w-full h-[700px] rounded-lg mb-8"
                title="Evolución del Marketing"
              />
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Aprender sobre la historia del marketing me permitió comprender cómo esta herramienta ha 
                cambiado con el tiempo, adaptándose a las nuevas necesidades de las personas y al avance 
                de la tecnología. Antes solo se buscaba vender, pero hoy se trata de conectar con el 
                cliente, generar experiencias y contar historias auténticas. Esta evolución me inspira a 
                aplicar estrategias más humanas y creativas en mi carrera gastronómica, especialmente al 
                momento de construir mi marca personal y llegar a mi público de forma significativa.
              </p>
            </div>
          </div>

          {/* Marketing Variables Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">
                 Variables intervinientes del marketing
              </h2>
              <iframe
                src="/variables_intervinientes_marketing.pdf"
                className="w-full h-[700px] rounded-lg mb-8"
                title="Variables del Marketing"
              />
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Aprender sobre las variables intervinientes del marketing me permitió entender que detrás 
                de cada estrategia exitosa hay múltiples factores que influyen en el comportamiento del 
                consumidor: desde lo psicológico y cultural, hasta lo social y personal. Conocer estas 
                variables me ayuda a pensar de forma más integral al momento de diseñar propuestas 
                gastronómicas, ya que no basta con ofrecer buen sabor, sino también comprender qué 
                motiva al cliente a elegirnos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AprendizajeDocente;