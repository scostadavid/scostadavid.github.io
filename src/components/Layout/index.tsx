import React, {useEffect, useState} from "react"
import {Header} from "../Header"
import {Footer} from "../Footer"
import "../../styles/global.css"

export const Layout = ({ children }: any) => {
  const [theme, setTheme] = useState<string>('dark');

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
    <div className="bg-background min-h-screen">
      <Header theme={theme} toggleTheme={toggleTheme}/>
      <main className="">
      {children}
      </main>
      <Footer/>
    </div>
  )
}

