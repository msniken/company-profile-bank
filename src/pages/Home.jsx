import { ShieldCheck, Smartphone, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const services = [
    {
      icon: <Smartphone className="h-8 w-8 text-blue-900" />,
      title: 'Mobile Banking Modern',
      desc: 'Transaksi cepat, transfer gratis antarbank, dan pembayaran QRIS dalam satu genggaman.',
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-900" />,
      title: 'Kredit Usaha & KPR',
      desc: 'Bunga kompetitif dengan proses persetujuan transparan untuk wujudkan bisnis dan rumah impian.',
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-blue-900" />,
      title: 'Keamanan Berlapis',
      desc: 'Dilindungi enkripsi standar perbankan internasional serta dijamin oleh LPS.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white py-20 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold text-amber-300">
              Solusi Finansial Masa Depan
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Kelola Keuangan Lebih Cerdas Bersama <span className="text-amber-400">Nusantara Bank</span>
            </h1>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Nikmati kemudahan menabung, berinvestasi, dan mengembangkan usaha dengan layanan digital yang aman dan tanpa ribet.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="flex items-center gap-2 rounded-lg bg-amber-400 px-6 py-3 font-semibold text-blue-950 hover:bg-amber-300 transition"
              >
                Mulai Sekarang <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="rounded-lg border border-white/30 px-6 py-3 font-semibold hover:bg-white/10 transition"
              >
                Pelajari Profil Kami
              </Link>
            </div>
          </div>

          {/* Card Ilustrasi */}
          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-8 border border-white/20 shadow-2xl">
            <p className="text-xs uppercase tracking-widest text-amber-300">Nusantara Priority Card</p>
            <p className="mt-6 text-2xl font-mono tracking-widest">4532 •••• •••• 8890</p>
            <div className="mt-8 flex justify-between items-end">
              <div>
                <p className="text-xs text-gray-400">Pemegang Kartu</p>
                <p className="font-semibold">NASABAH PRIORITAS</p>
              </div>
              <span className="text-lg font-bold text-amber-400">VISA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan Unggulan */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-950">Layanan Perbankan Unggulan</h2>
            <p className="mt-2 text-gray-600">Dirancang untuk memenuhi setiap kebutuhan transaksi harian hingga rencana jangka panjang Anda.</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map((item, idx) => (
              <div key={idx} className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="inline-flex rounded-lg bg-amber-400/20 p-3">{item.icon}</div>
                <h3 className="mt-4 text-xl font-bold text-blue-950">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}