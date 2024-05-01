import React from 'react';

export const Button = ({children}: {children: JSX.Element | string}) => {
  return (
    <button
      className=" border-black border-2 p-4 bg-[#fff] hover:bg-[#fff] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#fff] rounded-md"
    >
      {children}
    </button>
  );
}