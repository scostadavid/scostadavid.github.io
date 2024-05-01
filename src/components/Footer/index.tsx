import React from 'react';
import { H2 } from '../Typography';

export const Footer = (): JSX.Element => {
  return (
    <footer className="text-slate-200  bg-[#fff]">
      <div className="max-w-xl mx-auto p-4">
        <a className="text-black" href={'https://github.com/scostadavid'} target={'_blank'} rel={'noreferrer noopener'}>
          &copy; 2024{' - '}scostadavid
        </a>
      </div>
    </footer>
  )
}