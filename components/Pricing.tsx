import React from 'react';

interface PricingProps {
  onGetStartedClick: () => void;
}

export default function Pricing({ onGetStartedClick }: PricingProps) {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Elige el Plan Perfecto para Ti
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comienza hoy y transforma tu forma de analizar propiedades inmobiliarias
          </p>
        </div>

        {/* Stripe Pricing Table */}
        <div className="mt-12">
          <stripe-pricing-table 
           pricing-table-id="prctbl_1SMFqeK9IATbThdZgNndCjG
            publishable-key="pk_live_51SMCqiGbMex0PqXmBKSmn6McZXX7U8oP7gSKNtvgPcDWT37bYgvktelior7944swbgl36qscHyb8DDEuLQitB1600Tn8oJWPY">
          </stripe-pricing-table>
        </div>
      </div>
    </section>
  );
}
