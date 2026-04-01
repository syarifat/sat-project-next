'use client';
import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';

export default function EditJokiPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [formData, setFormData] = useState({ title: '', description: '', icon: '', features: '' });

  useEffect(() => {
    fetch(`/api/joki/${id}`).then(res => res.json()).then(data => {
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
    const res = await fetch(`/api/joki/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) { router.push('/admin/joki'); router.refresh(); }
    else { alert("Gagal!"); setIsLoading(false); }
  };

  if (isFetching) return <div className="p-8 text-center animate-pulse">Memuat...</div>;

  return (
    <div className="max-w-2xl">
      <Link href="/admin/joki" className="inline-flex items-center gap-2 text-slate-500 mb-6"><FaArrowLeft /> Batal</Link>
      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Edit Layanan Joki</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input required value={formData.title} className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white" onChange={e => setFormData({...formData, title: e.target.value})} />
          <textarea required value={formData.description} className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white h-24" onChange={e => setFormData({...formData, description: e.target.value})}></textarea>
          <input required value={formData.features} className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:border-slate-700 dark:text-white" onChange={e => setFormData({...formData, features: e.target.value})} />
          <button type="submit" disabled={isLoading} className="w-full bg-purple-600 text-white py-3.5 rounded-xl font-bold">{isLoading ? 'Menyimpan...' : 'Simpan Perubahan'}</button>
        </form>
      </div>
    </div>
  );
}