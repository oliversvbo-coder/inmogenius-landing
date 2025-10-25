
import React from 'react';

interface PricingProps {
  onGetStartedClick: () => void;
}

const pricingPlans = [
  {
    name: 'FREE',
    price: '$0',
    originalPrice: '',
    description: 'Para agentes que empiezan a explorar el poder de la IA.',
    features: ['10 análisis/mes', 'Generador de descripciones básico', 'Soporte por email'],
    isPopular: false,
        paymentLink: '#',
  },
  {
    name: 'PRO',
    price: '$24.50',
    originalPrice: '$49/mes',
    description: 'La solución ideal para agentes individuales y equipos pequeños.',
    features: ['Análisis ilimitados', 'Descripciones IA avanzadas', 'Generador de Tours Virtuales (Beta)', 'Soporte prioritario'],
    isPopular: true,
        paymentLink: 'https://buy.stripe.com/test_dRmeVdgAetp22ifS9AA00',
  },
  {
    name: 'AGENCY',
    price: '$99.50',
    originalPrice: '$199/mes',
    description: 'Potencia y escala para agencias inmobiliarias en crecimiento.',
    features: ['Todo en PRO', 'Panel de equipo', 'Marca blanca en reportes', 'API de integración'],
    isPopular: false,
        paymentLink: 'https://buy.stripe.com/test_bJecN5ckBad96iV9AA01',
  },
];

const Pricing: React.FC<PricingProps> = ({ onGetStartedClick }) => {
  return (
    <section id="pricing" className="py-20 sm:py-24 bg-slate-900/70">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Planes de Pre-Venta con 50% de Descuento</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Aprovecha nuestros precios de lanzamiento por tiempo limitado. Fija tu tarifa para siempre.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-slate-800 rounded-2xl p-8 border transition-all duration-300 ${plan.isPopular ? 'border-purple-500 scale-105 shadow-2xl shadow-purple-500/20' : 'border-slate-700 hover:border-slate-500'}`}
            >
              {plan.isPopular && (
                <div className="text-center mb-6">
                  <span className="bg-purple-500 text-white text-sm font-semibold px-4 py-1 rounded-full">Más Popular</span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
              <p className="text-slate-400 text-center h-12 mb-6">{plan.description}</p>
              <div className="text-center mb-6">
                <span className="text-5xl font-extrabold">{plan.price}</span>
                {plan.originalPrice && <span className="text-slate-400 line-through ml-2">{plan.originalPrice}</span>}
                <span className="text-slate-500 block">/ mes</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => window.location.href = plan.paymentLink}                className={`w-full font-semibold py-3 rounded-lg transition-colors duration-300 ${plan.isPopular ? 'bg-purple-600 hover:bg-purple-500 text-white' : 'bg-slate-700 hover:bg-slate-600 text-slate-200'}`}
              >
                Empezar Ahora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
