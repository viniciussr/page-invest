
import React from 'react';
import { Link } from 'react-router-dom';
import { OFFICE_NAME, SOCIAL_LINKS, NAV_LINKS } from '../constants';
import { InstagramIcon, LinkedinIcon, WhatsappIcon } from './Icons';
import NewsletterForm from './NewsletterForm';

const Footer: React.FC = () => {
  const quickLinks = [ ...NAV_LINKS, { label: 'Contato', path: '/contato' }];

  return (
    <footer className="bg-brand-secondary border-t border-brand-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top section: Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Office Info & Social */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-xl font-bold text-brand-text mb-4 inline-block">
              {OFFICE_NAME}
            </Link>
            <div className="flex space-x-5">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <LinkedinIcon className="h-6 w-6" />
              </a>
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand-primary transition-colors">
                <span className="sr-only">WhatsApp</span>
                <WhatsappIcon className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-1 lg:col-start-3">
             <h3 className="text-md font-semibold text-brand-text uppercase tracking-wider">Navegação</h3>
             <ul className="mt-4 space-y-2">
              {quickLinks.map(link => (
                 <li key={link.path}>
                    <Link to={link.path} className="text-sm text-white/70 hover:text-brand-primary transition-colors">{link.label}</Link>
                 </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Newsletter */}
          <div className="md:col-span-2 lg:col-span-1">
             <h3 className="text-md font-semibold text-brand-text uppercase tracking-wider">Newsletter</h3>
             <p className="mt-4 text-sm text-white/70">Receba insights exclusivos sobre o mercado financeiro.</p>
             <div className="mt-4">
               <NewsletterForm />
             </div>
          </div>

        </div>

        {/* Bottom bar with copyright & privacy */}
        <div className="mt-12 pt-8 border-t border-brand-primary/20 flex flex-col sm:flex-row justify-between items-center text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} {OFFICE_NAME}. Todos os direitos reservados.
          </p>
          <Link to="/politica-de-privacidade" className="hover:text-brand-primary transition-colors mt-2 sm:mt-0">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
