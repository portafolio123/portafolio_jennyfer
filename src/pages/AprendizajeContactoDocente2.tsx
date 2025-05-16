import React from 'react';
import { Book, Users, Clock, Calendar } from 'lucide-react';

const AprendizajeContactoDocente2: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Aprendizaje en Contacto con el Docente - Segunda Parte</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Actividades y Proyectos</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Book className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Proyecto Principal</h3>
                </div>
                <p className="text-gray-700">
                  Desarrollo de un plan de marketing gastronómico completo para un establecimiento local,
                  aplicando los conceptos aprendidos durante el curso.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">Trabajo en Equipo</h3>
                </div>
                <p className="text-gray-700">
                  Colaboración en grupos para desarrollar estrategias innovadoras de marketing
                  y presentación de platos.
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Cronograma de Actividades</h3>
              <div className="space-y-4">
                <div className="flex items-start border-l-4 border-blue-500 pl-4">
                  <Calendar className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Semana 8-9</h4>
                    <p className="text-gray-600">Desarrollo del plan de marketing</p>
                  </div>
                </div>
                
                <div className="flex items-start border-l-4 border-blue-500 pl-4">
                  <Calendar className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Semana 10-11</h4>
                    <p className="text-gray-600">Implementación de estrategias</p>
                  </div>
                </div>
                
                <div className="flex items-start border-l-4 border-blue-500 pl-4">
                  <Calendar className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-medium">Semana 12</h4>
                    <p className="text-gray-600">Presentación de resultados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Recursos y Materiales</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold mb-3">Material de Estudio</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-blue-600 mr-2" />
                    Presentaciones de clase
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-blue-600 mr-2" />
                    Casos de estudio
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-blue-600 mr-2" />
                    Lecturas complementarias
                  </li>
                </ul>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold mb-3">Herramientas</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-blue-600 mr-2" />
                    Software de diseño
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-blue-600 mr-2" />
                    Plataformas de análisis
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-blue-600 mr-2" />
                    Herramientas de presentación
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AprendizajeContactoDocente2;