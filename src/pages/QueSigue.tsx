import React from 'react';
import { ArrowRight } from 'lucide-react';

const QueSigue: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">¿Qué sigue?</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Próximos Proyectos</h2>
            <p className="text-gray-700 mb-6">
              El camino de aprendizaje continúa con nuevos desafíos y oportunidades para crecer profesionalmente.
              Estos son algunos de los proyectos y metas que tengo planeados para el futuro cercano:
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <ArrowRight className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Desarrollo de Aplicación Móvil</h3>
                  <p className="text-gray-600">
                    Creación de una aplicación móvil enfocada en ayudar a estudiantes a organizar sus actividades académicas
                    y mejorar su productividad.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <ArrowRight className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Investigación Académica</h3>
                  <p className="text-gray-600">
                    Participación en un proyecto de investigación relacionado con tecnologías sostenibles y su
                    aplicación en comunidades rurales.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <ArrowRight className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Certificación Profesional</h3>
                  <p className="text-gray-600">
                    Obtención de certificaciones en áreas específicas de desarrollo web y diseño UX/UI para complementar
                    mi formación académica.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Objetivos a Largo Plazo</h2>
            <p className="text-gray-700 mb-6">
              Además de los proyectos a corto plazo, tengo establecidos algunos objetivos profesionales
              que me gustaría alcanzar en los próximos años:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-2">Desarrollo Profesional</h3>
                <p className="text-gray-600">
                  Establecerme como profesional en el campo de la tecnología, contribuyendo con soluciones
                  innovadoras a problemas reales.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-2">Emprendimiento</h3>
                <p className="text-gray-600">
                  Fundar una iniciativa que combine tecnología y educación para crear oportunidades de
                  aprendizaje accesibles.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-2">Formación Continua</h3>
                <p className="text-gray-600">
                  Mantenerme actualizada con las nuevas tecnologías y metodologías a través de la
                  formación continua y el aprendizaje permanente.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold mb-2">Impacto Social</h3>
                <p className="text-gray-600">
                  Utilizar mis conocimientos y habilidades para generar un impacto positivo en la
                  sociedad, especialmente en comunidades con recursos limitados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueSigue;