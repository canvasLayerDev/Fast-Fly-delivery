import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS } from "@/data";

const SOCIAL_ICONS = [
  {
    type: "linkedin" as const,
    label: "LinkedIn",
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    type: "instagram" as const,
    label: "Instagram",
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    type: "twitter" as const,
    label: "Twitter",
    svg: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
    ),
  },
] as const;

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-[clamp(4.375rem,6vw,7.5rem)] pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center group bg-white p-2.5 rounded-xl w-fit">
              <Image
                src="/logo.svg"
                alt="Fast Fly Delivery Logo"
                width={180}
                height={60}
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="text-gray-300 text-fluid-small leading-relaxed max-prose-70ch">
              Premium B2B rider outsourcing solutions for restaurants, platforms, and e-commerce across the UAE. Let us handle your delivery fleet.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_ICONS.map((social) => (
                <a
                  key={social.type}
                  href="#"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:scale-105 transition-all"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-fluid-card mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-fluid-small">
                    {link.name === "About" ? "About Us" : link.name === "Contact" ? "Contact Us" : link.name === "Services" ? "Our Services" : link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="text-accent hover:underline transition-colors text-fluid-small font-semibold">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins font-semibold text-fluid-card mb-6 text-accent">Services</h3>
            <ul className="space-y-3.5">
              <li><Link href="/services#dedicated-riders" className="text-gray-300 hover:text-white transition-colors text-fluid-small">Dedicated Delivery Riders</Link></li>
              <li><Link href="/services#noon-riders" className="text-gray-300 hover:text-white transition-colors text-fluid-small">Noon & Talabat Riders</Link></li>
              <li><Link href="/services#restaurant-riders" className="text-gray-300 hover:text-white transition-colors text-fluid-small">Restaurant Delivery</Link></li>
              <li><Link href="/services#rider-outsourcing" className="text-gray-300 hover:text-white transition-colors text-fluid-small">Rider Outsourcing</Link></li>
              <li><Link href="/services#flexible-staffing" className="text-gray-300 hover:text-white transition-colors text-fluid-small">Flexible Staffing</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-poppins font-semibold text-fluid-card mb-6 text-accent">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3.5 text-fluid-small text-gray-300">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.addressLine1},<br />
                  {COMPANY_INFO.addressLine2}
                </span>
              </li>
              <li className="flex items-center gap-3.5 text-fluid-small text-gray-300">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href={COMPANY_INFO.phoneTel} className="hover:text-white transition-colors font-medium">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3.5 text-fluid-small text-gray-300">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href={COMPANY_INFO.emailMailto} className="hover:text-white transition-colors font-medium">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-fluid-small text-center md:text-left">
            &copy; {currentYear} Fast Fly Delivery Service. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-gray-400 hover:text-white text-fluid-small transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-fluid-small transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
