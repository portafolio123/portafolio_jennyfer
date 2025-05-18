import React from 'react';
import { motion } from 'framer-motion';

function Gracias() {
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12 relative overflow-hidden"
      style={{
        backgroundImage:
          'url("https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
      }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-600/50 animate-gradient" />

      <div className="relative bg-black/40 min-h-screen backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          {/* Floating quote */}
          <motion.h1 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl font-cursive text-center text-white mb-12 drop-shadow-glow"
          >
            "La gastronomía es el arte de usar la comida para crear felicidad."
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="block text-2xl font-light mt-4 italic"
            >
              - Theodore Zeldin
            </motion.span>
          </motion.h1>

          {/* Thank you message with hover effects */}
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-white/90 backdrop-blur-md rounded-lg shadow-2xl p-8 mb-12 hover:shadow-pink-500/20 hover:scale-[1.02] transition-all duration-300"
          >
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6 text-center">
              ¡Gracias por visitar mi portafolio!
            </h2>
            <p className="text-gray-700 text-lg text-center leading-relaxed">
              Espero que hayas disfrutado explorando mi trabajo y mis logros. 
              Este portafolio refleja mi pasión por la gastronomía y mi compromiso 
              con el aprendizaje continuo.
            </p>
          </motion.div>

          
            

          
        </div>
      </div>
    </div>
  );
}

export default Gracias;