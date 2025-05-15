import React from 'react';

const InfoPersonal: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: 'url("https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
                  filter: 'brightness(0.7)'
                }}
              />
              <h1 className="relative z-10 text-5xl font-cursive text-white text-center pt-20">
                ¿Quién soy?
              </h1>
            </div>
            
            <div className="p-8">
              <p className="text-xl text-center text-gray-700 mb-8">
                Es un placer tenerte aquí.
              </p>
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg"
                    alt="Chef"
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
                
                <div className="md:w-2/3 space-y-6">
                  <p className="text-gray-700">
                    Soy Valeria Santos, tengo 19 años y actualmente estoy por terminar el ciclo perteneciente al PAO 3 en la ESPOCH. Me considero una persona positiva, alegre e incluso algo ingenua, pero estoy feliz con quien soy.
                  </p>
                  
                  <p className="text-gray-700">
                    Mi pasión por la cocina creció al ver programas como Master Chef y Cake boss. Disfrutaba cada episodio, asombrándome de cómo un alimento podía transformarse en un plato único con una historia detrás.
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

export default InfoPersonal;