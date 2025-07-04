'use client';

import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface HeaderProps {
  siteName?: string;
  navigation?: Array<{
    name: string;
    href: string;
  }>;
  ctaText?: string;
  ctaHref?: string;
}

const Header: React.FC<HeaderProps> = ({
  siteName = 'AIGS',
  navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' }
  ],
  ctaText = 'Solicitar Consulta',
  ctaHref = '#contacto'
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const handleNavClick = (href: string) => {
    if (href === '/') {
      // Navigate to home page
      window.location.href = '/';
    } else if (href.startsWith('#')) {
      scrollToSection(href);
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 header-glass transition-all duration-300 ${
        isScrolled ? 'scrolled py-2' : 'py-4'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <Logo size="sm" className="" />
              <button 
                onClick={() => scrollToSection('#inicio')}
                className="text-2xl font-display font-bold title-accent hover:scale-105 transition-transform duration-300"
              >
                {siteName}
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-2">
              {navigation.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.href)}
                  className="nav-link-modern text-sm font-medium transition-all duration-300 relative group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/10 to-accent-magenta/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              ))}
              
              {/* CTA Button */}
              <button
                onClick={() => handleNavClick(ctaHref)}
                className="btn-primary-modern ml-4 text-sm font-semibold animate-pulse-glow"
              >
                <span className="relative z-10">{ctaText}</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg glass-card transition-all duration-300 hover:scale-110"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute top-1 left-0 w-full h-0.5 bg-gradient-to-r from-accent-cyan to-accent-magenta transform transition-all duration-300 origin-center ${
                  isMenuOpen ? 'rotate-45 top-3' : ''
                }`}></span>
                <span className={`absolute top-3 left-0 w-full h-0.5 bg-gradient-to-r from-accent-magenta to-accent-yellow transform transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`absolute top-5 left-0 w-full h-0.5 bg-gradient-to-r from-accent-yellow to-accent-green transform transition-all duration-300 origin-center ${
                  isMenuOpen ? '-rotate-45 top-3' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="mt-4 mx-6 glass-card p-6 mobile-menu-backdrop">
            <nav className="space-y-4">
              {navigation.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-left nav-link-modern text-base font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:bg-glass-light"
                >
                  {item.name}
                </button>
              ))}
              
              <button
                onClick={() => handleNavClick(ctaHref)}
                className="w-full btn-primary-modern mt-6 text-base font-semibold py-4"
              >
                {ctaText}
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className={`transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}></div>
    </>
  );
};

export default Header; 