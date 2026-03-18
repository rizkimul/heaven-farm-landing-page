import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/assets/images/about/farm.png" 
                alt="Kebun Heaven Farm" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-lg border-4 border-white flex flex-col items-center justify-center min-w-[140px]">
              <span className="text-4xl font-outfit font-bold">5+</span>
              <span className="text-sm font-medium text-center uppercase tracking-wider mt-1">Tahun<br/>Pengalaman</span>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">TENTANG HEAVEN FARM</span>
            <h2 className="text-3xl md:text-4xl font-outfit font-bold text-dark mb-6 leading-tight">
              Mitra Terpercaya untuk Kebutuhan Sayur & Buah Segar
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              Berawal dari lahan kecil di kaki gunung Pangalengan, Heaven Farm kini tumbuh menjadi supplier utama bagi puluhan restoran dan hotel di Jawa Barat.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Kami percaya bahwa makanan sehat berawal dari bahan baku yang baik. Itulah mengapa kami bermitra langsung dengan petani lokal, memberdayakan komunitas, dan menjaga standar kualitas tertinggi.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 text-dark font-medium">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
                Langsung dari petani tangan pertama
              </li>
              <li className="flex items-center gap-3 text-dark font-medium">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
                Harga kompetitif untuk mitra bisnis
              </li>
              <li className="flex items-center gap-3 text-dark font-medium">
                <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
                Ketersediaan stok terjaga sepanjang tahun
              </li>
            </ul>

            <Link href="#contact" className="inline-block bg-dark hover:bg-gray-800 text-white px-8 py-3.5 rounded-full font-medium transition-colors text-lg">
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
