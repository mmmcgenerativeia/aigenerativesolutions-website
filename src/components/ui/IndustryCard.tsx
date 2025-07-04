'use client';

import React from 'react';
import { industryThemes } from '@/data/design-tokens';

type IndustryType = 'mineria' | 'madera' | 'agricultura' | 'servicios';

interface IndustryCardProps {
  industry: IndustryType;
  title: string;
  description: string;
  features?: string[];
  icon?: string;
  href?: string;
  metrics?: {
    value: string;
    label: string;
  }[];
  variant?: 'default' | 'feature' | 'metric' | 'case-study';
  className?: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({
  industry,
  title,
  description,
  features = [],
  icon,
  href,
  metrics = [],
  variant = 'default',
  className = '',
}) => {
  const theme = industryThemes[industry];
  
  const getVariantClasses = () => {
    const baseClasses = `rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 overflow-hidden`;
    
    switch (variant) {
      case 'feature':
        return `${baseClasses} bg-gradient-to-br from-white/95 to-gray-50/95 border border-opacity-20`;
      case 'metric':
        return `${baseClasses} bg-white border border-gray-200`;
      case 'case-study':
        return `${baseClasses} bg-white p-6`;
      default:
        return `${baseClasses} bg-white p-6`;
    }
  };

  const getIconBackground = () => {
    switch (industry) {
      case 'mineria':
        return 'bg-amber-500';
      case 'madera':
        return 'bg-green-600';
      case 'agricultura':
        return 'bg-lime-600';
      case 'servicios':
        return 'bg-blue-600';
      default:
        return 'bg-gray-500';
    }
  };

  const getTextColors = () => {
    switch (industry) {
      case 'mineria':
        return {
          title: 'text-amber-900',
          description: 'text-slate-700',
          features: 'text-slate-600',
        };
      case 'madera':
        return {
          title: 'text-green-900',
          description: 'text-slate-700',
          features: 'text-slate-600',
        };
      case 'agricultura':
        return {
          title: 'text-lime-900',
          description: 'text-slate-700',
          features: 'text-slate-600',
        };
      case 'servicios':
        return {
          title: 'text-blue-900',
          description: 'text-slate-700',
          features: 'text-slate-600',
        };
      default:
        return {
          title: 'text-gray-900',
          description: 'text-slate-700',
          features: 'text-slate-600',
        };
    }
  };

  const getBorderColor = () => {
    switch (industry) {
      case 'mineria':
        return 'border-amber-200';
      case 'madera':
        return 'border-green-200';
      case 'agricultura':
        return 'border-lime-200';
      case 'servicios':
        return 'border-blue-200';
      default:
        return 'border-gray-200';
    }
  };

  const textColors = getTextColors();
  const borderColor = getBorderColor();

  const CardContent = () => (
    <>
      {/* Icon */}
      {icon && variant === 'feature' && (
        <div className={`w-16 h-16 ${getIconBackground()} rounded-full flex items-center justify-center mb-6`}>
          <span className="text-2xl text-white">{icon}</span>
        </div>
      )}

      {/* Title */}
      <h3 className={`text-2xl font-bold mb-4 ${textColors.title}`}>
        {title}
      </h3>

      {/* Description */}
      <p className={`leading-relaxed mb-6 ${textColors.description}`}>
        {description}
      </p>

      {/* Features List */}
      {features.length > 0 && (
        <ul className={`text-sm ${textColors.features} space-y-2 mb-6`}>
          {features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
      )}

      {/* Metrics */}
      {metrics.length > 0 && variant === 'metric' && (
        <div className="grid grid-cols-3 gap-4 text-center">
          {metrics.map((metric, index) => (
            <div key={index}>
              <div className={`text-2xl font-bold ${theme.primary === '#f97316' ? 'text-amber-600' : 
                theme.primary === '#0d9488' ? 'text-green-600' : 
                theme.primary === '#06b6d4' ? 'text-lime-600' : 
                'text-blue-600'}`}>
                {metric.value}
              </div>
              <div className="text-sm text-slate-600">{metric.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Case Study Metrics */}
      {metrics.length > 0 && variant === 'case-study' && (
        <div className="grid grid-cols-3 gap-4 text-center mt-6">
          {metrics.map((metric, index) => (
            <div key={index}>
              <div className={`text-2xl font-bold ${theme.primary === '#f97316' ? 'text-amber-600' : 
                theme.primary === '#0d9488' ? 'text-green-600' : 
                theme.primary === '#06b6d4' ? 'text-lime-600' : 
                'text-blue-600'}`}>
                {metric.value}
              </div>
              <div className="text-sm text-slate-600">{metric.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Link/Button */}
      {href && (
        <a 
          href={href}
          className={`inline-block bg-gradient-to-r ${theme.gradient} text-white px-6 py-3 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 font-bold`}
        >
          {variant === 'feature' ? `Ver ${title}` : 'Más información'}
        </a>
      )}
    </>
  );

  if (variant === 'feature') {
    return (
      <div className={`${getVariantClasses()} ${borderColor} ${className}`}>
        <div className="p-8">
          <CardContent />
        </div>
      </div>
    );
  }

  return (
    <div className={`${getVariantClasses()} ${className}`}>
      <CardContent />
    </div>
  );
};

export default IndustryCard; 