"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "py-3 bg-white backdrop-blur-xl shadow-md border-b border-gray-100"
          : "py-5 bg-white"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Fast Fly Delivery Logo"
            width={180}
            height={60}
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[16px] font-medium transition-colors hover:text-primary relative py-1.5",
                  isActive ? "text-primary font-semibold" : "text-text-muted"
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-accent rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button variant="primary" size="sm">
              Hire Riders
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="md:hidden min-w-[48px] min-h-[48px] flex items-center justify-center text-text-main rounded-xl hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-2xl p-6 flex flex-col gap-3">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "px-5 py-3.5 min-h-[48px] flex items-center rounded-xl text-[16px] font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-text-muted hover:bg-gray-50"
                )}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-gray-100 mt-2">
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="primary" className="w-full">
                Hire Riders
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
