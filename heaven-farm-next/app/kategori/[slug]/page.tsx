import { getProductsByCategory, CategorySlug } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const categoryStr = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
  return {
    title: `Supplier ${categoryStr} Segar untuk Restoran di Bandung | Heaven Farm`,
    description: `Temukan berbagai kebutuhan ${params.slug} segar dan berkualitas untuk bisnis kuliner Anda di Bandung.`,
  };
}

export function generateStaticParams() {
  return [
    { slug: 'sayur' },
    { slug: 'buah' },
    { slug: 'daging' }
  ];
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const slug = params.slug as CategorySlug;
  const validCategories = ['sayur', 'buah', 'daging'];
  
  if (!validCategories.includes(slug)) {
    notFound();
  }

  const categoryProducts = getProductsByCategory(slug);
  const categoryStr = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <div className="min-h-screen bg-secondary pb-24">
      {/* Header */}
      <div className="bg-dark text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/#products" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors font-medium">
            <ArrowLeft size={18} className="mr-2" />
            Kembali ke Kategori
          </Link>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-outfit font-bold mb-6 leading-tight">
            Supplier {categoryStr} Segar untuk Restoran di Bandung
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Tingkatkan kualitas hidangan Anda dengan pasokan {slug} segar terbaik. Kami memastikan ketersediaan dan standar kualitas yang ketat untuk setiap mitra bisnis kami di Bandung.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group">
              <div className="relative h-64 w-full bg-gray-50 p-6 flex items-center justify-center overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={`Foto ${product.name} segar untuk restoran di Bandung`}
                  fill
                  className="object-contain p-8 group-hover:scale-110 transition-transform duration-500 drop-shadow-xl"
                />
                {product.tag && (
                  <span className="absolute top-4 left-4 z-10 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h2 className="font-outfit font-bold text-2xl text-dark mb-3">{product.name}</h2>
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-secondary text-gray-700 text-sm font-semibold tracking-wide px-3 py-1.5 rounded-lg border border-gray-100">
                    {product.unit}
                  </span>
                </div>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  {product.description}
                </p>
                <a 
                  href={getWhatsAppUrl(slug)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full block text-center border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium py-3 rounded-xl transition-all font-outfit text-lg"
                >
                  Minta Harga Terbaru
                </a>
              </div>
            </div>
          ))}
        </div>

        {categoryProducts.length === 0 && (
          <div className="text-center py-24 bg-white rounded-3xl mt-8 shadow-sm">
            <h3 className="text-2xl font-outfit font-bold text-dark mb-3">Produk sedang diperbarui</h3>
            <p className="text-gray-500 text-lg">Silakan hubungi WhatsApp kami untuk katalog lengkap {categoryStr}.</p>
          </div>
        )}

        {/* Global CTA */}
        <div className="mt-24 bg-primary rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-[url('/assets/images/hero/background.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-6 leading-tight">Butuh daftar harga lengkap?</h2>
            <p className="text-lg md:text-xl text-primary-50 mb-10 opacity-90 leading-relaxed">
              Tim spesialis B2B kami siap membantu Anda menyusun paket langganan terbaik untuk konsistensi bisnis kuliner Anda di Bandung.
            </p>
            <a 
              href={getWhatsAppUrl(slug)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-primary hover:bg-gray-50 font-bold px-12 py-4 rounded-full text-lg shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all font-outfit"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
