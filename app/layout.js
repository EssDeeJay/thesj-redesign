"use client";

import { ThemeProvider } from 'next-themes'
import Lines from '@/components/Lines';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';
import './globals.css'


export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body className={`dark:bg-black`}>
        <ThemeProvider enableSystem={false} attribute='class' defaultTheme='light'>
          <Lines />
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
