import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { FaPlus, FaNetworkWired } from 'react-icons/fa6';
import NetworkActions from './NetworkActions';

export default async function AdminNetworkPage() {
  const networks = await prisma.network.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Kelola Jasa Jaringan</h1>
        <Link href="/admin/network/create" className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-colors shadow-lg shadow-cyan-500/30">
          <FaPlus /> Tambah Layanan
        </Link>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
              <th className="p-4 font-semibold text-sm text-slate-600 dark:text-slate-300">Layanan Jaringan</th>
              <th className="p-4 font-semibold text-sm text-slate-600 dark:text-slate-300">Fitur</th>
              <th className="p-4 font-semibold text-sm text-slate-600 dark:text-slate-300 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {networks.map((n) => (
              <tr key={n.id} className="border-b border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 rounded-lg flex items-center justify-center">
                      <FaNetworkWired />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">{n.title}</div>
                      <div className="text-xs text-slate-500 truncate max-w-[200px]">{n.description}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-1">
                    {(n.features as string[]).map((feat, idx) => (
                      <span key={idx} className="text-[10px] bg-cyan-50 dark:bg-cyan-900/20 text-cyan-600 px-2 py-1 rounded-md border border-cyan-100 dark:border-cyan-800">
                        {feat}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex justify-center">
                    <NetworkActions id={n.id} />
                  </div>
                </td>
              </tr>
            ))}
            {networks.length === 0 && (
              <tr>
                <td colSpan={3} className="p-8 text-center text-slate-500">Belum ada layanan jaringan.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}