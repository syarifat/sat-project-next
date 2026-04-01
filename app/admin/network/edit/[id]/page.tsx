'use client';
import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';

export default function EditNetworkPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [formData, setFormData] = useState({ title: '', description: '', icon: '', features: '' });

  useEffect(() => {
    fetch(`/api/network/${id}`).then(res => res.json()).then(data => {
      setFormData({
        title: data.title,
        description: data.description,
        icon: data.icon,
        features: Array.isArray(data.features) ? data.features.join(', ') : ''
      });
      setIsFetching(false);
    });
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch(`/api/network/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) { router.push('/admin/network'); router.refresh(); }
    else { alert("Gagal update!"); setIsLoading(false); }
  };

  if (isFetching) return <div className="p-8 text-center animate-pulse text-slate-500">Memuat data jaringan...</div>;

  return (
    <div className="max-w-2xl">
      <Link href="/admin/network" className="inline-flex items-center gap-2 text-slate-500 mb-6 font-medium"><FaArrowLeft /> Batal Edit</Link>
      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Edit Jasa Jaringan</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input required value={formData.title} className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-cyan-500" onChange={e => setFormData({...formData, title: e.target.value})} />
          <textarea required value={formData.description} className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white h-24 outline-none focus:ring-2 focus:ring-cyan-500 resize-none" onChange={e => setFormData({...formData, description: e.target.value})}></textarea>
          <input required value={formData.features} className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-cyan-500" onChange={e => setFormData({...formData, features: e.target.value})} />
          <button type="submit" disabled={isLoading} className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-cyan-500/30">
            {isLoading ? 'Menyimpan Perubahan...' : 'Simpan Perubahan'}
          </button>
        </form>
      </div>
    </div>
  );
}