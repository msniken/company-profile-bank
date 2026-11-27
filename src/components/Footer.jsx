import { Landmark, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 text-xl font-bold text-white">
            <Landmark className="h-6 w-6 text-amber-400" />
            <span>NUSANTARA BANK</span>
          </div>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Mitra perbankan terpercaya untuk pertumbuhan finansial individu dan bisnis Anda di seluruh Indonesia.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Tautan Cepat</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-amber-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-amber-400 transition">Tentang Kami</Link></li>
            <li><Link to="/contact" className="hover:text-amber-400 transition">Hubungi Kami</Link></li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Kantor Pusat</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-amber-400 shrink-0" />
              <span>Jl. Jend. Sudirman Kav. 45, Jakarta</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-amber-400 shrink-0" />
              <span>1500-888 (Call Center 24 Jam)</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-amber-400 shrink-0" />
              <span>halo@nusantarabank.co.id</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} PT Bank Nusantara Tbk. Berizin dan diawasi oleh OJK.
      </div>
    </footer>
  );
}