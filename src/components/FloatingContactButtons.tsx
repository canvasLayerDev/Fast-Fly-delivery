import Link from "next/link";
import { Mail, MessageSquare } from "lucide-react";

export function FloatingContactButtons() {
  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3.5">
      <Link
        href="https://wa.me/971521402268"
        target="_blank"
        aria-label="WhatsApp"
      >
        <div className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300">
          <MessageSquare className="w-7 h-7" />
        </div>
      </Link>

      <Link
        href="mailto:Fastfly2002@gmail.com"
        aria-label="Email"
      >
        <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300">
          <Mail className="w-7 h-7" />
        </div>
      </Link>
    </div>
  );
}