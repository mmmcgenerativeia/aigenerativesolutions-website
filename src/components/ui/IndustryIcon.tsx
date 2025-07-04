'use client';

import React from 'react';
import { type IndustryTheme } from '@/data/design-tokens';

interface IndustryIconProps {
  industry: IndustryTheme;
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  color?: 'primary' | 'secondary' | 'white' | 'gray';
}

const IndustryIcon: React.FC<IndustryIconProps> = ({
  industry,
  name,
  size = 'md',
  className = '',
  color = 'primary',
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-4 h-4';
      case 'md':
        return 'w-6 h-6';
      case 'lg':
        return 'w-8 h-8';
      case 'xl':
        return 'w-12 h-12';
      case '2xl':
        return 'w-16 h-16';
      default:
        return 'w-6 h-6';
    }
  };

  const getColorClasses = () => {
    if (color === 'white') return 'text-white';
    if (color === 'gray') return 'text-gray-600';
    
    switch (industry) {
      case 'mineria':
        return color === 'secondary' ? 'text-amber-800' : 'text-amber-600';
      case 'madera':
        return color === 'secondary' ? 'text-green-800' : 'text-green-600';
      case 'agricultura':
        return color === 'secondary' ? 'text-lime-800' : 'text-lime-600';
      case 'servicios':
        return color === 'secondary' ? 'text-blue-800' : 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  const iconClasses = `${getSizeClasses()} ${getColorClasses()} ${className}`;

  // Iconos SVG específicos por industria
  const getIcon = () => {
    const iconKey = `${industry}-${name}`;
    
    switch (iconKey) {
      // Iconos de Minería
      case 'mineria-excavadora':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12v6a2 2 0 01-2 2H4a2 2 0 01-2-2v-6h20zM4 8h16l-1.5-3H5.5L4 8zm14 6h-2v2h2v-2z"/>
          </svg>
        );
      
      case 'mineria-casco':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C7.58 2 4 5.58 4 10c0 1.5.41 2.9 1.12 4.1l1.35-1.35C6.17 12.3 6 11.67 6 11c0-3.31 2.69-6 6-6s6 2.69 6 6c0 .67-.17 1.3-.47 1.75l1.35 1.35C19.59 12.9 20 11.5 20 10c0-4.42-3.58-8-8-8z"/>
            <circle cx="12" cy="15" r="2"/>
          </svg>
        );

      case 'mineria-sensor':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        );

      // Iconos de Madera
      case 'madera-arbol':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,15.5C2,15.5 2,16.5 3,16.5C4,16.5 4,15.5 4,15.5C4,13.5 6.33,10.67 9,10C12.67,9.33 20,9 20,9C20,9 20,10 19,10C17,10 15,11.5 13.5,13C12,14.5 8.5,16.25 7,17C8,18 9,18 9,18C9,18 10,18 10,18C11,18 12,17 12,17L17,8Z"/>
          </svg>
        );

      case 'madera-sierra':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6L13.5,10.5L18,12L13.5,13.5L12,18L10.5,13.5L6,12L10.5,10.5L12,6Z"/>
          </svg>
        );

      case 'madera-medicion':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
            <path d="M21,4H3A2,2 0 0,0 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6A2,2 0 0,0 21,4M21,18H3V6H21V18M5,10V14H7V10H5M9,8V16H11V8H9M13,11V14H15V11H13M17,9V14H19V9H17Z"/>
          </svg>
        );

      // Iconos de Agricultura
      case 'agricultura-tractor':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
            <path d="M7,4A5,5 0 0,0 2,9A5,5 0 0,0 7,14C8.85,14 10.4,12.95 11.22,11.4H14V13L16.5,10.5L14,8V10H11.22C10.4,8.45 8.85,7.4 7,7.4V4M7,9.4A1.6,1.6 0 0,1 8.6,11A1.6,1.6 0 0,1 7,12.6A1.6,1.6 0 0,1 5.4,11A1.6,1.6 0 0,1 7,9.4M18,12A2,2 0 0,0 16,14A2,2 0 0,0 18,16A2,2 0 0,0 20,14A2,2 0 0,0 18,12Z"/>
          </svg>
        );

      case 'agricultura-drone':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
            <path d="M5.5,1C4.67,1 4,1.67 4,2.5C4,3.33 4.67,4 5.5,4C6.33,4 7,3.33 7,2.5C7,1.67 6.33,1 5.5,1M18.5,1C17.67,1 17,1.67 17,2.5C17,3.33 17.67,4 18.5,4C19.33,4 20,3.33 20,2.5C20,1.67 19.33,1 18.5,1M12,3L10,6L12,9L14,6L12,3M18.5,20C19.33,20 20,20.67 20,21.5C20,22.33 19.33,23 18.5,23C17.67,23 17,22.33 17,21.5C17,20.67 17.67,20 18.5,20M5.5,20C6.33,20 7,20.67 7,21.5C7,22.33 6.33,23 5.5,23C4.67,23 4,22.33 4,21.5C4,20.67 4.67,20 5.5,20M12,14L10,17L12,20L14,17L12,14Z"/>
          </svg>
        );

      case 'agricultura-planta':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.5,2C5.89,2.65 5.2,3.58 4.91,5C4.58,6.69 5.4,8.5 6.5,9.58C7.19,10.25 8.04,10.65 8.94,10.85C8.04,11.05 7.19,11.45 6.5,12.12C5.4,13.2 4.58,15.01 4.91,16.7C5.2,18.12 5.89,19.05 6.5,19.7L8,18.61C7.69,18.06 7.2,17.23 7,16.25C6.75,15.06 7.34,13.88 8.5,12.72C9.66,11.56 10.84,11 12,11C13.16,11 14.34,11.56 15.5,12.72C16.66,13.88 17.25,15.06 17,16.25C16.8,17.23 16.31,18.06 16,18.61L17.5,19.7C18.11,19.05 18.8,18.12 19.09,16.7C19.42,15.01 18.6,13.2 17.5,12.12C16.81,11.45 15.96,11.05 15.06,10.85C15.96,10.65 16.81,10.25 17.5,9.58C18.6,8.5 19.42,6.69 19.09,5C18.8,3.58 18.11,2.65 17.5,2L16,3.09C16.31,3.64 16.8,4.47 17,5.45C17.25,6.64 16.66,7.82 15.5,8.98C14.34,10.14 13.16,10.7 12,10.7C10.84,10.7 9.66,10.14 8.5,8.98C7.34,7.82 6.75,6.64 7,5.45C7.2,4.47 7.69,3.64 8,3.09L6.5,2Z"/>
          </svg>
        );

      // Iconos de Servicios
      case 'servicios-capacitacion':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/>
          </svg>
        );

      case 'servicios-chatbot':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z"/>
          </svg>
        );

      case 'servicios-web':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
            <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
          </svg>
        );

      // Iconos genéricos que se pueden usar en cualquier industria
      case 'analytics':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
            <path d="M22,21H2V3H4V19H6V17H10V19H12V16H16V19H18V17H22V21Z"/>
          </svg>
        );

      case 'iot':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
          </svg>
        );

      case 'ai':
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M14.5,9L16.5,17H14.5L14,14.5H10L9.5,17H7.5L9.5,9H14.5M10.75,12.5H13.25L12,8.25L10.75,12.5Z"/>
          </svg>
        );

      default:
        // Icono por defecto
        return (
          <svg className={iconClasses} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17Z"/>
          </svg>
        );
    }
  };

  return getIcon();
};

export default IndustryIcon; 