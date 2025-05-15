import React from 'react';
import { Book, Calendar, Clock, Users } from 'lucide-react';

const InfoAsignatura: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Información de la Asignatura</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="bg-blue-600 text-white p-6">
              <h2 className="text-2xl font-bold">Desarrollo Web Avanzado</h2>
              <p className="text-lg opacity-90">Semestre 2023-2024</p>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Período Académico</p>
                    <p className="font-medium">Primer Semestre 2023-2024</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Horario</p>
                    <p className="font-medium">Lunes y Miércoles, 10:00 - 12:00</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Profesor</p>
                    <p className="font-medium">Dr. Carlos Mendoza</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Book className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Créditos</p>
                    <p className="font-medium">4 Créditos</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">Descripción de la Asignatura</h3>
              <p className="text-gray-700 mb-6">
                Esta asignatura proporciona una introducción completa al desarrollo web avanzado, cubriendo tecnologías 
                frontend y backend modernas. Los estudiantes aprenderán a diseñar, desarrollar e implementar aplicaciones 
                web completas utilizando las mejores prácticas de la industria.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Objetivos de Aprendizaje</h3>
              <ul className="list-disc list-inside text-gray-700 mb-6">
                <li>Comprender los principios avanzados del desarrollo web</li>
                <li>Dominar frameworks modernos de JavaScript como React y Vue</li>
                <li>Implementar APIs RESTful y servicios backend</li>
                <li>Aplicar técnicas de diseño responsivo y accesibilidad web</li>
                <li>Desarrollar habilidades para el trabajo en equipo en proyectos web</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3">Evaluación</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700">
                      <th className="py-3 px-4 text-left">Componente</th>
                      <th className="py-3 px-4 text-left">Porcentaje</th>
                      <th className="py-3 px-4 text-left">Fecha</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4">Proyecto Final</td>
                      <td className="py-3 px-4">40%</td>
                      <td className="py-3 px-4">Final del semestre</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Examen Parcial</td>
                      <td className="py-3 px-4">25%</td>
                      <td className="py-3 px-4">Semana 8</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Tareas y Ejercicios</td>
                      <td className="py-3 px-4">20%</td>
                      <td className="py-3 px-4">Semanal</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Participación</td>
                      <td className="py-3 px-4">15%</td>
                      <td className="py-3 px-4">Continua</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoAsignatura;