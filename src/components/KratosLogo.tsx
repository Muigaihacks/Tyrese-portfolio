'use client';

interface KratosLogoProps {
  showTagline?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  variant?: 'light' | 'dark'; // For light or dark backgrounds
}

export default function KratosLogo({ 
  showTagline = false, 
  size = 'medium',
  className = '',
  variant = 'light'
}: KratosLogoProps) {
  const sizeClasses = {
    small: 'text-lg',
    medium: 'text-2xl',
    large: 'text-4xl'
  };

  const taglineSizeClasses = {
    small: 'text-xs',
    medium: 'text-sm',
    large: 'text-base'
  };

  // Graffiti-style bubbly effect with CSS - using Bungee Inline for that rounded graffiti look
  const graffitiStyle = {
    fontFamily: 'var(--font-bungee-inline), "Bungee Inline", "Arial Black", Impact, sans-serif',
    fontWeight: 400,
    letterSpacing: '0.08em',
    transform: 'scaleY(1.2) scaleX(1.08)', // Makes letters taller and wider/bubbly
    textShadow: '4px 4px 0px rgba(30, 64, 175, 0.3), 2px 2px 0px rgba(0, 0, 0, 0.2), 1px 1px 2px rgba(0, 0, 0, 0.1)',
    WebkitTextStroke: '0.8px rgba(30, 64, 175, 0.4)', // Adds blue outline effect
    filter: 'drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.1))',
  };

  return (
    <div className={`flex flex-col ${className}`}>
      {/* Logo Container with 3D Effect */}
      <div className="relative inline-block">
        {/* Shadow Layer - Darker Blue (offset behind) */}
        <div 
          className={`${sizeClasses[size]} font-black uppercase`}
          style={{
            position: 'absolute',
            top: '3px',
            left: '3px',
            color: '#1e40af', // darker blue shadow
            zIndex: 0,
            ...graffitiStyle,
            opacity: 0.8
          }}
        >
          <div className="leading-tight">
            <div>KRATOS</div>
            <div className="mt-0.5">SYSTEMS</div>
          </div>
        </div>
        
        {/* Main Layer - Vibrant Blue */}
        <div 
          className={`${sizeClasses[size]} font-black uppercase relative`}
          style={{
            color: '#3b82f6', // vibrant blue
            zIndex: 1,
            ...graffitiStyle
          }}
        >
          <div className="leading-tight">
            <div>KRATOS</div>
            <div className="mt-0.5">SYSTEMS</div>
          </div>
        </div>
      </div>

      {/* Tagline */}
      {showTagline && (
        <p 
          className={`${taglineSizeClasses[size]} mt-2 font-medium ${
            variant === 'dark' ? 'text-gray-300' : 'text-blue-600'
          }`}
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            letterSpacing: '0.01em'
          }}
        >
          You Dream it, We Build it!
        </p>
      )}
    </div>
  );
}

