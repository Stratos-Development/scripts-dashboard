"use client";
import './css/style.css'
import React, { useState, useEffect } from 'react';

import { Inter, Architects_Daughter } from 'next/font/google'
import Header from '@/components/ui/header'
import Loader from '@/components/loader';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export default function RootLayout({
  children
}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => { setLoading(false) }, 300)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function Loaded() {
    return (
      <>
        <Header />
        {children}
      </>
    )
  }
  return (
    <html lang="en"  >
      <title>Stratos Tech</title>
      <body className={`${inter.variable} ${architects_daughter.variable} [&::-webkit-scrollbar]:[width:12px] [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-purple-600 [&::-webkit-scrollbar-track]:bg-gray-900 [&::-webkit-scrollbar-track]:rounded-xl font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden" >
          {loading ? <Loader /> : <Loaded />}
        </div>
      </body>
    </html>
  )
}
