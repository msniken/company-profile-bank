import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 px-6 bg-gray-50">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-950">Hubungi Kami</h1>
          <p className="mt-3 text-gray-600">
            Punya pertanyaan seputar produk tabungan, kredit, atau layanan digital? Tim kami siap membantu Anda.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Info Kontak */}
          <div className="rounded-2xl bg-blue-950 p-8 text-white space-y-6">
            <h2 className="text-2xl font-bold">Informasi Layanan</h2>
            <p className="text-sm text-gray-300">
              Layanan Halo Nusantara beroperasi 24 jam setiap hari untuk kebutuhan darurat maupun konsultasi produk.
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                <span>Menara Nusantara, Jl. Jend. Sudirman Kav. 45, Jakarta Selatan 12930</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-400 shrink-0" />
                <span>1500-888 / (021) 555-0199</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-400 shrink-0" />
                <span>halo@nusantarabank.co.id</span>
              </div>
            </div>
          </div>

          {/* Form Pesan */}
          <div className="rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <div className="rounded-full bg-green-100 p-3 text-green-700 font-bold text-xl">✓</div>
                <h3 className="mt-4 text-xl font-bold text-blue-950">Pesan Terkirim!</h3>
                <p className="mt-2 text-sm text-gray-600">Terima kasih telah menghubungi Nusantara Bank. Tim kami akan segera merespons Anda.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-blue-900 underline"
                >
                  Kirim pesan lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
                  <input
                    type="text"
                    required
                    placeholder="Masukkan nama Anda"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-blue-900 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="nama@email.com"
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-blue-900 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Pesan / Kebutuhan</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Tuliskan pesan atau pertanyaan Anda..."
                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-blue-900 focus:outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-950 py-3 text-sm font-semibold text-white hover:bg-blue-900 transition"
                >
                  <Send className="h-4 w-4" /> Kirim Pesan
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}