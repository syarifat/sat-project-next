'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';

export default function CreateNetworkPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ title: '', description: '', icon: 'FaNetworkWired', features: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch('/api/network', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) { router.push('/admin/network'); router.refresh(); }
    else { alert("Gagal menyimpan!"); setIsLoading(false); }
  };

  return (
    <div className="max-w-2xl">
      <Link href="/admin/network" className="inline-flex items-center gap-2 text-slate-500 mb-6 font-medium transition-colors hover:text-cyan-600">
        <FaArrowLeft /> Kembali ke Tabel
      </Link>
      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Tambah Layanan Jaringan</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-bold mb-1.5 text-slate-700 dark:text-slate-300">Nama Layanan</label>
            <input required placeholder="Contoh: Instalasi Mikrotik" className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-cyan-500" onChange={e => setFormData({...formData, title: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1.5 text-slate-700 dark:text-slate-300">Deskripsi Singkat</label>
            <textarea required placeholder="Jelaskan detail layanan..." className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white h-24 outline-none focus:ring-2 focus:ring-cyan-500 resize-none" onChange={e => setFormData({...formData, description: e.target.value})}></textarea>
          </div>
          <div>
            <label className="block text-sm font-bold mb-1.5 text-slate-700 dark:text-slate-300">Fitur (Pisahkan dengan koma)</label>
            <input required placeholder="Contoh: Bandwidth Management, Hotspot" className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-cyan-500" onChange={e => setFormData({...formData, features: e.target.value})} />
          </div>
          <button type="submit" disabled={isLoading} className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-cyan-500/30">
            {isLoading ? 'Menyimpan...' : 'Simpan Layanan'}
          </button>
        </form>
      </div>
    </div>
  );
}