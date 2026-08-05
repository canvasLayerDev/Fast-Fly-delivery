import Link from "next/link";
import { Mail, MessageSquare } from "lucide-react";

export function FloatingContactButtons() {
  return (
    <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 z-50 flex flex-col gap-3">
      <Link
        href="https://wa.me/971564583330"
        target="_blank"
        aria-label="WhatsApp"
      >
        <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
          <MessageSquare className="w-6 h-6" />
        </div>
      </Link>

      <Link
        href="mailto:Fastfly2002@gmail.com"
        aria-label="Email"
      >
        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
          <Mail className="w-6 h-6" />
        </div>
      </Link>
    </div>
  );
}