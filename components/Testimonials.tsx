
import React from 'react';

const testimonials = [
  {
    quote: "InmoGenius ha cambiado por completo mi flujo de trabajo. Cierro ventas en la mitad del tiempo. El análisis de mercado es increíblemente preciso.",
    name: 'Carlos Rodríguez',
    title: 'Agente Inmobiliario de Éxito',
    avatar: 'https://picsum.photos/id/1005/100/100',
  },
  {
    quote: "La generación de descripciones es mágica. Pasé de tardar horas a segundos, y los textos convierten mucho mejor. ¡Mis anuncios nunca se han visto tan bien!",
    name: 'Laura Gómez',
    title: 'Especialista en Marketing Inmobiliario',
    avatar: 'https://picsum.photos/id/1011/100/100',
  },
  {
    quote: "Como director de agencia, la eficiencia es clave. InmoGenius nos ha dado una ventaja competitiva brutal. Nuestros agentes están más motivados y productivos.",
    name: 'Javier Fernández',
    title: 'Director de Agencia',
    avatar: 'https://picsum.photos/id/1027/100/100',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Lo que dicen nuestros primeros usuarios</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            La confianza de los profesionales nos impulsa a seguir innovando.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 flex flex-col"
            >
              <div className="flex-grow text-slate-300 mb-6">
                <span className="text-purple-400 text-4xl font-serif leading-none">“</span>
                {testimonial.quote}
              </div>
              <div className="flex items-center mt-auto">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4"/>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-slate-400 text-sm">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
