
import React, { useState } from 'react';

const faqData = [
  {
    question: '¿Cómo funciona exactamente la IA de InmoGenius?',
    answer: 'Nuestra IA utiliza modelos de lenguaje avanzados y algoritmos de machine learning entrenados con millones de datos del sector inmobiliario. Analiza propiedades, precios, y tendencias para ofrecerte resultados precisos y relevantes en segundos.',
  },
  {
    question: '¿Es complicado de usar para alguien sin experiencia técnica?',
    answer: '¡Para nada! Hemos diseñado InmoGenius con una interfaz intuitiva y fácil de usar. Si sabes navegar por una página web, sabrás usar nuestra plataforma. No se requiere ningún conocimiento técnico.',
  },
  {
    question: '¿Qué pasará con mi plan después del período de pre-venta?',
    answer: 'Al suscribirte durante la pre-venta, aseguras el precio con descuento ¡para siempre! Mientras mantengas tu suscripción activa, tu tarifa no aumentará, incluso cuando lancemos nuevas funcionalidades.',
  },
  {
    question: '¿Puedo cancelar mi suscripción en cualquier momento?',
    answer: 'Sí, por supuesto. Puedes cancelar tu plan en cualquier momento desde tu panel de control, sin preguntas ni complicaciones. El plan FREE es gratuito para siempre.',
  },
  {
    question: '¿Cuándo estará disponible la plataforma completa?',
    answer: 'Estamos trabajando para lanzar la versión completa de InmoGenius en el próximo trimestre. Los usuarios de la pre-venta tendrán acceso anticipado a todas las nuevas funcionalidades a medida que se implementen.',
  },
];

const FAQItem: React.FC<{
  item: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-700">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-6"
      >
        <span className="text-lg font-medium text-slate-200">{item.question}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-slate-400">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Preguntas Frecuentes</h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Resolvemos tus dudas para que tomes la mejor decisión.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
