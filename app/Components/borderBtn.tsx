"use client";

import React from 'react';
import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: 'outline' | 'solid';
}

export default function PrimaryButton({ 
  text, 
  variant = 'outline', 
  className, 
  ...props 
}: ButtonProps) {
  
  const variantStyles = variant === 'outline' 
    ? "border-white bg-transparent text-white hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]" 
    : "border-white bg-white text-black hover:bg-transparent hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]";

  return (
    <button 
      className={cn(
        // Layout: Full width on tiny screens, fit-content on mobile-up
        "flex justify-center items-center w-full sm:w-fit",
        
        // Responsive Spacing: Slimmer on mobile, your spec on desktop
        "px-2 py-2 md:px-6 md:py-2.5",
        
        // Shape & Responsive Border: 2px on mobile, 3.333px on desktop
        "rounded-[33px] border-2 md:border-[3.333px] border-solid",
        
        // Typography: Text scales slightly for better readability
        "font-['McLaren'] text-sm md:text-base font-normal leading-none capitalize",
        
        // Effects & Animation
        "transition-all duration-300 active:scale-95",
        
        variantStyles,
        className
      )}
      {...props}
    >
      {text}
    </button>
  );
}