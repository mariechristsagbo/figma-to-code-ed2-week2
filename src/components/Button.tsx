import React from 'react';

interface ButtonProps {
  children: React.ReactNode; 
  onClick?: () => void; 
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button 
      className='px-8 py-3 rounded-full transition-colors text-b-black border border-b-black hover:bg-b-black hover:text-white'
      onClick={onClick}
    >
      {children}
    </button>
  );
}
