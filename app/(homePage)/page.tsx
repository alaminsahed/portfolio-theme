"use client";
import { useState, useEffect } from "react";
import NavBar from "../components/Navbar";
import HeaderMain from "../components/HeaderMain";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Recommendation from "../components/Recommendation";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";

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
      <Experience />
      <Recommendation />
      <Projects />
      {/* <Blogs /> */}
      <Contact />
    </>
  );
}
