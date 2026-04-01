import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { FaArrowLeft, FaNetworkWired, FaWifi, FaVideo, FaServer, FaCircleCheck, FaWhatsapp } from 'react-icons/fa6';

export default async function NetworkPage() {
  const networkServices = await prisma.network.findMany({
    orderBy: { createdAt: 'desc' }
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaWifi': return <FaWifi />;
      case 'FaVideo': return <FaVideo />;
      case 'FaServer': return <FaServer />;
      default: return <FaNetworkWired />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <Link href="/" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-cyan-600 mb-6 transition-colors">
            <FaArrowLeft className="mr-2" /> Kembali ke Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 rounded-2xl flex items-center justify-center text-2xl">
              <FaNetworkWired />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Jasa <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Jaringan & IT</span>
            </h1>
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {networkServices.map((service) => (
            <div key={service.id} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-14 h-14 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-600 rounded-2xl flex items-center justify-center text-2xl mb-6">
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

          {networkServices.length === 0 && (
             <div className="col-span-full py-20 text-center text-slate-500">Belum ada layanan jaringan yang tersedia.</div>
          )}
        </div>

        {/* CTA */}
        <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-500/20"></div>
           <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-white mb-4">Survey Lokasi Gratis!</h2>
              <a href="https://wa.me/6287859017087" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl font-bold transition-colors shadow-lg shadow-cyan-500/30">
                <FaWhatsapp className="text-xl" /> Hubungi Teknisi Kami
              </a>
           </div>
        </div>
      </div>
    </div>
  );
}