import React from 'react';

interface TequilaLogoProps extends React.SVGProps<SVGSVGElement> {
  variant?: 'gold' | 'dark' | 'light' | 'original';
  showText?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function TequilaLogo({ 
  variant = 'gold', 
  showText = true,
  className = '',
  ...props 
}: TequilaLogoProps) {
  // Select fill and stroke colors based on active aesthetic theme
  const getColors = () => {
    switch (variant) {
      case 'dark':
        return {
          primary: '#1c1b19',
          accent: '#a3845b',
          bg: '#faf8f5',
          text: '#1c1b19'
        };
      case 'light':
        return {
          primary: '#ffffff',
          accent: '#dfcbb5',
          bg: 'transparent',
          text: '#ffffff'
        };
      case 'original':
        return {
          primary: '#000000',
          accent: '#000000',
          bg: '#ffffff',
          text: '#000000'
        };
      case 'gold':
      default:
        return {
          primary: '#8c6d3f', // Rich amber gold
          accent: '#c5a880',  // Warm gold Champagne
          bg: 'transparent',
          text: '#3a352a'
        };
    }
  };

  const colors = getColors();

  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-full max-h-full"
        {...props}
      >
        {/* Background glow circle */}
        <circle cx="100" cy="100" r="90" fill="transparent" />

        {/* 1. Outer Concentric Rings */}
        <circle cx="100" cy="100" r="80" stroke={colors.primary} strokeWidth="1.5" />
        <circle cx="100" cy="100" r="74" stroke={colors.accent} strokeWidth="0.8" strokeDasharray="4 2" />
        <circle cx="100" cy="100" r="68" stroke={colors.primary} strokeWidth="1.2" />

        {/* 2. Inner Eagle Crest Details (The "Caracter de Campo" Mesoamerican Eagle Emblem) */}
        {/* Symmetrical Left Eagle */}
        <path
          d="M 100 80 
             C 88 80, 80 84, 76 92
             C 74 96, 75 102, 79 105
             C 83 108, 88 106, 92 101
             C 94 98, 95 94, 95 90 
             Z"
          fill={colors.accent}
          opacity="0.25"
        />
        
        {/* Symmetrical Right Eagle */}
        <path
          d="M 100 80 
             C 112 80, 120 84, 124 92
             C 126 96, 125 102, 121 105
             C 117 108, 112 106, 108 101
             C 106 98, 105 94, 105 90 
             Z"
          fill={colors.accent}
          opacity="0.25"
        />

        {/* Symmetrical Profile Eagles with Sharp Line Details */}
        {/* Left Eagle Profile Silhouette & Beak */}
        <path
          d="M 100 90 
             C 90 90, 80 92, 75 99 
             C 73 102, 73 106, 76 108 
             C 79 110, 84 107, 85 104 
             C 86 102, 85 101, 84 100 
             C 83 99, 83 98, 85 97 
             C 88 95, 93 96, 96 101 
             C 98 104, 100 110, 100 115"
          stroke={colors.primary}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Right Eagle Profile Silhouette & Beak */}
        <path
          d="M 100 90 
             C 110 90, 120 92, 125 99 
             C 127 102, 127 106, 124 108 
             C 121 110, 116 107, 115 104 
             C 114 102, 115 101, 116 100 
             C 117 99, 117 98, 115 97 
             C 112 95, 107 96, 104 101 
             C 102 104, 100 110, 100 115"
          stroke={colors.primary}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 3. Symmetrical Geometric Wings (Stretched outwards in a classic circular emblem grid) */}
        {/* Left Wing Feathers (Art Deco style) */}
        <path
          d="M 75 99 
             C 58 92, 45 105, 38 122 
             M 77 103 
             C 61 98, 49 112, 43 130
             M 79 107 
             C 65 104, 55 120, 50 138
             M 81 111 
             C 70 110, 61 126, 58 144
             M 83 115 
             C 75 116, 68 132, 66 148"
          stroke={colors.primary}
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Right Wing Feathers (Art Deco style) */}
        <path
          d="M 125 99 
             C 142 92, 155 105, 162 122 
             M 123 103 
             C 139 98, 151 112, 157 130 
             M 121 107 
             C 135 104, 145 120, 150 138 
             M 119 111 
             C 130 110, 139 126, 142 144 
             M 117 115 
             C 125 116, 132 132, 134 148"
          stroke={colors.primary}
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* 4. Luxury Aztec Diamond Pattern & Core Medallion */}
        {/* Outer concentric center diamond */}
        <path
          d="M 100 52 L 115 67 L 100 82 L 85 67 Z"
          stroke={colors.primary}
          strokeWidth="1.5"
          fill="none"
        />
        {/* Inner solid diamond */}
        <path
          d="M 100 58 L 109 67 L 100 76 L 91 67 Z"
          fill={colors.accent}
        />

        {/* Bottom diamond details */}
        <path
          d="M 100 120 L 114 134 L 100 148 L 86 134 Z"
          stroke={colors.primary}
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M 100 125 L 109 134 L 100 143 L 91 134 Z"
          fill={colors.accent}
        />

        {/* Centered diamond dividing the profile eagles */}
        <path
          d="M 100 94 L 104 98 L 100 102 L 96 98 Z"
          fill={colors.primary}
        />
        <path
          d="M 100 106 L 104 110 L 100 114 L 96 110 Z"
          fill={colors.accent}
        />

        {/* Small detail dots and orbits */}
        <circle cx="100" cy="44" r="2" fill={colors.primary} />
        <circle cx="100" cy="156" r="2" fill={colors.primary} />
        <circle cx="44" cy="100" r="2" fill={colors.primary} />
        <circle cx="156" cy="100" r="2" fill={colors.primary} />
      </svg>
      
      {showText && (
        <div className="mt-2 select-none">
          <h2 className="font-serif text-[11px] uppercase tracking-[0.3em] font-medium leading-none mb-1" style={{ color: colors.text }}>
            Tequila
          </h2>
          <div className="h-[0.8px] w-6 bg-brand-gold/40 mx-auto my-1" />
          <p className="font-sans text-[7.5px] uppercase tracking-[0.22em] font-light" style={{ color: colors.accent }}>
            Carácter de Campo
          </p>
        </div>
      )}
    </div>
  );
}
