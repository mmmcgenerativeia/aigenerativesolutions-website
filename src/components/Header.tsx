'use client';

import React, { useState } from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-700 shadow-lg header-backdrop">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo simplificado para header */}
          <button 
            onClick={() => scrollToSection('inicio')}
            className="text-3xl font-extrabold accent-color cursor-pointer focus:outline-none"
          >
            AIGS
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button onClick={() => scrollToSection('inicio')} className="nav-link text-lg font-medium">
              Inicio
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="nav-link text-lg font-medium">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('servicios')} className="nav-link text-lg font-medium">
              Servicios
            </button>
            <button onClick={() => scrollToSection('contacto')} className="nav-link text-lg font-medium">
              Contacto
            </button>
            <button 
              onClick={() => scrollToSection('contacto')} 
              className="btn-primary px-6 py-2 rounded-lg font-semibold text-lg"
            >
              Solicitar Consulta
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mobile-menu-backdrop">
          <button 
            onClick={() => scrollToSection('inicio')} 
            className="block px-6 py-3 text-lg hover:bg-gray-700 hover:bg-opacity-50 w-full text-left"
          >
            Inicio
          </button>
          <button 
            onClick={() => scrollToSection('nosotros')} 
            className="block px-6 py-3 text-lg hover:bg-gray-700 hover:bg-opacity-50 w-full text-left"
          >
            Nosotros
          </button>
          <button 
            onClick={() => scrollToSection('servicios')} 
            className="block px-6 py-3 text-lg hover:bg-gray-700 hover:bg-opacity-50 w-full text-left"
          >
            Servicios
          </button>
          <button 
            onClick={() => scrollToSection('contacto')} 
            className="block px-6 py-3 text-lg hover:bg-gray-700 hover:bg-opacity-50 w-full text-left"
          >
            Contacto
          </button>
          <button 
            onClick={() => scrollToSection('contacto')} 
            className="block px-6 py-3 text-lg accent-bg text-gray-900 font-semibold hover:bg-opacity-90 w-full text-left"
          >
            Solicitar Consulta
          </button>
        </div>
      )}
    </header>
  );
};

export default Header; 