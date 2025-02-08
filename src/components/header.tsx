import React, { useState } from "react";
import { Link } from "gatsby";
import { Button } from "./ui/button";

export const Header = ({ theme, toggleTheme }: any): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleThemeSelect = (selectedTheme: string) => {
    toggleTheme(selectedTheme);
    setIsMenuOpen(false);
  };

  return (
    <header className="items-center">
      <div className="flex flex-row justify-between max-w-4xl mx-auto px-8 py-8 relative">
        <Link to="/" className="text-cta font-bold text-2xl align-middle self-center">
        👨‍💻 {'scostadavid'}
        </Link>

        <div className="relative">
          <Button 
            aria-label="theme-switcher" 
            className="flex border border-neutral-200 dark:border-neutral-800 bg-transparent text-content hover:text-content/100 relative justify-center items-center align-middle w-10 h-10 rounded transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Moon icon for dark mode */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className={`absolute transition-all duration-300 ease-in-out ${
                theme === 'dark' ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
              }`}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>

            {/* Sun icon for light mode */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className={`absolute transition-all duration-300 ease-in-out ${
                theme === 'light' ? 'opacity-100 text-content rotate-0' : 'opacity-0 -rotate-90'
              }`}
              stroke="currentColor"
              strokeWidth="2"y
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
          </Button>

          {/* Menu de temas */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-background border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-lg z-50">
              <div className="p-2 space-y-2">
                <button
                  onClick={() => handleThemeSelect('light')}
                  className="w-full text-content flex items-center gap-2 px-3 py-2 text-sm hover:bg-card rounded-md transition-colors"
                >
                  <span className="w-4 h-4">☀️</span>
                  Light
                </button>
                <button
                  onClick={() => handleThemeSelect('dark')}
                  className="w-full text-content flex items-center gap-2 px-3 py-2 text-sm hover:bg-card rounded-md transition-colors"
                >
                  <span className="w-4 h-4">🌙</span>
                  Dark
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};