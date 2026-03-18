import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Sayur Segar",
    slug: "sayur",
    desc: "Berbagai jenis sayuran daun dan umbi pilihan dari kebun lokal.",
    image: "/assets/images/products/spinach.png"
  },
  {
    title: "Buah Segar",
    slug: "buah",
    desc: "Buah-buahan segar kualitas premium untuk dessert dan minuman.",
    image: "/assets/images/products/apple.png"
  },
  {
    title: "Daging Segar",
    slug: "daging",
    desc: "Daging sapi dan ayam berkualitas tinggi untuk restoran andalan.",
    image: "/assets/images/products/soup_kit.png"
  }
];

export default function CategorySection() {
  return (
    <section id="products" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">KATEGORI PRODUK</span>
          <h2 className="text-3xl md:text-4xl font-outfit font-bold text-dark mb-4">
            Pilihan Terbaik dari Alam
          </h2>
          <p className="text-gray-600 text-lg">
            Temukan berbagai kebutuhan bahan baku segar untuk restoran atau cafe Anda yang kami bagi dalam 3 kategori utama.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <Link 
              key={idx} 
              href={`/kategori/${cat.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                <Image 
                  src={cat.image} 
                  alt={cat.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="font-outfit font-bold text-2xl mb-3 group-hover:text-primary transition-colors">{cat.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{cat.desc}</p>
                <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                  <span>Lihat Katalog</span>
                  <ArrowRight size={18} className="ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
