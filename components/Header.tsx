
import React from 'react';

interface HeaderProps {
  onGetStartedClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGetStartedClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/50 backdrop-blur-lg border-b border-slate-700/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          InmoGenius
        </div>
        <nav className="hidden md:flex items-center space-x-8 text-slate-300">
          <a href="#benefits" className="hover:text-white transition-colors">Beneficios</a>
          <a href="#pricing" className="hover:text-white transition-colors">Precios</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Testimonios</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>
        <button
          onClick={onGetStartedClick}
          className="bg-indigo-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-indigo-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-600/30"
        >
          Comienza Gratis
        </button>
      </div>
    </header>
  );
};

export default Header;
