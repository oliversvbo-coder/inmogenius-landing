
import React from 'react';

interface HeroProps {
  onGetStartedClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStartedClick }) => {
  return (
    <section className="py-24 md:py-32 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-transparent z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-indigo-900/30 rounded-full blur-[150px] z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="inline-block bg-slate-800/80 border border-slate-700 rounded-full px-4 py-1 text-sm text-blue-300 mb-4">
          Plataforma Inmobiliaria Potenciada por IA
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Vende Propiedades 10x Más Rápido
          </span>
          <br/>
          con Inteligencia Artificial
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-400 mb-10">
          Automatiza análisis, crea descripciones irresistibles y genera tours virtuales inmersivos. Transforma tu agencia con InmoGenius.
        </p>
        <button
          onClick={onGetStartedClick}
          className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-purple-600/40 transition-all duration-300 transform hover:scale-110"
        >
          Comienza Gratis
        </button>
      </div>
    </section>
  );
};

export default Hero;
