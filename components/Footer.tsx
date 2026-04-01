import Link from 'next/link';
import { FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope, FaLocationDot } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-auto pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Kolom 1 & 2: Brand & Deskripsi */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">S</div>
              <span className="font-bold text-xl text-slate-900 dark:text-white">SAT Project</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Partner teknologi terpercaya untuk transformasi digital bisnis, pendidikan, dan infrastruktur jaringan Anda.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                <FaInstagram />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/syarifat" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Kolom 3: Layanan Cepat */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link href="/services/products" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Produk Digital</Link></li>
              <li><Link href="/services/joki" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Joki Coding</Link></li>
              <li><Link href="/services/network" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Instalasi Jaringan</Link></li>
            </ul>
          </div>

          {/* Kolom 4: Kontak */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-3">
                <FaWhatsapp className="text-green-500 mt-0.5 text-base" />
                <span>+62 878-5901-7087</span>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-blue-500 mt-0.5 text-base" />
                <span>syarifahsanit@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FaLocationDot className="text-red-500 mt-0.5 text-base" />
                <span>Tulungagung, Jawa Timur</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-slate-100 dark:border-slate-800 pt-8 text-center">
          <p className="text-slate-400 text-xs">
            &copy; {currentYear} SAT Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}