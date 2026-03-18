import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-[90vh] bg-dark text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/assets/images/hero/background.png" 
          alt="Farm Background" 
          fill 
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container max-w-5xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        <span className="inline-block py-1.5 px-4 rounded-full bg-white/20 backdrop-blur-md text-sm font-medium mb-6 animate-fade-in-up">
          🌿 Fresh from the Farm
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-bold leading-tight mb-6 animate-fade-in-up [animation-delay:0.1s]">
          Kesegaran Alam Langsung ke Dapur Anda
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mb-10 animate-fade-in-up [animation-delay:0.2s]">
          Supplier sayur & buah premium untuk restoran, hotel, dan keluarga Indonesia. Panen setiap pagi, dikirim hari ini.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:0.3s]">
          <Link href="#products" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-medium transition-all text-lg min-w-[200px]">
            Lihat Produk
          </Link>
          <Link href="#contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-dark text-white px-8 py-3 rounded-full font-medium transition-all text-lg min-w-[200px]">
            Minta Penawaran
          </Link>
        </div>
      </div>
    </section>
  );
}
