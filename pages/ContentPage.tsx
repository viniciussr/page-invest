import React from 'react';
import { Link } from 'react-router-dom';
import { LEAD_MAGNETS } from '../constants';

const ContentPage: React.FC = () => {
  return (
    <div className="bg-brand-background py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-text">Conteúdo & Insights</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text/80">
            Educação financeira de alto nível para decisões mais inteligentes. Acesse nossos materiais exclusivos e aprofunde seu conhecimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {LEAD_MAGNETS.map((magnet, index) => (
            <div key={index} className="bg-brand-secondary rounded-lg shadow-lg p-8 flex flex-col border border-white/10">
              <div className="flex-grow">
                <p className="text-sm font-semibold text-brand-primary uppercase tracking-wider">{magnet.type}</p>
                <h3 className="text-xl font-bold text-brand-text mt-2">{magnet.title}</h3>
                <p className="mt-4 text-brand-text/80">{magnet.description}</p>
              </div>
              <div className="mt-6">
                {magnet.isDownload ? (
                   <a href={magnet.path} download={magnet.downloadFilename || true} className="inline-block w-full text-center bg-brand-primary text-white font-bold py-2 px-4 rounded-lg hover:brightness-110 transition duration-300">
                     Acessar Material
                   </a>
                ) : (
                  <Link to={magnet.path} className="inline-block w-full text-center bg-brand-primary text-white font-bold py-2 px-4 rounded-lg hover:brightness-110 transition duration-300">
                    Acessar Material
                  </Link>
                )}
              </div>
              <div className="mt-6 pt-4 border-t border-white/20">
                <p className="text-xs text-brand-text/60">
                  <strong>Aviso de Conformidade:</strong> {magnet.disclaimer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentPage;