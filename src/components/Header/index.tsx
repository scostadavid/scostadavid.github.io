import React from "react";
import { Link } from "gatsby";
import { Button } from "../ui/Button";

export const Header = ({theme, toggleTheme}: any): JSX.Element => {
  return (
    <header className=" items-center">
      <div className="flex flex-row justify-between max-w-xl px-8 pt-8 pb-8 mx-auto">
          <Link to="/" className="text-cta font-bold text-2xl align-middle self-center hover:scale-105">
            {'scostadavid'}
          </Link>

          <Button aria-label="theme-switcher" className="flex bg-cta text-white font-bold rounded rounded bg-transparent hover:bg-transparent relative justify-center items-center align-middle" onClick={toggleTheme}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className={`feather feather-sun absolute transition-all duration-500 ease-in-out ${theme === 'dark' ? 'opacity-100 transform scale-100 rotate-0 text-cta' : 'opacity-0 transform scale-0 rotate-45 text-cta'}`}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className={`feather feather-moon absolute transition-all duration-500 ease-in-out ${theme === 'dark' ? 'opacity-0 transform scale-0 rotate-45 text-cta' : 'opacity-100 transform scale-100 rotate-0 text-cta'}`}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </Button>
      </div>
    </header>
  )
}
