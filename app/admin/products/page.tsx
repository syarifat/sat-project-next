import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { FaPlus, FaImage, FaGlobe } from 'react-icons/fa6';
import ProductActions from './ProductActions';

export default async function AdminProductsPage() {
  const products = await prisma.project.findMany({ orderBy: { createdAt: 'desc' } });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Kelola Produk</h1>
        <Link href="/admin/products/create" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl font-bold flex items-center gap-2 transition-colors shadow-lg shadow-blue-500/30">
          <FaPlus /> Tambah Produk
        </Link>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          {/* PERINGATAN: Jangan tambahkan komentar HTML di dalam tag table/tr/thead untuk mencegah Hydration Error */}
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                <th className="p-4 font-semibold text-sm text-slate-600 dark:text-slate-300">Info Produk</th>
                <th className="p-4 font-semibold text-sm text-slate-600 dark:text-slate-300">Tech Stack</th>
                <th className="p-4 font-semibold text-sm text-slate-600 dark:text-slate-300 text-center">Demo</th>
                <th className="p-4 font-semibold text-sm text-slate-600 dark:text-slate-300 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => {
                const techStack = Array.isArray(p.tech_stack) ? p.tech_stack : typeof p.tech_stack === 'string' ? JSON.parse(p.tech_stack) : [];
                return (
                  <tr key={p.id} className="border-b border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-4">
                        {p.image ? (
                          <img src={p.image} alt={p.name} className="w-12 h-12 rounded-lg object-cover border border-slate-200 dark:border-slate-700" />
                        ) : (
                          <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400">
                            <FaImage className="text-xl" />
                          </div>
                        )}
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white">{p.name}</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{p.category}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1">
                        {techStack.map((tech: string, idx: number) => (
                          <span key={idx} className="text-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-1 rounded-md text-slate-600 dark:text-slate-400">{tech}</span>
                        ))}
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      {p.demo_url ? (
                        <a href={p.demo_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                          <FaGlobe /> Link Demo
                        </a>
                      ) : (
                        <span className="text-xs text-slate-400">-</span>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center">
                        <ProductActions id={p.id} />
                      </div>
                    </td>
                  </tr>
                );
              })}
              {products.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-slate-500 dark:text-slate-400">Belum ada data produk. Silakan tambahkan.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}