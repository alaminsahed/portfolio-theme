import './globals.css'
import 'animate.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Md.Al-Amin Sahed',
  description: 'A personal website for Md.Al-Amin Sahed as a React Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true} >{children}</body>
    </html>
  )
}
