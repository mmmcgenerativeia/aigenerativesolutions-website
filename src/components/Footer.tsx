import React from 'react';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

interface FooterProps {
  companyName?: string;
  description?: string;
  email?: string;
  phone?: string;
  socialLinks?: SocialLink[];
  currentYear?: number;
}

const Footer: React.FC<FooterProps> = ({
  companyName = 'AIGS',
  description = 'Soluciones de Inteligencia Artificial Generativa para un futuro más inteligente.',
  email = 'contacto@aigenerativesolutions.com',
  phone = '+1 (234) 567-890',
  socialLinks = [
    {
      name: 'LinkedIn',
      href: '#',
      ariaLabel: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: '#',
      ariaLabel: 'Twitter',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.454 0 1.717.87 3.228 2.198 4.105-.807-.026-1.566-.247-2.229-.616v.054c0 2.393 1.703 4.382 3.956 4.83-.414.112-.85.172-1.296.172-.317 0-.623-.031-.922-.086.63 1.952 2.445 3.372 4.604 3.411-1.69 1.323-3.823 2.105-6.142 2.105-.4 0-.792-.023-1.175-.069 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.213-.005-.426-.015-.637.96-.695 1.795-1.56 2.457-2.54z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      href: '#',
      ariaLabel: 'GitHub',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.799 24 17.301 24 12c0-6.627-5.373-12-12-12Z" clipRule="evenodd" />
        </svg>
      )
    }
  ],
  currentYear = new Date().getFullYear()
}) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 footer-gradient relative">
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-extrabold accent-color mb-3">
              {companyName}
            </h3>
            <p className="text-gray-400">
              {description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-300 hover:accent-color transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('nosotros')}
                  className="text-gray-300 hover:accent-color transition-colors"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="text-gray-300 hover:accent-color transition-colors"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contacto')}
                  className="text-gray-300 hover:accent-color transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xl font-semibold mb-3">Síganos</h4>
            <div className="flex space-x-6 justify-center md:justify-start mb-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.ariaLabel}
                  className="text-gray-400 hover:accent-color transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-gray-400">
                Email: <a href={`mailto:${email}`} className="hover:accent-color">{email}</a>
              </p>
              <p className="text-gray-400">
                Tel: <a href={`tel:${phone}`} className="hover:accent-color">{phone}</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-500 border-t border-gray-700 pt-8">
          <p>&copy; {currentYear} {companyName} - AI Generative Solutions. Todos los derechos reservados.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:accent-color">Política de Privacidad</a>
            <span>|</span>
            <a href="#" className="hover:accent-color">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 