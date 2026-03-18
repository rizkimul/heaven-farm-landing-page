import { Sun, Truck, Shield, CheckCircle } from "lucide-react";

const values = [
  {
    icon: <Sun size={32} />,
    title: "Panen Harian",
    desc: "Dipetik setiap pagi untuk menjaga nutrisi dan kesegaran maksimal saat sampai di tangan Anda."
  },
  {
    icon: <Truck size={32} />,
    title: "Pengiriman Cepat",
    desc: "Layanan same-day delivery agar produk tetap segar. Garansi ganti baru jika rusak."
  },
  {
    icon: <Shield size={32} />,
    title: "Bebas Pestisida",
    desc: "100% organik dan aman dikonsumsi. Kami menerapkan quality control ketat di setiap langkah."
  },
  {
    icon: <CheckCircle size={32} />,
    title: "Quality Control",
    desc: "Proses sortir berlapis memastikan hanya produk terbaik yang kami kirimkan."
  }
];

export default function ValuePropositions() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                {val.icon}
              </div>
              <h3 className="font-outfit font-semibold text-xl mb-3">{val.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
