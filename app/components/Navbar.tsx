"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import ThemeChangeBtn from "./ui/ThemeChangeBtn";
import Image from "next/image";
//import Link from 'next/link';
import { cn } from "@/libs/utils";

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);
  const [navColor, setNavColor] = useState(" ");
  const [activeLink, setActiveLink] = useState("");

  const changeNav = () => {
    if (window.scrollY > 0) {
      setNavColor("bg-gray-900");
    } else {
      setNavColor("bg-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const navLists = [
    { name: "Home", link: "header" },
    { name: "About", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "Experience", link: "experience" },
    { name: "Portfolio", link: "portfolio" },
    { name: "Blog", link: "blog" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <nav
      className={cn(
        "border-gray-200 fixed w-full z-20 top-0 left-0",
        `${navColor}`
      )}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link to="/" className="flex items-center">
          <Image src="/images/logo.png" alt="Logo" width={90} height={60} />
        </Link>
        <button
          data-collapse-toggle="#navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setMobileView(!mobileView)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={cn(
            "w-full md:block md:w-auto",
            mobileView ? "block" : "hidden"
          )}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  bg-gray-800 md:bg-transparent border-gray-700">
            {navLists.map((navList, index) => (
              <li key={navList.link}>
                <Link
                  to={navList.link}
                  className={cn(
                    "block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white cursor-pointer relative",
                    activeLink === `${navList.link}` ? "underline" : ""
                  )}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-96}
                  duration={500}
                  exact="true"
                  onSetActive={() => setActiveLink(navList.link)}
                >
                  {navList.name}
                </Link>
              </li>
            ))}
            <li>
              <ThemeChangeBtn />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
