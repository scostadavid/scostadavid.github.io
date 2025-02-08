import classNames from 'classnames';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: any;
}

export const Button = ({className, children, onClick}: ButtonProps) => {
  return (
    <button
      className={
        classNames(
          "bg-cta text-white font-bold rounded",
          "py-2 px-4 rounded",
          className
        )
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
}