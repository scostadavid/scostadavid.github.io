import React from 'react';

export const Button = ({children, onClick}: {children: JSX.Element | string, onClick?: any}) => {
  return (
    <button
      className=" bg-cta hover:bg-cta-hover text-white font-bold py-3 px-4 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
}