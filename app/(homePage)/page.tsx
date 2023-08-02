"use client";
import { useState, useEffect } from "react";
import NavBar from "../components/Navbar";
import HeaderMain from "../components/HeaderMain";
import About from "../components/About";
import Skills from "../components/Skills";
import Profession from "../components/Profession";

export default function Home() {
  const [theme, setTheme] = useState<string | null>("light");

  useEffect(() => {
    const currentTheme = localStorage.getItem("currentTheme");
    setTheme(currentTheme);
  }, [theme]);

  return (
    <>
      <NavBar />
      <HeaderMain />
      <About />
      <Skills />
      <Profession />
    </>
  );
}
