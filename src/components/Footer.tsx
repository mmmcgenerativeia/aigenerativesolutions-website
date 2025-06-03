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
  phone?: string;
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
  description = 'Soluciones de Inteligencia Artificial Generativa para un futuro más inteligente.',
  email = 'contacto@aigenerativesolutions.com',
  phone = '+1 (234) 567-890',
  address = 'Santiago, Chile',
  socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/aigenerativesolutions',
      ariaLabel: 'LinkedIn',
      color: '#00d4ff',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/aigs_solutions',
      ariaLabel: 'Twitter/X',
      color: '#ff4da6',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      href: 'https://github.com/aigenerativesolutions',
      ariaLabel: 'GitHub',
      color: '#00ff88',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.799 24 17.301 24 12c0-6.627-5.373-12-12-12Z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/aigs_solutions',
      ariaLabel: 'Instagram',
      color: '#ffd700',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.989.013 7.041.048 5.51.108 4.488.306 3.639.556c-.899.26-1.76.68-2.516 1.436C.363 2.748-.063 3.61-.323 4.508c-.25.849-.448 1.87-.508 3.402C-.059 8.916-.059 9.323-.059 12.944s0 4.028.048 4.976c.06 1.532.258 2.553.508 3.402.26.899.68 1.76 1.436 2.516.756.756 1.617 1.176 2.516 1.436.849.25 1.87.448 3.402.508.948.035 1.355.048 4.976.048s4.028 0 4.976-.048c1.532-.06 2.553-.258 3.402-.508.899-.26 1.76-.68 2.516-1.436.756-.756 1.176-1.617 1.436-2.516.25-.849.448-1.87.508-3.402.035-.948.048-1.355.048-4.976s0-4.028-.048-4.976c-.06-1.532-.258-2.553-.508-3.402-.26-.899-.68-1.76-1.436-2.516C19.776.363 18.915-.063 18.017-.323c-.849-.25-1.87-.448-3.402-.508C13.667-.059 13.26-.059 9.639-.059s-4.028 0-4.976.048zm-.024 2.16c3.578 0 4.004.014 5.415.048 1.307.06 2.018.278 2.49.46.627.244 1.075.535 1.544 1.005.47.47.761.917 1.005 1.544.182.472.4 1.183.46 2.49.034 1.411.048 1.837.048 5.415s-.014 4.004-.048 5.415c-.06 1.307-.278 2.018-.46 2.49-.244.627-.535 1.075-1.005 1.544-.47.47-.917.761-1.544 1.005-.472.182-1.183.4-2.49.46-1.411.034-1.837.048-5.415.048s-4.004-.014-5.415-.048c-1.307-.06-2.018-.278-2.49-.46-.627-.244-1.075-.535-1.544-1.005-.47-.47-.761-.917-1.005-1.544-.182-.472-.4-1.183-.46-2.49-.034-1.411-.048-1.837-.048-5.415s.014-4.004.048-5.415c.06-1.307.278-2.018.46-2.49.244-.627.535-1.075 1.005-1.544.47-.47.917-.761 1.544-1.005.472-.182 1.183-.4 2.49-.46 1.411-.034 1.837-.048 5.415-.048z"/>
          <path d="M12.017 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12.017 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
        </svg>
      )
    }
  ],
  currentYear = new Date().getFullYear(),
  quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
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
    <footer className="relative overflow-hidden footer-glass">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-accent-cyan/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent-magenta/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-yellow/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent-cyan/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <button 
                onClick={scrollToTop}
                className="text-3xl font-display font-bold title-accent hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                {companyName}
              </button>
            </div>
            
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-md">
              {description}
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center group-hover:bg-accent-cyan/20 transition-colors duration-300">
                  <svg className="w-5 h-5 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a 
                  href={`mailto:${email}`} 
                  className="text-slate-300 hover:text-accent-cyan transition-colors duration-300"
                >
                  {email}
                </a>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-accent-magenta/10 flex items-center justify-center group-hover:bg-accent-magenta/20 transition-colors duration-300">
                  <svg className="w-5 h-5 text-accent-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a 
                  href={`tel:${phone}`} 
                  className="text-slate-300 hover:text-accent-magenta transition-colors duration-300"
                >
                  {phone}
                </a>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-accent-yellow/10 flex items-center justify-center group-hover:bg-accent-yellow/20 transition-colors duration-300">
                  <svg className="w-5 h-5 text-accent-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <h4 className="text-xl font-bold mb-6 title-gradient">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-slate-400 hover:text-accent-cyan transition-all duration-300 hover:translate-x-1 block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-6 title-gradient">Mantente Informado</h4>
            <p className="text-slate-400 mb-6">
              Suscríbete para recibir las últimas noticias sobre IA generativa.
            </p>
            
            <div className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-3 bg-glass-dark rounded-l-lg border border-slate-600 focus:border-accent-cyan focus:outline-none text-white placeholder-slate-400 transition-colors duration-300"
                />
                <button className="btn-primary-modern rounded-l-none rounded-r-lg px-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              
              <p className="text-xs text-slate-500">
                Al suscribirte, aceptas nuestros términos y política de privacidad.
              </p>
            </div>
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
                className="w-12 h-12 rounded-xl glass-card flex items-center justify-center group hover:scale-110 transition-all duration-300"
                style={{ borderColor: `${link.color}20` }}
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
                &copy; {currentYear} <span className="text-accent-cyan font-semibold">{companyName}</span> - AI Generative Solutions. 
                <br className="md:hidden" />
                Todos los derechos reservados.
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
                  className="text-slate-500 hover:text-accent-cyan transition-colors duration-300 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="absolute bottom-8 right-8">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-xl glass-card flex items-center justify-center group hover:scale-110 transition-all duration-300"
            aria-label="Volver arriba"
          >
            <svg 
              className="w-6 h-6 text-accent-cyan group-hover:-translate-y-1 transition-transform duration-300" 
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