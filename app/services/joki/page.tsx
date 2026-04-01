import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { FaArrowLeft, FaCode, FaBug, FaServer, FaCircleCheck, FaWhatsapp } from 'react-icons/fa6';

export default async function JokiPage() {
  // Ambil data dari database MySQL
  const jokiServices = await prisma.joki.findMany({
    orderBy: { createdAt: 'desc' }
  });

  // Fungsi helper untuk menentukan icon berdasarkan data (opsional)
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaBug': return <FaBug />;
      case 'FaServer': return <FaServer />;
      default: return <FaCode />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <Link href="/" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-purple-600 mb-6 transition-colors">
            <FaArrowLeft className="mr-2" /> Kembali ke Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 text-purple-600 rounded-2xl flex items-center justify-center text-2xl">
              <FaCode />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Layanan <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Joki & Cloud</span>
            </h1>
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {jokiServices.map((service) => (
            <div key={service.id} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/50 text-purple-600 rounded-2xl flex items-center justify-center text-2xl mb-6">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-6">{service.description}</p>
              
              <ul className="space-y-2 mb-8 text-sm text-slate-600 dark:text-slate-400">
                {(service.features as string[]).map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCircleCheck className="text-green-500" /> {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {jokiServices.length === 0 && (
             <div className="col-span-full py-20 text-center text-slate-500">Belum ada layanan joki yang tersedia.</div>
          )}
        </div>

        {/* CTA */}
        <div className="bg-purple-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-br from-purple-600/50 to-pink-500/30"></div>
           <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-white mb-4">Butuh Bantuan Mendesak?</h2>
              <a href="https://wa.me/6287859017087" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-900 rounded-xl font-bold hover:bg-slate-100 transition-colors">
                <FaWhatsapp className="text-green-500 text-xl" /> Chat WhatsApp Sekarang
              </a>
           </div>
        </div>
      </div>
    </div>
  );
}