'use client'; // Wajib karena ada interaksi klik (useState)

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon, FaBars, FaXmark, FaBoxOpen, FaCode, FaNetworkWired, FaChevronDown } from 'react-icons/fa6';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Mencegah hydration mismatch error untuk dark mode
  useEffect(() => setMounted(true), []);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <nav className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 fixed w-full z-50 top-0 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            {/* Ganti src dengan path logo asli Anda jika ada di folder public */}
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">S</div>
            <span className="font-bold text-2xl tracking-tight text-slate-900 dark:text-white">
              SAT <span className="text-blue-600 dark:text-blue-500">Project</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={`text-sm font-bold transition-colors ${pathname === '/' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'}`}>
              Home
            </Link>
            
            {/* Dropdown Layanan */}
            <div className="relative group h-full flex items-center">
              <button className="flex items-center gap-1 text-sm font-bold text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors py-2 focus:outline-none">
                Layanan <FaChevronDown className="text-[10px] ml-1 transition-transform group-hover:rotate-180" />
              </button>
              
              <div className="absolute left-1/2 -translate-x-1/2 top-[70px] w-64 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 p-2 z-50">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-slate-800 border-t border-l border-slate-100 dark:border-slate-700 transform rotate-45"></div>
                
                <div className="relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden">
                  <Link href="/services/products" className="flex items-center gap-3 px-4 py-3 hover:bg-blue-50 dark:hover:bg-slate-700/50 transition-colors group/item">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                      <FaBoxOpen className="text-xs" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Produk Digital</h4>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">Source code & IoT</p>
                    </div>
                  </Link>
                  <Link href="/services/joki" className="flex items-center gap-3 px-4 py-3 hover:bg-purple-50 dark:hover:bg-slate-700/50 transition-colors group/item">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                      <FaCode className="text-xs" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Joki Coding</h4>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">Tugas & Skripsi</p>
                    </div>
                  </Link>
                  <Link href="/services/network" className="flex items-center gap-3 px-4 py-3 hover:bg-cyan-50 dark:hover:bg-slate-700/50 transition-colors group/item">
                    <div className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                      <FaNetworkWired className="text-xs" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Jasa Jaringan</h4>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">MikroTik & CCTV</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Dark Mode Toggle Desktop */}
            {mounted && (
              <button onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')} className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center justify-center focus:outline-none">
                {currentTheme === 'dark' ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            {mounted && (
              <button onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')} className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 flex items-center justify-center">
                {currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
              </button>
            )}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 focus:outline-none p-1">
              {isMobileMenuOpen ? <FaXmark className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 rounded-lg text-base font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-blue-600">Home</Link>
            <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Layanan Kami</div>
            <Link href="/services/products" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800">
              <FaBoxOpen className="text-blue-500 w-5" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Produk Digital</span>
            </Link>
            <Link href="/services/joki" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-purple-50 dark:hover:bg-slate-800">
              <FaCode className="text-purple-500 w-5" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Joki Coding</span>
            </Link>
            <Link href="/services/network" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-cyan-50 dark:hover:bg-slate-800">
              <FaNetworkWired className="text-cyan-500 w-5" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Jasa Jaringan</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}