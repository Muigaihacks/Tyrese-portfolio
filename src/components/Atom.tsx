"use client";

import { useEffect, useState } from "react";

interface AtomProps {
  className?: string;
  size?: number;
  electronColor?: string;
  orbitColor?: string;
  nucleusColor?: string;
}

export default function Atom({ 
  className = "", 
  size = 300,
  electronColor = "#00f0ff",
  orbitColor = "rgba(120, 255, 255, 0.25)",
  nucleusColor = "rgba(255, 255, 255, 0.9)"
}: AtomProps) {
  // We need to handle hydration to match the previous loader's behavior
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Orbit 1 Group - Slow Precession */}
        <g style={{ transformOrigin: "50px 50px", animation: "precession 60s linear infinite" }}>
          <path
            id="orbit1"
            d="M 15,50 a 35,10 0 1,0 70,0 a 35,10 0 1,0 -70,0"
            fill="none"
            stroke={orbitColor}
            strokeWidth="0.3"
            transform="rotate(60 50 50)"
          />
          <circle r="1.5" fill={electronColor} filter="url(#glow)">
            <animateMotion
              dur="2.5s"
              repeatCount="indefinite"
              rotate="auto"
            >
              <mpath href="#orbit1" />
            </animateMotion>
          </circle>
        </g>

        {/* Orbit 2 Group - Slower Precession */}
        <g style={{ transformOrigin: "50px 50px", animation: "precession 50s linear infinite reverse" }}>
          <path
            id="orbit2"
            d="M 12,50 a 38,11 0 1,0 76,0 a 38,11 0 1,0 -76,0"
            fill="none"
            stroke={orbitColor}
            strokeWidth="0.3"
            transform="rotate(120 50 50)"
          />
          <circle r="1.2" fill={electronColor} filter="url(#glow)">
            <animateMotion
              dur="3.5s"
              repeatCount="indefinite"
              rotate="auto"
            >
              <mpath href="#orbit2" />
            </animateMotion>
          </circle>
        </g>

        {/* Orbit 3 Group - Slowest Precession */}
        <g style={{ transformOrigin: "50px 50px", animation: "precession 40s linear infinite" }}>
          <path
            id="orbit3"
            d="M 18,50 a 32,9 0 1,0 64,0 a 32,9 0 1,0 -64,0"
            fill="none"
            stroke={orbitColor}
            strokeWidth="0.3"
            transform="rotate(0 50 50)"
          />
          <circle r="1.8" fill={electronColor} filter="url(#glow)">
            <animateMotion
              dur="5s"
              repeatCount="indefinite"
              rotate="auto"
            >
              <mpath href="#orbit3" />
            </animateMotion>
          </circle>
        </g>

        {/* Nucleus Text - KΣ */}
        <text
          x="50"
          y="51"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={nucleusColor}
          fontSize="6"
          style={{
            fontFamily: 'var(--font-cinzel-decorative), "Cinzel Decorative", serif',
            letterSpacing: '0.1em',
            filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.5))'
          }}
        >
          KΣ
        </text>
      </svg>
    </div>
  );
}
