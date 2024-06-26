import React, {useEffect, useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import {Header} from "../Header"
import {Footer} from "../Footer"
import "../../styles/global.css"

export const Layout = ({ children }: any) => {
  const [theme, setTheme] = useState<string>(() => {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log(userPrefersDark);
    return userPrefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      return;
    }
    localStorage.setItem('theme', theme);
  }, []);

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className="bg-background">
      <Header theme={theme} toggleTheme={toggleTheme}/>
      <main className="h-full">
      {children}
      </main>
      <Footer/>
    </div>
  )
}

