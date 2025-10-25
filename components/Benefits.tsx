
import React from 'react';
import ChartIcon from './icons/ChartIcon';
import PencilIcon from './icons/PencilIcon';
import HomeIcon from './icons/HomeIcon';

const benefits = [
  {
    icon: <ChartIcon />,
    title: 'Análisis Instantáneo de Mercado',
    description: 'Obtén valoraciones precisas y tendencias del mercado en segundos para fijar el precio perfecto.',
  },
  {
    icon: <PencilIcon />,
    title: 'Descripciones Profesionales con IA',
    description: 'Genera textos de venta persuasivos y optimizados para SEO que capturan la atención de los compradores.',
  },
  {
    icon: <HomeIcon />,
    title: 'Tours Virtuales IA 360°',
    description: 'Crea recorridos virtuales inmersivos a partir de simples fotos, ahorrando tiempo y atrayendo más visitas.',
  },
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Todo lo que necesitas para triunfar</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            InmoGenius te da las herramientas para optimizar cada paso del proceso de venta.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 transition-all duration-300 hover:border-purple-500 hover:bg-slate-800 transform hover:-translate-y-2"
            >
              <div className="mb-6 inline-block bg-slate-700 p-4 rounded-xl text-purple-400">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-slate-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
