'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaPenToSquare, FaTrash } from 'react-icons/fa6';

export default function ProductActions({ id }: { id: number }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm('Apakah Anda yakin ingin menghapus produk ini?')) return;
    
    setIsDeleting(true);
    const res = await fetch(`/api/projects/${id}`, { method: 'DELETE' });
    
    if (res.ok) {
      router.refresh();
    } else {
      alert('Gagal menghapus produk.');
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Link href={`/admin/products/edit/${id}`} title="Edit" 
        className="p-2 bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-500 rounded-lg hover:bg-yellow-200 dark:hover:bg-yellow-900/50 transition-colors">
        <FaPenToSquare />
      </Link>
      <button onClick={handleDelete} disabled={isDeleting} title="Hapus"
        className="p-2 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-500 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors disabled:opacity-50">
        <FaTrash />
      </button>
    </div>
  );
}