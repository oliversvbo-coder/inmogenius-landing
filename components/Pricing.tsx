import React from 'react';

interface PricingProps {
  onGetStartedClick: () => void;
export default function Pricing({ onGetStartedClick }: PricingProps) {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comienza hoy y transforma tu forma de analizar propiedades inmobiliarias
          </p>
        </div>

        {/* Stripe Pricing Table */}
        <div className="mt-12
         <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
<stripe-pricing-table pricing-table-id="prctbl_1SMFqeK9IATbThdZgNndCjG5"
publishable-key="pk_live_51SMCqXK9IATbThdZvlwU8dqulOG4m2VLGYT4TWXxPQDt1jBYiixzDtjg6nVCbjXvGZiOl7m9S4xjotEaxFWaBQ5R005ch3Tum8">
</stripe-pricing-table>/div>
      </div>
    </section>
  
  
