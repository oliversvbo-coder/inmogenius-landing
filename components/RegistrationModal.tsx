co
import React, { useState } from 'react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null
    
      const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');;

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setMessageType('success');
        setMessage(data.message || '¡Registro exitoso!');
        e.currentTarget.reset();
        setTimeout(() => onClose(), 2000);
      } else {
        setMessageType('error');
        setMessage(data.error || 'Error en el registro');
      }
    } catch (error) {
      setMessageType('error');
      setMessage('Error de conexión. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-slate-800 rounded-2xl p-8 border border-slate-700 w-full max-w-md m-4 transform transition-all duration-300 scale-95"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'scaleUp 0.3s ease-out forwards' }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Regístrate en InmoGenius</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white">&times;</button>
        </div>
        <p className="text-slate-400 mb-6">Crea tu cuenta para asegurar tu descuento de pre-venta y ser el primero en acceder.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nombre completo</label>
            <input
              type="text"
              id="name"
              required
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Ej: Juan Pérez"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Correo electrónico</label>
            <input
              type="email"
              id="email"
              required
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="tu@email.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">Contraseña</label>
            <input
              type="password"
              id="password"
              required
              minLength={8}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Crea una contraseña segura"
            />
          </div
          
                        {message && (
                <div className=``mb-4 p-3 rounded-lg text-sm ${
                  messageType === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }``>
                  {message}
                </div>
              )}>
          <button
            type="submit
            "
              disabled={loading}
            className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg hover:bg-purple-500 transition-colors duration-300"
          >
              {loading ? 'Procesando...' : 'Crear mi cuenta gratis'}          </button>
        </form>
      </div>
      <style>{`
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default RegistrationModal;
