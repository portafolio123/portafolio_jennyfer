import React from 'react';
import { motion } from 'framer-motion';

const MedioCiclo: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12 relative overflow-hidden"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-600/50 animate-gradient" />

      <div className="relative bg-black/40 min-h-screen backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl font-extrabold text-center text-white mb-12 drop-shadow-glow"
          >
            Medio Ciclo
          </motion.h1>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/90 backdrop-blur-md rounded-lg shadow-2xl p-8 mb-8 hover:shadow-pink-500/20 hover:scale-[1.02] transition-all duration-300"
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Reflexión de Medio Ciclo
              </h2>

              <div className="space-y-6">
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-gray-700 text-lg leading-relaxed"
                >
                  En este punto del ciclo, es esencial reflexionar sobre lo aprendido y 
                  cómo se ha aplicado en la práctica. La autoevaluación es clave para 
                  identificar áreas de mejora y fortalecer las habilidades adquiridas.
                </motion.p>

                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-inner"
                >
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Logros Destacados
                  </h3>
                  <ul className="list-disc list-inside space-y-3 text-gray-700">
                    <li className="hover:text-purple-600 transition-colors">
                      Comprensión profunda de conceptos de marketing gastronómico
                    </li>
                    <li className="hover:text-purple-600 transition-colors">
                      Desarrollo de habilidades prácticas en el análisis de casos
                    </li>
                    <li className="hover:text-purple-600 transition-colors">
                      Mejora en la capacidad de pensamiento estratégico
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedioCiclo;