import React from 'react';

interface GlowButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function GlowButton({ text, onClick, className = "" }: GlowButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        /* Prevent text from wrapping to a new line */
        whitespace-nowrap
        
        
        w-fit px-4 py-2
        flex justify-center items-center 
        
      
        rounded-[14px] 
        font-['Sora'] text-sm font-semibold
        
        /* Base Colors */
        bg-white text-black border-[0.5px] border-transparent
        
        /* Animation & Transition */
        transition-all duration-300 ease-in-out transform
        
        /* Interactions */
        hover:scale-105
        hover:shadow-[0_0_15px_rgba(255,255,255,0.7)]
        hover:border-white
        
        /* Active state for mobile feedback */
        active:scale-95
        
        ${className}
      `}
    >
      {text}
    </button>
  );
}