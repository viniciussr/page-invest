import React from 'react';
import { SERVICES } from '../constants';

const SolutionsPage: React.FC = () => {
  return (
    <div className="bg-brand-background py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-text">Soluções & Expertise</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text/80">
            Ofereço um portfólio de serviços de alta complexidade, desenhados para atender às necessidades específicas de clientes High-Net-Worth (HNW) e empresas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-brand-secondary rounded-xl shadow-lg p-8 flex flex-col border border-transparent transition-all duration-300 hover:border-brand-primary hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(158,119,243,0.3)]"
            >
              <div className="flex-shrink-0">
                <service.icon className="h-12 w-12 text-brand-primary mb-5" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-brand-text">{service.title}</h3>
                <p className="mt-3 text-brand-text/80">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;