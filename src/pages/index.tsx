import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CasosExito from '@/components/CasosExito';
import About from '@/components/About';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppAgent from '@/components/WhatsAppAgent';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  // Función personalizada para manejar el envío del formulario de contacto
  const handleContactSubmit = async (formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    // Aquí puedes integrar con tu servicio de email preferido
    // Por ejemplo: EmailJS, Formspree, o tu propio backend
    console.log('Datos del formulario:', formData);
    
    // Ejemplo de integración con tu backend:
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
    
    // Simulación de envío exitoso
    return Promise.resolve();
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        <Services />
        <CasosExito />
        <About />
        <WhyUs />
        <Testimonials />
        <Contact onSubmit={handleContactSubmit} />
      </main>
      
      <Footer />
      
      {/* WhatsApp Agent - Widget flotante disponible en toda la página */}
      <WhatsAppAgent />
    </div>
  );
};

export default HomePage; 