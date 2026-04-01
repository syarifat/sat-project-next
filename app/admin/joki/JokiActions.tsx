'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaPenToSquare, FaTrash } from 'react-icons/fa6';

export default function JokiActions({ id }: { id: number }) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm('Hapus layanan joki ini?')) return;
    setIsDeleting(true);
    const res = await fetch(`/api/joki/${id}`, { method: 'DELETE' });
    if (res.ok) router.refresh();
    else { alert('Gagal hapus'); setIsDeleting(false); }
  };

  return (
    <div className="flex items-center gap-2">
      <Link href={`/admin/joki/edit/${id}`} className="p-2 bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 rounded-lg hover:bg-yellow-200 transition-colors"><FaPenToSquare /></Link>
      <button onClick={handleDelete} disabled={isDeleting} className="p-2 bg-red-100 text-red-600 dark:bg-red-900/30 rounded-lg hover:bg-red-200 transition-colors disabled:opacity-50"><FaTrash /></button>
    </div>
  );
}