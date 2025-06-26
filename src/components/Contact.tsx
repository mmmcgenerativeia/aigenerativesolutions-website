'use client';

import React, { useState } from 'react';

interface ContactProps {
  title?: string;
  subtitle?: string;
  onSubmit?: (formData: ContactFormData) => void;
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC<ContactProps> = ({
  title = '¿Listo para dar el siguiente paso en Minería 4.0?',
  subtitle = 'Permítanos mostrarle en una demostración de 30 minutos cómo nuestras soluciones de IA pueden aplicarse a los desafíos específicos de su operación minera.',
  onSubmit
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('Enviando mensaje...');

    try {
      // Si se proporciona una función onSubmit personalizada, usarla
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Simulación de envío (reemplazar con lógica real)
        await new Promise(resolve => setTimeout(resolve, 2000));
      }

      setSubmitMessage('¡Gracias! Su mensaje ha sido enviado con éxito. Nos pondremos en contacto en las próximas 24 horas para coordinar su demostración personalizada.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitMessage('Error al enviar el mensaje. Por favor, inténtelo de nuevo o contáctenos directamente a contacto@aigenerativesolutions.com');
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
          <span className="title-gradient">{title.split('Minería 4.0')[0]}</span>
          <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-blue-400 bg-clip-text text-transparent font-extrabold">Minería 4.0</span>
          <span className="title-gradient">?</span>
        </h2>
        
        <p className="text-xl text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* Contact Info */}
        <div className="mb-12 flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="glass-card p-6 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-400/30 rounded-xl">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="text-sm text-slate-400">Email directo</p>
                <a href="mailto:contacto@aigenerativesolutions.com" className="text-orange-400 hover:text-orange-300 font-semibold">
                  contacto@aigenerativesolutions.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-400/30 rounded-xl">
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-sm text-slate-400">Tiempo de respuesta</p>
                <p className="text-blue-400 font-semibold">24 horas</p>
              </div>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Nombre Completo"
              className="w-full p-4 rounded-xl bg-slate-800/60 border border-slate-600 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none placeholder-slate-400 text-white transition-all duration-300"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Correo Electrónico"
              className="w-full p-4 rounded-xl bg-slate-800/60 border border-slate-600 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none placeholder-slate-400 text-white transition-all duration-300"
              required
            />
          </div>
          
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Empresa y Tipo de Operación (ej: Minera ABC - Cobre)"
            className="w-full p-4 rounded-xl bg-slate-800/60 border border-slate-600 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none placeholder-slate-400 text-white transition-all duration-300"
          />
          
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Cuéntenos sobre sus principales desafíos operativos y qué le gustaría optimizar con IA..."
            rows={5}
            className="w-full p-4 rounded-xl bg-slate-800/60 border border-slate-600 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none placeholder-slate-400 text-white transition-all duration-300"
            required
          />
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-gradient-to-r from-orange-500 to-yellow-600 text-slate-900 font-bold text-xl px-12 py-4 rounded-xl w-full transition-all duration-300 hover:from-orange-400 hover:to-yellow-500 hover:scale-105 group ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <span className="flex items-center justify-center gap-2">
              {isSubmitting ? 'Enviando...' : 'Solicitar Demo Gratuita'}
              {!isSubmitting && (
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              )}
            </span>
          </button>
        </form>
        
        {submitMessage && (
          <div className={`mt-8 p-4 rounded-xl glass-card text-lg ${
            submitMessage.includes('Error') ? 'text-red-400 border-red-400/30' : 'text-green-400 border-green-400/30'
          }`}>
            {submitMessage}
          </div>
        )}

        {/* Additional CTA */}
        <div className="mt-16 glass-card p-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600/50 rounded-2xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Prefiere una conversación directa?
          </h3>
          <p className="text-slate-300 mb-6">
            Nuestros especialistas en IA para minería están disponibles para discutir su proyecto específico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:contacto@aigenerativesolutions.com?subject=Consulta%20sobre%20IA%20para%20Minería&body=Hola%2C%20me%20gustaría%20conocer%20más%20sobre%20sus%20soluciones%20de%20IA%20para%20operaciones%20mineras."
              className="bg-gradient-to-r from-blue-500 to-teal-600 text-white font-semibold text-lg px-8 py-3 rounded-xl hover:from-blue-400 hover:to-teal-500 transition-all duration-300 group"
            >
              <span className="flex items-center gap-2">
                Enviar Email Directo
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 