import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function FloatingWhatsApp() {
  return (
    <a 
      href={getWhatsAppUrl()} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center group"
    >
      <MessageCircle size={28} />
      <span className="max-w-0 overflow-hidden ml-0 group-hover:max-w-xs group-hover:ml-3 whitespace-nowrap transition-all duration-300 font-medium font-outfit">
        Chat Kami
      </span>
    </a>
  );
}
