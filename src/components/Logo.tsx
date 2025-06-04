import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-48 h-16',
    md: 'w-64 h-20',
    lg: 'w-80 h-24',
    xl: 'w-96 h-32',
  };

  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  return (
    <div className={`logo-container-3d relative flex justify-center items-center ${sizeClasses[size]} ${className}`}>
      <div className={`logo-text-3d ${textSizeClasses[size]} font-exo`}>
        <span className="ai-part-3d">AI</span>{' '}
        <span className="ai-part-3d">G</span><span className="solutions-part-3d">enerative </span>
        <span className="ai-part-3d">S</span><span className="solutions-part-3d">olutions</span>
      </div>

      <div className="satellite-3d satellite-1-3d"></div>
      <div className="satellite-3d satellite-2-3d"></div>
      <div className="satellite-3d satellite-3-3d"></div>
      <div className="satellite-3d satellite-4-3d"></div>
      <div className="satellite-3d satellite-5-3d"></div>
    </div>
  );
};

export default Logo; 