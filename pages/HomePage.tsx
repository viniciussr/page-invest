
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, LEAD_MAGNETS } from '../constants';
import NewsletterForm from '../components/NewsletterForm';

const MetricCard = ({ value, label }: { value: string; label: string }) => (
  <div className="bg-brand-secondary p-6 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105">
    <p className="text-4xl font-bold text-brand-accent">{value}</p>
    <p className="mt-2 text-md text-brand-text/90">{label}</p>
  </div>
);


const HomePage: React.FC = () => {
  const metrics = [
    { value: 'R$ 29 Bi+', label: 'Sob Custódia' },
    { value: '200 mil+', label: 'Clientes Ativos' },
    { value: '2.000+', label: 'Assessores' },
    { value: '100+', label: 'Escritórios' },
    { value: '94.4', label: 'NPS (Satisfação)' },
  ];

  return (
    <div className="bg-brand-background">
      {/* Hero Section */}
      <section className="relative text-white pt-20">
         <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        ></div>
        <div className="absolute inset-0 bg-brand-secondary opacity-70"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 sm:py-40 flex items-center justify-center text-center">
         <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            A assessoria de investimentos que você precisa para <span className="text-brand-primary">alcançar seus objetivos.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-white/90">
            Com uma estratégia clara e personalizada, te ajudo a navegar pelo mercado financeiro e a proteger seu legado.
          </p>
          <div className="mt-10">
            <Link 
              to="/contato" 
              className="inline-block bg-brand-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:brightness-110 transition duration-300 transform hover:scale-105"
            >
              Solicitar Diagnóstico de Carteira
            </Link>
          </div>
         </div>
        </div>
      </section>

      {/* Trust Metrics Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-secondary">Confiança em Números</h2>
            <p className="mt-4 text-lg text-brand-secondary/80 max-w-3xl mx-auto">
              Faço parte da <a href="https://www.investsmart.com.br/" target="_blank" rel="noopener noreferrer" className="text-brand-primary font-bold hover:underline">InvestSmart</a>, um dos maiores escritórios de investimentos do Brasil. Estes são os números que refletem a solidez da nossa estrutura e a satisfação de nossos clientes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {metrics.map((metric) => (
              <MetricCard key={metric.label} value={metric.value} label={metric.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview / Our Proposal */}
      <section className="py-16 sm:py-24 bg-brand-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-text">Como posso te ajudar</h2>
            <p className="mt-4 text-lg text-brand-text/80">Minha expertise é focada em proteger e multiplicar grandes patrimônios.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.slice(0, 2).map((service) => (
              <div key={service.title} className="bg-brand-secondary p-8 rounded-lg">
                <service.icon className="h-10 w-10 text-brand-primary mb-4" />
                <h3 className="text-xl font-bold text-brand-text">{service.title}</h3>
                <p className="mt-2 text-brand-text/80">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/solucoes" className="text-brand-primary font-semibold hover:underline">
              Ver todas as soluções &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Content Preview Section */}
       <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-secondary">Conteúdo & Insights</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-secondary/80">
              Acesse materiais exclusivos para aprofundar seu conhecimento e tomar decisões mais inteligentes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {LEAD_MAGNETS.slice(0, 2).map((magnet) => (
              <div key={magnet.title} className="bg-brand-secondary rounded-lg shadow-lg p-8 flex flex-col">
                <p className="text-sm font-semibold text-brand-primary uppercase tracking-wider">{magnet.type}</p>
                <h3 className="text-xl font-bold text-brand-text mt-2 flex-grow">{magnet.title}</h3>
                <div className="mt-6">
                  {magnet.isDownload ? (
                    <a href={magnet.path} download={magnet.downloadFilename || true} className="font-semibold text-brand-primary hover:underline">
                      Acessar Material &rarr;
                    </a>
                  ) : (
                    <Link to={magnet.path} className="font-semibold text-brand-primary hover:underline">
                      Acessar Material &rarr;
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
            <Link to="/conteudo" className="text-brand-primary font-semibold hover:underline">
              Ver todo o conteúdo &rarr;
            </Link>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="bg-brand-secondary py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-text">Fique por Dentro do Mercado</h2>
          <p className="mt-4 text-lg text-brand-text/80">
            Receba insights exclusivos sobre o mercado financeiro.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <NewsletterForm />
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="bg-brand-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-text">Pronto para dar o próximo passo?</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-brand-text/80">
              Vamos conversar sobre como uma estratégia de investimentos personalizada pode transformar seu futuro financeiro.
            </p>
            <div className="mt-8">
              <Link
                to="/contato"
                className="inline-block bg-brand-primary text-white font-bold py-3 px-8 rounded-lg text-lg hover:brightness-110 transition duration-300"
              >
                  Agendar uma Conversa
              </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;