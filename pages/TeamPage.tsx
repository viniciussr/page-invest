import React from 'react';
import { TEAM_MEMBERS, SOCIAL_LINKS } from '../constants';
import { WhatsappIcon, EnvelopeIcon, PhoneIcon } from '../components/Icons';

const TeamPage: React.FC = () => {
    const advisor = TEAM_MEMBERS[0];

  return (
    <div className="bg-brand-background py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-text">Sobre Mim</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-brand-text/80">
            Conheça a profissional dedicada a construir seu futuro financeiro com segurança e transparência.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1 flex justify-center">
            <img 
                src={advisor.photoUrl} 
                alt={advisor.name} 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-8 border-brand-primary/50 shadow-2xl"
            />
            </div>
            <div className="lg:col-span-2 bg-brand-secondary p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-brand-text">{advisor.name}</h2>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                {advisor.credentials.map((cred, i) => (
                    <span key={i} className="text-brand-primary text-md font-medium">{cred}</span>
                ))}
            </div>
            <div className="mt-6 space-y-4 text-brand-text/90">
                <p>
                    Com mais de 10 anos de experiência no mercado financeiro, minha missão é oferecer uma assessoria de investimentos que vai além dos números. Acredito em uma abordagem humana e personalizada, onde cada cliente é único e merece uma estratégia desenhada sob medida para seus sonhos e objetivos.
                </p>
                <p>
                    Minha trajetória foi construída sobre pilares de estudo contínuo, ética e um profundo conhecimento dos mercados nacional e internacional. As certificações CFA e CFP® são a base técnica que me permite criar portfólios robustos e resilientes, sempre com foco na preservação e multiplicação do seu patrimônio.
                </p>
                <h3 className="text-xl font-bold text-brand-text pt-4">Minha Filosofia de Investimento</h3>
                <p>
                    Acredito que o sucesso nos investimentos vem da combinação de uma estratégia bem definida, disciplina e diversificação inteligente. Meu trabalho é ser sua parceira de confiança nessa jornada, traduzindo a complexidade do mercado financeiro em um plano de ação claro e seguro para você e sua família.
                </p>
            </div>
            </div>
        </div>
        
        {/* Compliance and Contact Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-secondary p-8 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-brand-text mb-4">Conformidade e Certificação</h3>
                <p className="text-brand-text/80">
                    Como Assessora de Investimentos, estou em total conformidade com as exigências da CVM. Sou devidamente certificada e listada no cadastro da CVM/ANCORD, o que garante meu compromisso com a máxima transparência e qualificação técnica.
                </p>
            </div>
            <div className="bg-brand-secondary p-8 rounded-lg border border-white/10">
                <h3 className="text-2xl font-bold text-brand-text mb-4">Canais de Atendimento</h3>
                <p className="text-brand-text/80">
                    Seu acesso direto para dúvidas, sugestões ou qualquer outra necessidade.
                </p>
                <ul className="mt-4 space-y-3 text-brand-text/90">
                    <li className="flex items-center gap-3">
                        <WhatsappIcon className="w-5 h-5 text-brand-primary flex-shrink-0" />
                        <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            +55 (21) 98022-0193
                        </a>
                    </li>
                    <li className="flex items-center gap-3">
                        <EnvelopeIcon className="w-5 h-5 text-brand-primary flex-shrink-0" />
                        <a href="mailto:contato@mayarateles.invest" className="hover:underline">contato@mayarateles.invest</a>
                    </li>
                    <li className="flex items-center gap-3">
                        <PhoneIcon className="w-5 h-5 text-brand-primary flex-shrink-0" />
                        <span>Ouvidoria: <a href="tel:08000000001" className="hover:underline">0800 000 0001</a></span>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;