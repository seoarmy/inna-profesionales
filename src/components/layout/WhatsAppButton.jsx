import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../../data/mockData";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 active:scale-95 sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 rounded-full animate-pulse-soft" />
      <MessageCircle className="relative h-7 w-7 text-white" strokeWidth={2} />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 sm:block">
        Consultanos por WhatsApp
      </span>
    </a>
  );
}
