import React from 'react';

const AprendizajeContactoDocente: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Aprendizaje en Contacto con el Docente</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Sesiones y Actividades</h2>
            <p className="text-gray-700 mb-6">
              El aprendizaje en contacto con el docente representa una parte fundamental de la formación académica. 
              Estas sesiones ofrecen la oportunidad de recibir orientación directa, resolver dudas y profundizar 
              en los temas más complejos del curso.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="text-lg font-semibold">Sesiones de Tutoría</h3>
                <p className="text-gray-700">
                  Reuniones personalizadas con el docente para revisar avances, aclarar conceptos y recibir 
                  retroalimentación detallada sobre proyectos y trabajos.
                </p>
                <p className="text-sm text-gray-500 mt-2">Horario: Martes y Jueves, 14:00 - 16:00</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="text-lg font-semibold">Clases Magistrales</h3>
                <p className="text-gray-700">
                  Exposiciones teórico-prácticas donde se presentan los conceptos fundamentales, se analizan 
                  casos de estudio y se realizan demostraciones en tiempo real.
                </p>
                <p className="text-sm text-gray-500 mt-2">Horario: Lunes y Miércoles, 10:00 - 12:00</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="text-lg font-semibold">Talleres Prácticos</h3>
                <p className="text-gray-700">
                  Sesiones dedicadas a la aplicación práctica de los conocimientos teóricos mediante ejercicios 
                  guiados, resolución de problemas y desarrollo de componentes específicos.
                </p>
                <p className="text-sm text-gray-500 mt-2">Horario: Viernes, 09:00 - 11:00</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                <h3 className="text-lg font-semibold">Asesorías para Proyectos</h3>
                <p className="text-gray-700">
                  Espacios de consulta específica para los proyectos finales donde se recibe orientación 
                  sobre aspectos técnicos, metodológicos y de implementación.
                </p>
                <p className="text-sm text-gray-500 mt-2">Horario: Programado según necesidad</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Beneficios del Aprendizaje con Docente</h3>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Retroalimentación inmediata sobre el desempeño y trabajos</span>
                </li>
                
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Aclaración inmediata de dudas y conceptos complejos</span>
                </li>
                
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Orientación personalizada según el ritmo de aprendizaje</span>
                </li>
                
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Acceso a conocimientos y experiencias prácticas del docente</span>
                </li>
                
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Desarrollo de habilidades de comunicación profesional</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Consejos para Aprovechar las Sesiones</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-1">Preparación Previa</h4>
                  <p className="text-sm text-gray-700">
                    Revisa el material asignado antes de cada sesión y prepara preguntas específicas sobre los temas que te resulten más difíciles.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-1">Participación Activa</h4>
                  <p className="text-sm text-gray-700">
                    Involúcrate en las discusiones, haz preguntas y comparte tus ideas. La participación activa mejora la retención de conocimientos.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-1">Toma Notas Efectivas</h4>
                  <p className="text-sm text-gray-700">
                    Desarrolla un sistema para tomar notas que te ayude a capturar los conceptos clave y ejemplos prácticos compartidos durante la sesión.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-1">Seguimiento</h4>
                  <p className="text-sm text-gray-700">
                    Después de cada sesión, dedica tiempo a revisar tus notas, completar ejercicios adicionales y aplicar los conceptos aprendidos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AprendizajeContactoDocente;