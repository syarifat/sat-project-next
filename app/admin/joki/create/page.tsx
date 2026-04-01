'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';

export default function CreateJokiPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ title: '', description: '', icon: 'FaCode', features: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch('/api/joki', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) { router.push('/admin/joki'); router.refresh(); }
    else { alert("Gagal!"); setIsLoading(false); }
  };

  return (
    <div className="max-w-2xl">
      <Link href="/admin/joki" className="inline-flex items-center gap-2 text-slate-500 mb-6"><FaArrowLeft /> Kembali</Link>
      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Tambah Joki Baru</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input required placeholder="Judul Layanan" className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white" onChange={e => setFormData({...formData, title: e.target.value})} />
          <textarea required placeholder="Deskripsi" className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white h-24" onChange={e => setFormData({...formData, description: e.target.value})}></textarea>
          <input required placeholder="Fitur (Pisahkan dengan koma)" className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white" onChange={e => setFormData({...formData, features: e.target.value})} />
          <button type="submit" disabled={isLoading} className="w-full bg-purple-600 text-white py-3.5 rounded-xl font-bold">{isLoading ? 'Menyimpan...' : 'Simpan Layanan'}</button>
        </form>
      </div>
    </div>
  );
}