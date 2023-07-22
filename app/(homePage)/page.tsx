'use client';
import Image from 'next/image'
import Fade from 'react-reveal/Fade';

export default function Home() {
  return (
    <div>
      <h1 className='text-red-900'>Home Page</h1>
      <Fade left>
        <h1 className='text-green-900'>React Reveal</h1>
      </Fade>
    </div>
  )
}
