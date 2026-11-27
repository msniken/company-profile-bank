import { Award, Building2, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="py-16 px-6 bg-white">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-950">Tentang Nusantara Bank</h1>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Berdiri sejak tahun 1998, PT Bank Nusantara Tbk berkomitmen menghadirkan layanan perbankan yang inklusif, inovatif, dan berintegritas tinggi bagi seluruh lapisan masyarakat Indonesia.
          </p>
        </div>

        {/* Statistik */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 text-center">
          <div className="rounded-xl bg-blue-950 p-6 text-white">
            <Users className="mx-auto h-8 w-8 text-amber-400" />
            <p className="mt-3 text-3xl font-bold">5 Juta+</p>
            <p className="text-sm text-gray-300">Nasabah Aktif</p>
          </div>
          <div className="rounded-xl bg-blue-950 p-6 text-white">
            <Building2 className="mx-auto h-8 w-8 text-amber-400" />
            <p className="mt-3 text-3xl font-bold">320+</p>
            <p className="text-sm text-gray-300">Kantor Cabang</p>
          </div>
          <div className="rounded-xl bg-blue-950 p-6 text-white">
            <Award className="mx-auto h-8 w-8 text-amber-400" />
            <p className="mt-3 text-3xl font-bold">25+ Tahun</p>
            <p className="text-sm text-gray-300">Pengalaman Perbankan</p>
          </div>
        </div>

        {/* Visi & Misi */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 p-8 bg-gray-50">
            <h2 className="text-2xl font-bold text-blue-950">Visi Kami</h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Menjadi bank digital pilihan utama di Asia Tenggara yang mendorong pertumbuhan ekonomi berkelanjutan dan kesejahteraan nasabah.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 p-8 bg-gray-50">
            <h2 className="text-2xl font-bold text-blue-950">Misi Kami</h2>
            <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
              <li>Menyediakan layanan perbankan yang cepat, aman, dan mudah diakses.</li>
              <li>Mendukung pertumbuhan UMKM melalui pembiayaan yang terjangkau.</li>
              <li>Menerapkan tata kelola perusahaan yang transparan dan profesional.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}