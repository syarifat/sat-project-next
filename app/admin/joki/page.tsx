import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { FaPlus, FaCode } from 'react-icons/fa6';
import JokiActions from './JokiActions';

export default async function AdminJokiPage() {
  const jokiList = await prisma.joki.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Kelola Joki Coding</h1>
        <Link href="/admin/joki/create" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-colors">
          <FaPlus /> Tambah Layanan
        </Link>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
              <th className="p-4 font-semibold text-sm text-slate-600 dark:text-slate-300">Layanan</th>
              <th className="p-4 font-semibold text-sm text-slate-600 dark:text-slate-300">Fitur</th>
              <th className="p-4 font-semibold text-sm text-slate-600 dark:text-slate-300 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {jokiList.map((j) => (
              <tr key={j.id} className="border-b border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-lg flex items-center justify-center"><FaCode /></div>
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white">{j.title}</div>
                      <div className="text-xs text-slate-500 truncate max-w-[200px]">{j.description}</div>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex flex-wrap gap-1">
                    {(j.features as string[]).map((feat, idx) => (
                      <span key={idx} className="text-[10px] bg-purple-50 dark:bg-purple-900/20 text-purple-600 px-2 py-1 rounded-md border border-purple-100 dark:border-purple-800">{feat}</span>
                    ))}
                  </div>
                </td>
                <td className="p-4 text-center">
                  <div className="flex justify-center"><JokiActions id={j.id} /></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}