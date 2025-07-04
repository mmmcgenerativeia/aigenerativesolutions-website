'use client';

import React from 'react';
import { industryThemes } from '@/data/design-tokens';

type IndustryType = 'mineria' | 'madera' | 'agricultura' | 'servicios';

interface IndustryButtonProps {
  industry: IndustryType;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
}

const IndustryButton: React.FC<IndustryButtonProps> = ({
  industry,
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  className = '',
  icon,
  iconPosition = 'left',
}) => {
  const theme = industryThemes[industry];

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm';
      case 'md':
        return 'px-6 py-3 text-base';
      case 'lg':
        return 'px-8 py-4 text-lg';
      case 'xl':
        return 'px-10 py-5 text-xl';
      default:
        return 'px-6 py-3 text-base';
    }
  };

  const getVariantClasses = () => {
    const baseClasses = `rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg`;
    
    switch (variant) {
      case 'primary':
        return `${baseClasses} bg-gradient-to-r ${theme.gradient} text-white shadow-lg hover:shadow-xl`;
      
      case 'secondary':
        const secondaryBg = industry === 'mineria' ? 'bg-amber-100 text-amber-800 hover:bg-amber-200' :
                           industry === 'madera' ? 'bg-green-100 text-green-800 hover:bg-green-200' :
                           industry === 'agricultura' ? 'bg-lime-100 text-lime-800 hover:bg-lime-200' :
                           'bg-blue-100 text-blue-800 hover:bg-blue-200';
        return `${baseClasses} ${secondaryBg}`;
      
      case 'outline':
        const outlineColor = industry === 'mineria' ? 'border-amber-500 text-amber-600 hover:bg-amber-50' :
                            industry === 'madera' ? 'border-green-500 text-green-600 hover:bg-green-50' :
                            industry === 'agricultura' ? 'border-lime-500 text-lime-600 hover:bg-lime-50' :
                            'border-blue-500 text-blue-600 hover:bg-blue-50';
        return `${baseClasses} border-2 ${outlineColor} bg-transparent`;
      
      case 'ghost':
        const ghostColor = industry === 'mineria' ? 'text-amber-600 hover:bg-amber-50' :
                          industry === 'madera' ? 'text-green-600 hover:bg-green-50' :
                          industry === 'agricultura' ? 'text-lime-600 hover:bg-lime-50' :
                          'text-blue-600 hover:bg-blue-50';
        return `${baseClasses} ${ghostColor} bg-transparent`;
      
      default:
        return baseClasses;
    }
  };

  const getDisabledClasses = () => {
    if (disabled) {
      return 'opacity-50 cursor-not-allowed pointer-events-none';
    }
    return '';
  };

  const buttonClasses = `inline-flex items-center justify-center ${getSizeClasses()} ${getVariantClasses()} ${getDisabledClasses()} transition-all duration-300 ${className}`;

  const ButtonContent = () => (
    <>
      {icon && iconPosition === 'left' && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="ml-2">{icon}</span>
      )}
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} className={buttonClasses}>
        <ButtonContent />
      </a>
    );
  }

  return (
    <button 
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      <ButtonContent />
    </button>
  );
};

export default IndustryButton; 