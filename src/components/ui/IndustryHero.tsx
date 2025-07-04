'use client';

import React from 'react';
import { getIndustryTheme, type IndustryTheme } from '@/data/design-tokens';

interface IndustryHeroProps {
  industry: IndustryTheme;
  title: string;
  highlight: string;
  subtitle: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  metrics?: {
    value: string;
    label: string;
  }[];
  className?: string;
}

const IndustryHero: React.FC<IndustryHeroProps> = ({
  industry,
  title,
  highlight,
  subtitle,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  metrics = [],
  className = '',
}) => {
  const theme = getIndustryTheme(industry);

  const getHeroBackground = () => {
    if (backgroundImage) {
      return `bg-gradient-to-br ${theme.colors.gradients.hero} relative`;
    }
    return `bg-gradient-to-br ${theme.colors.gradients.hero}`;
  };

  const getHighlightColor = () => {
    switch (industry) {
      case 'mineria':
        return 'text-amber-400';
      case 'madera':
        return 'text-green-400';
      case 'agricultura':
        return 'text-lime-400';
      case 'servicios':
        return 'text-blue-400';
      default:
        return 'text-blue-400';
    }
  };

  const getSubtitleColor = () => {
    switch (industry) {
      case 'mineria':
        return 'text-amber-100';
      case 'madera':
        return 'text-green-100';
      case 'agricultura':
        return 'text-green-100';
      case 'servicios':
        return 'text-blue-100';
      default:
        return 'text-blue-100';
    }
  };

  const getPrimaryCTAClasses = () => {
    return `inline-block bg-gradient-to-r ${theme.colors.gradients.cta} text-white px-8 py-4 rounded-xl ${theme.fonts.accent} ${theme.effects.buttonHover}`;
  };

  const getSecondaryCTAClasses = () => {
    return `inline-block bg-white/10 backdrop-blur-lg text-white px-8 py-4 rounded-xl ${theme.fonts.accent} border border-white/20 hover:bg-white/20 transition-all duration-300`;
  };

  return (
    <section className={`${theme.spacing.sectionPadding} ${getHeroBackground()} ${theme.spacing.heroHeight} flex items-center ${className}`}>
      {/* Background Image Overlay */}
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className={`absolute inset-0 ${theme.effects.gradientOverlay}`} />
        </>
      )}
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Main Title */}
          <h1 className={`text-5xl lg:text-6xl ${theme.fonts.heading} text-white mb-6`}>
            {title} <span className={getHighlightColor()}>{highlight}</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl lg:text-2xl ${getSubtitleColor()} mb-12 max-w-4xl mx-auto ${theme.fonts.body}`}>
            {subtitle}
          </p>

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              {primaryCTA && (
                <a href={primaryCTA.href} className={getPrimaryCTAClasses()}>
                  {primaryCTA.text}
                </a>
              )}
              {secondaryCTA && (
                <a href={secondaryCTA.href} className={getSecondaryCTAClasses()}>
                  {secondaryCTA.text}
                </a>
              )}
            </div>
          )}

          {/* Metrics */}
          {metrics.length > 0 && (
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-slate-400 mb-8">
                Resultados comprobados en la industria
              </p>
              <div className={`grid grid-cols-2 md:grid-cols-${metrics.length} gap-8 ${getHighlightColor()}`}>
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl lg:text-4xl ${theme.fonts.accent} mb-2`}>
                      {metric.value}
                    </div>
                    <div className="text-sm text-slate-400 ${theme.fonts.body}">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default IndustryHero; 