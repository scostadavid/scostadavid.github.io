import classNames from 'classnames';
import React from 'react';

export const Button = ({className, children, onClick}: {className?: string, children: JSX.Element | string, onClick?: any}) => {
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