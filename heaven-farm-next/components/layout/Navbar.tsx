"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-primary">
                <Image src="/assets/images/logo.png" alt="Heaven Farm Logo" fill className="object-cover" />
              </div>
              <span className="font-outfit font-bold text-xl text-primary">HEAVEN Farm</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/#home" className="text-dark hover:text-primary font-medium transition-colors">Beranda</Link>
              <Link href="/#about" className="text-dark hover:text-primary font-medium transition-colors">Tentang</Link>
              <Link href="/#products" className="text-dark hover:text-primary font-medium transition-colors">Produk</Link>
              <Link href="/#clients" className="text-dark hover:text-primary font-medium transition-colors">Mitra</Link>
              <Link href="/#contact" className="text-dark hover:text-primary font-medium transition-colors">Kontak</Link>
            </nav>

            <div className="hidden md:flex items-center">
              <Link href="/#contact" className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-medium transition-colors">
                Hubungi Kami
              </Link>
            </div>

            <button
              className="md:hidden p-2 text-dark"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col pt-24 px-6 md:hidden">
          <nav className="flex flex-col gap-6 text-lg font-medium text-dark">
            <Link href="/#home" onClick={() => setIsOpen(false)}>Beranda</Link>
            <Link href="/#about" onClick={() => setIsOpen(false)}>Tentang Kami</Link>
            <Link href="/#products" onClick={() => setIsOpen(false)}>Produk Segar</Link>
            <Link href="/#clients" onClick={() => setIsOpen(false)}>Mitra & Klien</Link>
            <Link href="/#contact" onClick={() => setIsOpen(false)} className="text-primary mt-4">Hubungi Kami</Link>
          </nav>
        </div>
      )}
    </>
  );
}
