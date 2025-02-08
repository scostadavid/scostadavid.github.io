import React, {useEffect, useState} from "react"
import {Header} from "./header"
import {Footer} from "./footer";
import "../styles/global.css"

export const Layout = ({ children }: any) => {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "dark";
    setTheme(storedTheme);
    document.body.classList.remove("light", "dark");
    document.body.classList.add(storedTheme);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const toggleTheme = (selectedTheme: string) => {
    setTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
    document.body.classList.remove("light", "dark");
    document.body.classList.add(selectedTheme);
  };  

  return (
    <div className={`bg-background min-h-screen ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
