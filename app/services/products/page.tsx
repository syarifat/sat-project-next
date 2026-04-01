import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { FaArrowLeft, FaLaptopCode, FaGlobe, FaWhatsapp, FaCircleCheck, FaCode, FaLayerGroup } from 'react-icons/fa6';

export default async function ProductsPage() {
  // Mengambil data produk dari database MySQL
  const products = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section (Style Sama dengan Joki/Network) */}
        <div className="mb-16">
          <Link href="/" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-blue-600 mb-6 transition-colors">
            <FaArrowLeft className="mr-2" /> Kembali ke Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl">
              <FaLaptopCode />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Produk <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Digital & Assets</span>
            </h1>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mt-4">
            Katalog source code premium, sistem IoT, dan aplikasi siap pakai untuk mempercepat pengembangan proyek IT Anda.
          </p>
        </div>

        {/* Dynamic Grid (Style Sama dengan Joki/Network) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map((product) => {
            // Parsing tech_stack JSON
            const techStack = Array.isArray(product.tech_stack) 
              ? product.tech_stack 
              : typeof product.tech_stack === 'string' ? JSON.parse(product.tech_stack) : [];

            return (
              <div key={product.id} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex flex-col">
                {/* Background Decor (Style Sama dengan Joki/Network) */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
                
                {/* Icon/Thumbnail Area */}
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-6">
                  {product.image ? (
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-2xl" />
                  ) : (
                    <FaCode />
                  )}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                
                <div className="mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-500 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-md">
                        {product.category}
                    </span>
                </div>

                <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                {/* Tech Stack List (Menggunakan FaCircleCheck agar seragam) */}
                <ul className="space-y-2 mb-8 text-sm text-slate-600 dark:text-slate-400 mt-auto">
                  {techStack.slice(0, 4).map((tech: string, idx: number) => (
                    <li key={idx} className="flex items-center gap-2">
                      <FaCircleCheck className="text-green-500" /> {tech}
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {product.demo_url && (
                    <a href={product.demo_url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all">
                      <FaGlobe /> Demo
                    </a>
                  )}
                  <a href={`https://wa.me/6287859017087?text=Halo%20SAT%20Project,%20saya%20tertarik%20dengan%20produk%20${product.name}`} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white text-xs font-bold rounded-xl hover:bg-blue-700 transition-all ${!product.demo_url && 'col-span-2'}`}>
                    <FaWhatsapp /> Order
                  </a>
                </div>
              </div>
            );
          })}

          {products.length === 0 && (
             <div className="col-span-full py-20 text-center text-slate-500">Belum ada produk digital yang tersedia.</div>
          )}
        </div>

        {/* CTA Section (Style Sama dengan Joki/Network) */}
        <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-500/20"></div>
           <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-white mb-4">Ingin Custom Project?</h2>
              <p className="text-slate-300 mb-8 max-w-xl mx-auto">Jika produk di atas belum sesuai dengan kebutuhan Anda, kami siap membuatkan sistem khusus (custom) sesuai permintaan.</p>
              <a href="https://wa.me/6287859017087" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/30">
                <FaWhatsapp className="text-xl" /> Konsultasi Custom Project
              </a>
           </div>
        </div>

      </div>
    </div>
  );
}