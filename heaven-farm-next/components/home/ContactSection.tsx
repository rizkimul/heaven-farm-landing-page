import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">HUBUNGI KAMI</span>
            <h2 className="text-3xl md:text-4xl font-outfit font-bold text-dark mb-6 leading-tight">
              Siap Mensupply Kebutuhan Bisnis Anda di Bandung
            </h2>
            <p className="text-gray-600 mb-10 text-lg">
              Konsultasikan kebutuhan sayur, buah, dan daging Anda. Dapatkan penawaran harga spesial untuk pembelian rutin (langganan).
            </p>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-lg mb-1">Lokasi Kebun & Gudang</h4>
                  <p className="text-gray-600">Jl. Kebun Segar No. 123, Pangalengan<br/>Bandung, Jawa Barat</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-lg mb-1">WhatsApp / Telepon</h4>
                  <p className="text-gray-600">+62 812-3456-7890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-outfit font-bold text-lg mb-1">Email</h4>
                  <p className="text-gray-600">hello@heavenfarm.id</p>
                </div>
              </div>
            </div>
            
            <div className="w-full h-48 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 overflow-hidden relative shadow-inner">
               {/* Embed Google Maps placeholder or real iframe later */}
               <span>Peta Lokasi Bandung</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 relative">
            <h3 className="font-outfit font-bold text-2xl mb-6">Minta Penawaran</h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Nama Bisnis / Perusahaan</label>
                <input type="text" placeholder="Contoh: Restoran Sedap Rasa" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Anda</label>
                <input type="email" placeholder="nama@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Nomor WhatsApp</label>
                <input type="tel" placeholder="0812xxxx" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Jenis Kebutuhan</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white">
                  <option value="all">Semua Kategori</option>
                  <option value="sayur">Sayuran</option>
                  <option value="buah">Buah</option>
                  <option value="daging">Daging</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Estimasi Volume (Kg/Hari)</label>
                <input type="text" placeholder="Contoh: 10-20 Kg" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Pesan Tambahan</label>
                <textarea rows={3} placeholder="Tulis detail kebutuhan spesifik Anda..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3.5 rounded-xl transition-colors mt-2 text-lg">
                Kirim Permintaan
              </button>
              <p className="text-center text-sm text-gray-500 mt-4">Kami akan membalas via WhatsApp dalam max. 1 jam.</p>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
