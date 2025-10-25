
import React from 'react';

interface FooterProps {
  onGetStartedClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onGetStartedClick }) => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para revolucionar tu agencia?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Únete a la pre-venta de InmoGenius y sé de los primeros en experimentar el futuro de la venta inmobiliaria.</p>
          <button
            onClick={onGetStartedClick}
            className="text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full hover:shadow-2xl hover:shadow-purple-600/40 transition-all duration-300 transform hover:scale-110"
          >
            Únete Ahora con 50% de Descuento
          </button>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} InmoGenius. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
