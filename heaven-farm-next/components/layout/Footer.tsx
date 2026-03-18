import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1a202c] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 bg-white rounded-full p-1">
                <Image src="/assets/images/logo.png" alt="Logo" fill className="object-contain p-1 rounded-full" />
              </div>
              <span className="font-outfit font-bold text-2xl text-white">HEAVEN Farm</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              Supplier sayur & buah segar terpercaya untuk bisnis Anda. Tumbuh bersama petani lokal Indonesia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-outfit font-semibold text-lg mb-6">Navigasi</h4>
            <ul className="space-y-4">
              <li><Link href="/#home" className="text-gray-400 hover:text-white transition-colors">Beranda</Link></li>
              <li><Link href="/#about" className="text-gray-400 hover:text-white transition-colors">Tentang Kami</Link></li>
              <li><Link href="/#products" className="text-gray-400 hover:text-white transition-colors">Produk</Link></li>
              <li><Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-outfit font-semibold text-lg mb-6">Produk</h4>
            <ul className="space-y-4">
              <li><Link href="/kategori/sayur" className="text-gray-400 hover:text-white transition-colors">Sayur Segar</Link></li>
              <li><Link href="/kategori/buah" className="text-gray-400 hover:text-white transition-colors">Buah Segar</Link></li>
              <li><Link href="/kategori/daging" className="text-gray-400 hover:text-white transition-colors">Daging Segar</Link></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4 border-t-white/20">
          <p className="text-sm text-gray-500">&copy; 2026 Heaven Farm. All Rights Reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
