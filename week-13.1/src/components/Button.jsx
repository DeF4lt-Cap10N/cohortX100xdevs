import React from 'react';

const Button = ({ disabled, children, onClick }) => {
  return (
    <button 
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      className={`rounded-2xl text-4xl px-32 py-8 text-white transition 
      ${disabled ? "bg-blue-200 opacity-50 cursor-not-allowed" : "bg-green-400 hover:bg-green-500 cursor-pointer"}`}
    >
      {children}
    </button>
  );
};

export default Button;
