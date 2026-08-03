import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";

// ── Fonts: display=swap + preload for render-blocking prevention ──────────────
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "Arial", "sans-serif"],
});

const poppins = Poppins({
  weight: ["600", "700"],        // Only heading weights we actually use
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "Arial", "sans-serif"],
});

// ── Viewport (controls meta viewport & theme-color) ──────────────────────────
export const viewport: Viewport = {
  themeColor: "#0D2C5A",
  width: "device-width",
  initialScale: 1,
};

// ── SEO Metadata ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://fastflydelivery.ae"),
  title: {
    default: "Fast Fly Delivery Service | Professional Rider Outsourcing UAE",
    template: "%s | Fast Fly Delivery Service",
  },
  description:
    "Fast Fly Delivery Service provides trained, verified, and professional delivery riders to businesses across the UAE — restaurants, cloud kitchens, Noon, Talabat, Careem, and Smiles.",
  keywords: [
    "delivery riders UAE",
    "rider outsourcing Dubai",
    "Noon delivery riders",
    "Talabat riders",
    "Careem riders",
    "restaurant delivery staff UAE",
  ],
  openGraph: {
    title: "Fast Fly Delivery Service | Professional Rider Outsourcing UAE",
    description:
      "Reliable, trained delivery riders for restaurants, cloud kitchens, and platforms across the UAE.",
    type: "website",
    locale: "en_AE",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to Google Fonts CDN for render-blocking prevention */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className="min-h-full flex flex-col font-sans text-text-main bg-background pt-20"
        suppressHydrationWarning
      >
        <Navbar />
        <main className="flex-1">
          {children}
          <FloatingContactButtons />
        </main>
        <Footer />
      </body>
    </html>
  );
}
