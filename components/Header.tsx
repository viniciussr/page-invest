
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS, OFFICE_NAME } from '../constants';
import { MenuIcon, XIcon } from './Icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const activeLinkStyle = {
    color: '#9E77F3', // brand-primary (Purple)
    fontWeight: '600',
  };

  const CTA_LINK = { label: 'Agendar Diagnóstico', path: '/contato' };

  const headerClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${scrolled ? 'bg-brand-background/80 backdrop-blur-sm border-b border-white/10' : 'bg-transparent border-b border-transparent'}
  `;
  
  const mobileMenuBgClass = scrolled ? 'bg-brand-background/80 backdrop-blur-sm' : 'bg-brand-background';


  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-brand-text">
              {OFFICE_NAME}
            </Link>
          </div>

          {/* Centered Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-baseline space-x-6">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  className="text-brand-text/80 hover:text-brand-text px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to={CTA_LINK.path}
              className="bg-brand-primary text-white font-bold py-2 px-4 rounded-md text-sm hover:brightness-110 transition"
            >
              {CTA_LINK.label}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-text hover:text-brand-text hover:bg-white/10 focus:outline-none"
            >
              <span className="sr-only">Abrir menu principal</span>
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${mobileMenuBgClass} border-t border-white/10`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {[...NAV_LINKS, CTA_LINK].map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-brand-text/80 hover:text-brand-text block px-3 py-2 rounded-md text-base font-medium"
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
