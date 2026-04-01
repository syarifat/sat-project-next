import { prisma } from '@/lib/prisma';
import { FaLaptopCode, FaCode, FaNetworkWired } from 'react-icons/fa6';

export default async function AdminDashboard() {
  // Mengambil total data dari tabel-tabel baru
  const totalProducts = await prisma.project.count();
  
  // Sekarang kita hitung langsung dari tabel Joki dan Network (tanpa filter category)
  const totalJoki = await prisma.joki.count();
  const totalNetwork = await prisma.network.count();

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Dashboard</h1>
      <p className="text-slate-500 dark:text-slate-400 mb-8">Selamat datang kembali di Panel Admin SAT Project.</p>

      {/* Statistik Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Card Produk */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
          <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center text-2xl">
            <FaLaptopCode />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Total Produk</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">{totalProducts} Item</p>
          </div>
        </div>

        {/* Card Joki */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
          <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center text-2xl">
            <FaCode />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Layanan Joki</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">{totalJoki} Item</p>
          </div>
        </div>

        {/* Card Jaringan */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4">
          <div className="w-14 h-14 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 dark:text-cyan-400 rounded-xl flex items-center justify-center text-2xl">
            <FaNetworkWired />
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Layanan Jaringan</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">{totalNetwork} Item</p>
          </div>
        </div>

      </div>
    </div>
  );
}