import React from 'react';

const MedioCiclo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Medio Ciclo</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Reflexión de Medio Término</h2>
            <p className="text-gray-700 mb-6">
              Al llegar a la mitad del ciclo académico, es importante reflexionar sobre el progreso logrado, 
              los conocimientos adquiridos y los desafíos enfrentados. Esta autoevaluación permite ajustar 
              estrategias y establecer metas claras para la segunda mitad del período.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Logros Destacados</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Completé satisfactoriamente el proyecto de diseño web responsivo</li>
                  <li>Obtuve una calificación de 90/100 en el examen parcial</li>
                  <li>Mejoré mis habilidades de trabajo en equipo durante el proyecto colaborativo</li>
                  <li>Implementé con éxito una API RESTful para la aplicación del curso</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Áreas de Mejora</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Necesito profundizar en optimización de rendimiento de aplicaciones web</li>
                  <li>Debo mejorar la organización de mi tiempo para entregar tareas con mayor anticipación</li>
                  <li>Requiero más práctica en la implementación de pruebas automatizadas</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Objetivos para la Segunda Mitad</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Completar el curso opcional de seguridad web</li>
                  <li>Mejorar mi portafolio con al menos dos proyectos adicionales</li>
                  <li>Participar más activamente en las discusiones en clase</li>
                  <li>Formar un grupo de estudio para la preparación del examen final</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Evaluación de Competencias</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">HTML/CSS Avanzado</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">JavaScript/TypeScript</span>
                    <span>78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Frameworks Frontend</span>
                    <span>72%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '72%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Desarrollo Backend</span>
                    <span>65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Bases de Datos</span>
                    <span>70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Proyectos Completados</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium">Sitio Web Responsivo</h4>
                  <p className="text-gray-600 text-sm mb-2">Desarrollo de un sitio web completamente responsivo utilizando HTML5, CSS3 y JavaScript.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">HTML5</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">CSS3</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">JavaScript</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium">Aplicación de Tareas</h4>
                  <p className="text-gray-600 text-sm mb-2">Aplicación web para gestión de tareas con funcionalidades CRUD usando React y Firebase.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Firebase</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">CSS Modules</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium">API RESTful</h4>
                  <p className="text-gray-600 text-sm mb-2">Desarrollo e implementación de una API RESTful para gestión de recursos educativos.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Node.js</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Express</span>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedioCiclo;