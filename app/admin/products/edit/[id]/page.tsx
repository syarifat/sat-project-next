'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';

export default function EditProductPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id;
  
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  
  const [formData, setFormData] = useState({ 
    name: '', category: '', description: '', tech_stack: '',
    image: '', demo_url: '', demo_user: '', demo_pass: ''
  });

  useEffect(() => {
    if (!id) return;

    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/projects/${id}`);
        if (res.ok) {
          const data = await res.json();
          let techString = '';
          try {
            if (Array.isArray(data.tech_stack)) techString = data.tech_stack.join(', ');
            else if (typeof data.tech_stack === 'string' && data.tech_stack !== '') techString = JSON.parse(data.tech_stack).join(', ');
          } catch (e) {
            techString = String(data.tech_stack);
          }

          setFormData({
            name: data.name || '',
            category: data.category || '',
            description: data.description || '',
            tech_stack: techString || '',
            image: data.image || '',
            demo_url: data.demo_url || '',
            demo_user: data.demo_user || '',
            demo_pass: data.demo_pass || ''
          });
        }
      } catch (error) {
        console.error("Gagal memuat:", error);
      } finally {
        setIsFetching(false);
      }
    };
    fetchProject();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await fetch(`/api/projects/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push('/admin/products');
      router.refresh();
    } else {
      alert("Gagal menyimpan perubahan.");
      setIsLoading(false);
    }
  };

  if (isFetching) return <div className="p-8 text-center text-slate-500 animate-pulse">Memuat data produk...</div>;

  return (
    <div className="max-w-4xl">
      <Link href="/admin/products" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 mb-6 font-medium transition-colors">
        <FaArrowLeft /> Batal Edit
      </Link>

      <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Edit Produk</h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Kolom Utama */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-bold mb-1.5 text-slate-700 dark:text-slate-300">Nama Produk *</label>
              <input required type="text" value={formData.name} className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" 
                onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>

            <div>
              <label className="block text-sm font-bold mb-1.5 text-slate-700 dark:text-slate-300">Kategori *</label>
              <input required type="text" value={formData.category} className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" 
                onChange={e => setFormData({...formData, category: e.target.value})} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-1.5 text-slate-700 dark:text-slate-300">Tech Stack * (Pisahkan koma)</label>
            <input required type="text" value={formData.tech_stack} className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" 
              onChange={e => setFormData({...formData, tech_stack: e.target.value})} />
          </div>

          <div>
            <label className="block text-sm font-bold mb-1.5 text-slate-700 dark:text-slate-300">Deskripsi Singkat *</label>
            <textarea required value={formData.description} className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white h-24 focus:ring-2 focus:ring-blue-500 outline-none resize-none" 
              onChange={e => setFormData({...formData, description: e.target.value})}></textarea>
          </div>

          {/* Kolom Opsional */}
          <hr className="border-slate-200 dark:border-slate-800 my-6" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Informasi Tambahan (Opsional)</h3>

          <div>
            <label className="block text-sm font-bold mb-1.5 text-slate-700 dark:text-slate-300">URL Gambar (Link)</label>
            <input type="url" value={formData.image} placeholder="https://example.com/image.jpg" className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" 
              onChange={e => setFormData({...formData, image: e.target.value})} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block text-sm font-bold mb-1.5 text-slate-700 dark:text-slate-300">URL Demo</label>
              <input type="url" value={formData.demo_url} placeholder="https://..." className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" 
                onChange={e => setFormData({...formData, demo_url: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1.5 text-slate-700 dark:text-slate-300">User Demo</label>
              <input type="text" value={formData.demo_user} className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" 
                onChange={e => setFormData({...formData, demo_user: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1.5 text-slate-700 dark:text-slate-300">Pass Demo</label>
              <input type="text" value={formData.demo_pass} className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none" 
                onChange={e => setFormData({...formData, demo_pass: e.target.value})} />
            </div>
          </div>

          <button type="submit" disabled={isLoading} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold mt-6 flex justify-center items-center">
            {isLoading ? 'Menyimpan...' : 'Simpan Perubahan'}
          </button>
        </form>
      </div>
    </div>
  );
}