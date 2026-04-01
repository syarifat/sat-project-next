import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer' // <-- IMPORT FOOTER
import { Analytics } from '@vercel/analytics/react'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SAT Project - Solusi Digital Terintegrasi',
  description: 'Partner teknologi terpercaya untuk transformasi digital bisnis, pendidikan, dan infrastruktur jaringan Anda.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${outfit.className} bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 antialiased selection:bg-blue-600 selection:text-white transition-colors duration-300 flex flex-col min-h-screen`}>
        <Providers>
          <Navbar />
          
          <main className="flex-grow pt-20">
            {children}
          </main>
          
          <Footer /> {/* <-- PASANG FOOTER DI SINI */}
        </Providers>
        
        <Analytics />
      </body>
    </html>
  )
}