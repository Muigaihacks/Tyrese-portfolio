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

  // Decorative style with Cinzel Decorative font to match invoice
  const decorativeStyle = {
    fontFamily: 'var(--font-cinzel-decorative), "Cinzel Decorative", serif',
    fontWeight: 400,
    letterSpacing: '0.05em',
    transform: 'scaleY(1.1)', // Slight vertical stretch for elegance
    textShadow: '4px 4px 0px rgba(30, 64, 175, 0.3), 2px 2px 0px rgba(0, 0, 0, 0.2), 1px 1px 2px rgba(0, 0, 0, 0.1)',
    WebkitTextStroke: '0.8px rgba(30, 64, 175, 0.4)', // Adds blue outline effect
    filter: 'drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.1))',
  };

  return (
    <div className={`flex flex-col ${className}`}>
      {/* Logo Container with 3D Effect */}
      <div className="relative inline-block">
        {/* Shadow Layer - Darker Blue (offset behind) - Subtle for readability */}
        <div 
          className={`${sizeClasses[size]} font-black uppercase`}
          style={{
            position: 'absolute',
            top: '1px',
            left: '1px',
            color: '#1e40af', // darker blue shadow
            zIndex: 0,
            ...decorativeStyle,
            opacity: 0.3, // Much more subtle shadow
            textShadow: 'none', // Remove text shadow from shadow layer
            WebkitTextStroke: 'none', // Remove stroke from shadow layer
            filter: 'none' // Remove filter from shadow layer
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
            ...decorativeStyle,
            textShadow: '1px 1px 2px rgba(30, 64, 175, 0.2)', // Lighter, more subtle shadow
            WebkitTextStroke: '0.3px rgba(30, 64, 175, 0.2)', // Lighter outline
            filter: 'drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.05))', // Subtle drop shadow
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

