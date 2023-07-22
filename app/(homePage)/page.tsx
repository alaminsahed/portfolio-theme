'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image'
import Fade from 'react-reveal/Fade';
import Menubar from '../components/Navbar';

export default function Home() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentTheme = localStorage.getItem('currentTheme');
    setTheme(currentTheme);
  }, [theme]);

  return (
    <>
      <Menubar />
    </>
  )
}
