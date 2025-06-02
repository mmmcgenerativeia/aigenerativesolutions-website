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
  title = '¿Listo para Revolucionar su Negocio con IA?',
  subtitle = 'Contáctenos hoy mismo para una consulta gratuita y descubra cómo AIGS puede ayudarle a alcanzar sus metas más ambiciosas.',
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

      setSubmitMessage('¡Gracias! Su mensaje ha sido enviado con éxito. Nos pondremos en contacto pronto.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitMessage('Error al enviar el mensaje. Por favor, inténtelo de nuevo.');
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 px-4 hero-gradient relative">
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl section-title mb-6">
          {title.split('Revolucionar').map((part, index, array) => 
            index < array.length - 1 ? (
              <React.Fragment key={index}>
                {part}
                <span className="accent-color">Revolucionar</span>
              </React.Fragment>
            ) : (
              part
            )
          )}
        </h2>
        
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Nombre Completo"
              className="w-full p-4 rounded-lg bg-gray-700 bg-opacity-60 border border-gray-600 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none placeholder-gray-400 text-white"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Correo Electrónico"
              className="w-full p-4 rounded-lg bg-gray-700 bg-opacity-60 border border-gray-600 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none placeholder-gray-400 text-white"
              required
            />
          </div>
          
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Asunto"
            className="w-full p-4 rounded-lg bg-gray-700 bg-opacity-60 border border-gray-600 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none placeholder-gray-400 text-white"
          />
          
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Su Mensaje..."
            rows={5}
            className="w-full p-4 rounded-lg bg-gray-700 bg-opacity-60 border border-gray-600 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none placeholder-gray-400 text-white"
            required
          />
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn-primary px-10 py-4 rounded-lg text-xl font-semibold w-full ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
        </form>
        
        {submitMessage && (
          <div className={`mt-6 text-lg ${
            submitMessage.includes('Error') ? 'text-red-400' : 'accent-color'
          }`}>
            {submitMessage}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact; 