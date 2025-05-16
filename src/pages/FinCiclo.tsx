import React from 'react';

function FinCiclo() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Fin de Ciclo</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-700 mb-4">
            Has llegado al final del ciclo académico. Es momento de reflexionar sobre tu progreso
            y evaluar los objetivos alcanzados.
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Reflexión Final
              </h2>
              <p className="text-gray-600">
                Toma un momento para considerar tu desarrollo académico y personal
                durante este período.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Próximos Pasos
              </h2>
              <p className="text-gray-600">
                Prepárate para la siguiente fase de tu evaluación y desarrollo
                académico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinCiclo;