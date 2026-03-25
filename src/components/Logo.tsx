import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 140" className="w-full h-full fill-current">
        {/* Spade Shape */}
        <path d="M50 10 C20 50 5 80 5 100 C5 125 25 140 50 140 C75 140 95 125 95 100 C95 80 80 50 50 10 Z" />
        {/* The '2' inside */}
        <text 
          x="50" 
          y="105" 
          textAnchor="middle" 
          className="fill-white font-bold text-[60px]"
          style={{ fontFamily: 'serif' }}
        >
          2
        </text>
      </svg>
    </div>
  );
};
