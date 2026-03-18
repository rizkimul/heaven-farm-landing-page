import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="clients" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">TESTIMONI</span>
          <h2 className="text-3xl md:text-4xl font-outfit font-bold text-dark mb-4">
            Dipercaya oleh 50+ Restoran & Hotel di Bandung
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-secondary rounded-3xl p-8 md:p-12 relative text-center">
            <div className="flex justify-center gap-1 text-yellow-400 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" size={24} />
              ))}
            </div>
            
            <p className="text-xl md:text-2xl text-dark font-medium italic leading-relaxed mb-8">
              "Kualitas sayuran Heaven Farm selalu konsisten. Pengiriman tepat waktu dan packaging rapi. Sangat membantu operasional kitchen kami yang sangat sibuk setiap harinya."
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl font-outfit">
                CB
              </div>
              <div className="text-left">
                <h4 className="font-outfit font-bold text-lg text-dark">Chef Budi</h4>
                <p className="text-gray-600">Executive Chef, Grand Hotel Bandung</p>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos Placeholder */}
        <div className="mt-20 flex justify-center gap-8 md:gap-16 flex-wrap opacity-60 grayscale">
          <div className="font-bold text-2xl text-gray-400">HOTEL A</div>
          <div className="font-bold text-2xl text-gray-400">RESTO B</div>
          <div className="font-bold text-2xl text-gray-400">CATERING C</div>
          <div className="font-bold text-2xl text-gray-400">CAFE D</div>
        </div>
      </div>
    </section>
  );
}
