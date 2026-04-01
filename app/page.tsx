import Link from 'next/link';
import { FaWhatsapp, FaLaptopCode, FaCode, FaNetworkWired, FaCheck, FaBolt, FaHeadset } from 'react-icons/fa6';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 text-center lg:pt-24 relative z-10">
          <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wide mb-6 border border-blue-100 dark:border-blue-800">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 animate-pulse"></span>
            Partner IT Terpercaya
          </span>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
            Solusi IT Lengkap <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Dalam Satu Pintu</span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500 dark:text-slate-400 leading-relaxed">
            Dari pembuatan aplikasi profesional, bantuan tugas coding (Joki), setup infrastruktur server, hingga instalasi jaringan. SAT Project hadir untuk menyelesaikan masalah digital Anda.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#services" className="px-8 py-3.5 rounded-xl bg-slate-900 dark:bg-blue-600 text-white font-bold hover:bg-slate-800 dark:hover:bg-blue-700 transition-all shadow-lg shadow-slate-900/30 dark:shadow-blue-600/30">
              Jelajahi Layanan
            </a>
            <a href="https://wa.me/6287859017087" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
              <FaWhatsapp className="text-green-500 text-xl" /> Hubungi Kami
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Layanan Unggulan</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Pilih kategori layanan yang sesuai dengan kebutuhan Anda.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card Produk Digital */}
            <Link href="/services/products" className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer block">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaLaptopCode />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Produk Digital</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                Katalog source code website, sistem IoT, dan aplikasi mobile premium. Aset digital berkualitas untuk dikembangkan sesuai kebutuhan bisnis Anda.
              </p>
              <span className="text-blue-600 dark:text-blue-400 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Lihat Katalog &rarr;
              </span>
            </Link>

            {/* Card Joki Coding */}
            <Link href="/services/joki" className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer block">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaCode />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Joki Coding & Cloud</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                Mitra teknis untuk tugas IT, Skripsi, deployment VPS, dan debugging. Jaminan clean code, privasi terjaga, serta konsultasi gratis.
              </p>
              <span className="text-purple-600 dark:text-purple-400 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Cek Layanan &rarr;
              </span>
            </Link>

            {/* Card Jasa Jaringan */}
            <Link href="/services/network" className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer block">
              <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaNetworkWired />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">Jasa Jaringan</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
                Instalasi CCTV, setting MikroTik, penarikan kabel LAN/Fiber Optic, hingga maintenance server dan IPTV instansi.
              </p>
              <span className="text-cyan-600 dark:text-cyan-400 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Lihat Detail &rarr;
              </span>
            </Link>

          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Keunggulan */}
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">Kenapa Memilih <span className="text-blue-600 dark:text-blue-400">SAT Project?</span></h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center">
                    <FaCheck className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">Profesional & Berpengalaman</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Tim praktisi IT yang ahli di bidang Web, Mobile, IoT, Cloud, dan Network.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center">
                    <FaBolt className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">Pengerjaan Cepat & Tepat</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Setiap proyek dikerjakan sesuai deadline yang disepakati bersama.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <FaHeadset className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">Support & Garansi</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Layanan purna jual responsif, garansi bug fixing, dan maintenance server.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bounce Logo SVG Animasi */}
            <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-8 h-96 flex items-center justify-center relative overflow-hidden transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 opacity-10"></div>
              <div className="text-center relative z-10 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="64 64 384 384" 
                     className="w-32 h-32 mb-6 grayscale opacity-50 dark:invert animate-bounce transition-all duration-500 text-black dark:text-white drop-shadow-xl" fill="none">
                  <path d="M352 144h-96c-44.18 0-80 35.82-80 80 0 44.18 35.82 80 80 80h64c17.67 0 32 14.33 32 32 0 17.67-14.33 32-32 32H160" stroke="currentColor" strokeWidth="64" strokeLinecap="round"/>
                  <path d="M160 368h96c44.18 0 80-35.82 80-80 0-44.18-35.82-80-80-80h-64c-17.67 0-32-14.33-32-32 0-17.67 14.33-32 32-32h160" stroke="currentColor" strokeWidth="64" strokeLinecap="round"/>
                  <circle cx="360" cy="144" r="32" fill="currentColor"/>
                  <circle cx="152" cy="368" r="32" fill="currentColor"/>
                </svg>
                <p className="font-bold text-slate-400 dark:text-slate-500 text-lg">SAT Project Ecosystem</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* CTA Section Akhir */}
      <div className="py-16 px-4 pb-24">
        <div className="max-w-5xl mx-auto bg-slate-900 dark:bg-slate-800 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl transition-colors">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Siap Digitalisasi Bisnis Anda?</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Konsultasikan kebutuhan Anda sekarang. Gratis diskusi untuk menentukan solusi terbaik bagi masalah Anda.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/6287859017087" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/20">
                <FaWhatsapp className="text-xl" /> Chat WhatsApp
              </a>
              <Link href="s" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur text-white border border-white/20 rounded-xl font-bold transition-all">
                Lihat Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}