import React from 'react';
import { H2 } from '../Typography';

export const Footer = (): JSX.Element => {
  return (
    <footer className="">
      <div className="max-w-xl mx-auto px-8 pt-8 pb-8">
        <a className="text-content" href={'https://github.com/scostadavid'} target={'_blank'} rel={'noreferrer noopener'}>
          &copy; 2024 scostadavid. All rights reserved.
        </a>
      </div>
    </footer>
  )
}