import React from 'react';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
  color: string;
}

interface FooterProps {
  companyName?: string;
  description?: string;
  email?: string;

  address?: string;
  socialLinks?: SocialLink[];
  currentYear?: number;
  quickLinks?: Array<{
    name: string;
    href: string;
  }>;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const Footer: React.FC<FooterProps> = ({
  companyName = 'AIGS',
  description = 'Especialistas en IA para minería. Transformamos operaciones mineras con machine learning, geoestadística y analítica avanzada para maximizar eficiencia y ROI.',
  email = 'contacto@aigenerativesolutions.com',

  address = 'Santiago, Chile',
  socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/ai-generative-solutions/',
      ariaLabel: 'LinkedIn - AIGS',
      color: '#f97316',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      href: 'mailto:contacto@aigenerativesolutions.com',
      ariaLabel: 'Email de contacto',
      color: '#eab308',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ],
  currentYear = new Date().getFullYear(),
  quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Casos de Éxito', href: '#casos-exito' },
    { name: 'Contacto', href: '#contacto' }
  ],
  legalLinks = [
    { name: 'Política de Privacidad', href: '/privacy' },
    { name: 'Términos de Servicio', href: '/terms' },
    { name: 'Cookies', href: '/cookies' }
  ]
}) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      scrollToSection(href);
    } else {
      window.open(href, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl animate-subtle-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl animate-subtle-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/3 rounded-full blur-3xl animate-subtle-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/20 rounded-full animate-gentle-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Top Border */}
      <div className="w-full h-1 bg-gradient-to-r from-orange-400 via-yellow-500 to-blue-400"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <button 
                onClick={scrollToTop}
                className="text-3xl font-display font-bold bg-gradient-to-r from-orange-400 via-yellow-500 to-blue-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                {companyName}
              </button>
              <div className="text-sm text-orange-300 mt-1 font-medium">AI Generative Solutions</div>
            </div>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-md">
              {description}
            </p>

            {/* Mining Specialties */}
            <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-400/20">
              <h5 className="text-orange-300 font-semibold mb-2">Especialidades:</h5>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
                <div>• Geometalurgia</div>
                <div>• Geoestadística</div>
                <div>• Mantenimiento Predictivo</div>
                <div>• Optimización de Planta</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors duration-300">
                  <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a 
                  href={`mailto:${email}`} 
                  className="text-slate-300 hover:text-orange-400 transition-colors duration-300"
                >
                  {email}
                </a>
              </div>
              

              
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors duration-300">
                  <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-slate-300">{address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-slate-400 hover:text-orange-400 transition-all duration-300 hover:translate-x-1 block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectores Mineros */}
          <div>
            <h4 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent">Sectores que Atendemos</h4>
            <ul className="space-y-3 text-slate-400">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                Cobre
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                Oro
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                Hierro
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Litio
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                Carbón
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                Agregados
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass-card flex items-center justify-center group hover:scale-110 transition-all duration-300 border border-slate-600/50"
                style={{ backgroundColor: `${link.color}10` }}
              >
                <div 
                  className="transition-colors duration-300"
                  style={{ color: link.color }}
                >
                  {link.icon}
                </div>
                
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md"
                  style={{ background: link.color }}
                ></div>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-slate-500 text-center md:text-left">
              <p>
                &copy; {currentYear} <span className="text-orange-400 font-semibold">{companyName}</span> - AI Generative Solutions. 
                <br className="md:hidden" />
                Todos los derechos reservados.
              </p>
              <p className="text-sm mt-1">
                🇨🇱 Diseñando el futuro de la minería chilena con IA
              </p>
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-orange-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
              {/* Admin Dashboard Link */}
              <a
                href="/admin"
                className="text-slate-600 hover:text-orange-400 transition-colors duration-300 text-xs opacity-50 hover:opacity-100"
                title="Dashboard Administrativo"
              >
                Admin
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="absolute bottom-8 right-8">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-xl glass-card flex items-center justify-center group hover:scale-110 transition-all duration-300 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-400/30"
            aria-label="Volver arriba"
          >
            <svg 
              className="w-6 h-6 text-orange-400 group-hover:-translate-y-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 