"use client";

import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { FAQItem } from "@/components/ui/FAQItem";
import {
  Building2,
  MapPin,
  Users,
  Clock,
  ShieldCheck,
  ChevronRight,
  Package,
  Bike,
  Store,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  FadeUp,
  SlideIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animation/AnimationWrappers";
import {
  INDUSTRY_ITEMS,
  EMIRATES_ITEMS,
  HOME_FAQS,
  PROCESS_STEPS,
  SERVICES_DATA,
} from "@/data";

interface Platform {
  readonly name: string;
  readonly color: string;
  readonly image: string;
  readonly href: string;
}

const PLATFORMS: readonly Platform[] = [
  { name: "Noon", color: "from-yellow-400 to-yellow-500", image: "/services/noon_riders.png", href: "/services#noon-riders" },
  { name: "Talabat", color: "from-orange-500 to-orange-600", image: "/services/talabat_riders.png", href: "/services#talabat-riders" },
  { name: "Careem", color: "from-green-500 to-green-600", image: "/services/careem_riders.png", href: "/services#careem-riders" },
  { name: "Smiles", color: "from-blue-500 to-blue-600", image: "/services/smiles_riders.png", href: "/services#smiles-riders" },
];

const HERO_FEATURES = [
  { label: "Professional Riders", icon: ShieldCheck },
  { label: "Fast Onboarding", icon: Clock },
  { label: "UAE-Wide Coverage", icon: MapPin },
  { label: "Flexible Hiring", icon: Users },
] as const;

const TRUST_REASONS = [
  "Professionally Trained Riders",
  "Fast Rider Deployment",
  "Flexible Staffing Solutions",
  "Affordable Pricing",
  "On-Time Deliveries",
  "Dedicated Customer Support",
  "Reliable & Secure Service",
  "UAE Wide Operations",
] as const;

const WHY_TRUST_POINTS = [
  "Experienced Delivery Riders",
  "Flexible Hiring Models",
  "Fast Deployment",
  "Professional Management",
  "Reliable Customer Support",
  "Transparent Service",
  "Business Focused Solutions",
] as const;

export default function Home() {
  const homeServices = SERVICES_DATA.slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden min-h-[100svh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-section.png"
            alt="Fast Fly Delivery Service — Reliable Riders Across the UAE"
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-primary/80 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

        <div className="container-custom relative z-10 w-full py-16 md:py-24">
          <div className="max-w-2xl xl:max-w-3xl space-y-5 sm:space-y-6">
            <FadeUp delay={0.1}>
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/95 text-[13px] sm:text-[14px] font-semibold tracking-[0.08em] uppercase">
                <span className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_rgba(246,166,35,0.6)] animate-pulse" />
                Trusted Rider Outsourcing Company
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h1 className="text-fluid-hero font-bold font-poppins text-white leading-[1.08] drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
                Reliable Delivery Rider{" "}
                <span className="text-accent">Solutions</span>{" "}
                Across the UAE
              </h1>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] text-white/85 leading-relaxed font-medium">
                Fast Fly Delivery Service provides trained, professional, and reliable delivery riders to help your business deliver faster, reduce costs, and serve your customers better.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <FadeUp delay={0.1} className="w-full sm:w-auto">
                  <Link href="/contact" className="w-full sm:w-auto block">
                    <Button variant="primary" size="lg" className="w-full sm:w-auto font-semibold px-10 shadow-xl shadow-accent/30 text-fluid-small">
                      Hire Riders <ChevronRight className="w-5 h-5 ml-1 inline-block" />
                    </Button>
                  </Link>
                </FadeUp>

                <FadeUp delay={0.2} className="w-full sm:w-auto">
                  <Link href="/contact" className="w-full sm:w-auto block">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto font-semibold px-10 text-white border-white/30 hover:bg-white/15 hover:border-white/50 bg-white/5 backdrop-blur-sm text-fluid-small transition-all">
                      Get a Free Quote <ChevronRight className="w-5 h-5 ml-1 inline-block" />
                    </Button>
                  </Link>
                </FadeUp>
              </div>
            </FadeUp>

            <StaggerContainer className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4 sm:pt-6">
              {HERO_FEATURES.map((feat, idx) => (
                <StaggerItem key={idx}>
                  <div className="group flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/20 hover:border-white/30 transition-all duration-300 cursor-default">
                    <div className="bg-accent/20 p-2.5 rounded-xl shrink-0 group-hover:bg-accent/30 transition-colors flex items-center justify-center">
                      <feat.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-[13px] sm:text-[14px] font-semibold text-white/95 leading-tight">{feat.label}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent pointer-events-none" />
      </section>

      {/* 2. ABOUT PREVIEW — BLUE BACKGROUND & WHITE TEXT */}
      <section className="relative bg-primary text-white overflow-hidden border-t border-white/10">
        <div className="flex flex-col lg:flex-row">
          {/* Image Side */}
          <div className="relative w-full lg:w-1/2 min-h-[340px] sm:min-h-[440px] lg:min-h-[600px] shrink-0 overflow-hidden">
            <Image
              src="/deliveryboy3.png"
              alt="About Fast Fly Delivery"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={80}
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-[#0D2C5A]/40 to-[#0D2C5A] pointer-events-none" />
          </div>

          {/* Content Side — Blue Background & White Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center bg-[#0D2C5A] text-white">
            <div className="px-6 sm:px-10 md:px-14 lg:px-8 xl:px-20 py-10 sm:py-14 lg:py-8">
              <SlideIn direction="right">
                <h2 className="text-fluid-small font-semibold text-accent uppercase tracking-wider mb-3">About Fast Fly</h2>
                <h3 className="text-fluid-section font-bold font-poppins text-white mb-5 leading-tight">
                  Your Trusted Delivery Rider Partner in the UAE
                </h3>
                <p className="text-fluid-body text-gray-200 mb-4 leading-relaxed">
                  Fast Fly Delivery Service is a leading rider outsourcing company that helps businesses streamline their delivery operations with professional, experienced, and dedicated riders.
                </p>
                <p className="text-fluid-body text-gray-200 mb-8 leading-relaxed">
                  From restaurants and cloud kitchens to food delivery platforms and retail businesses, we provide reliable rider solutions tailored to your operational needs. Our mission is to help businesses deliver every order safely, efficiently, and on time.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                  <div className="flex items-start gap-4 p-4.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md shadow-md hover:bg-white/15 transition-all">
                    <div className="bg-accent/20 p-3 rounded-xl shrink-0 flex items-center justify-center border border-accent/30 text-accent">
                      <Users className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-fluid-card mb-1">Reliable Riders</h4>
                      <p className="text-fluid-small text-gray-300">Trained & verified for safe, on-time deliveries.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md shadow-md hover:bg-white/15 transition-all">
                    <div className="bg-accent/20 p-3 rounded-xl shrink-0 flex items-center justify-center border border-accent/30 text-accent">
                      <Building2 className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-fluid-card mb-1">Business Focused</h4>
                      <p className="text-fluid-small text-gray-300">Helping you deliver more to your customers.</p>
                    </div>
                  </div>
                </div>

                <Link href="/about" className="inline-block w-full sm:w-auto">
                  <Button variant="primary" size="lg" className="w-full sm:w-auto group font-bold shadow-xl">
                    Learn More About Us
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES */}
      <section className="section-padding bg-white relative overflow-hidden border-t border-gray-100">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <FadeUp>
              <h2 className="text-fluid-small font-semibold text-accent uppercase tracking-wider mb-2">Our Services</h2>
              <h3 className="text-fluid-section font-bold font-poppins text-text-main">
                Delivery Rider Services We Offer
              </h3>
            </FadeUp>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {homeServices.map((service, i) => (
              <StaggerItem key={i} className="h-full">
                <GlassCard hoverEffect className="bg-background flex flex-col h-full border border-gray-200/80 p-6 sm:p-8 rounded-2xl sm:rounded-3xl justify-between shadow-md hover:shadow-xl transition-all duration-300">
                  <div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm mb-4 text-primary border border-gray-100 shrink-0">
                      <service.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <h4 className="font-bold font-poppins text-fluid-card mb-3">{service.title}</h4>
                    <p className="text-fluid-small text-text-muted leading-relaxed mb-4">{service.desc}</p>
                  </div>
                  <Link href={`/services#${service.id}`} className="text-accent text-fluid-small font-semibold inline-flex items-center group pt-4 border-t border-gray-200/60">
                    Explore Now <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="section-padding bg-background border-t border-gray-100">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <SlideIn direction="left" className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-md sm:shadow-xl border border-gray-200/80">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  {TRUST_REASONS.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="bg-green-50 p-1.5 rounded-full shrink-0 mt-0.5 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-text-main font-semibold text-fluid-body leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SlideIn>

            <SlideIn direction="right" className="order-1 lg:order-2">
              <h2 className="text-fluid-small font-semibold text-accent uppercase tracking-wider mb-2 sm:mb-3">Why Choose Fast Fly Delivery Service?</h2>
              <h3 className="text-fluid-section font-bold font-poppins text-text-main mb-3 sm:mb-6">
                Deliver More. Stress Less.
              </h3>
              <p className="text-fluid-body text-text-muted mb-6 leading-relaxed">
                We understand that reliable delivery is essential for business growth. That&apos;s why companies across the UAE trust Fast Fly Delivery Service to handle their fleet requirements with total precision.
              </p>

              <Link href="/contact" className="inline-block w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto group">
                  Partner With Us Today
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 justify-between items-start md:items-end mb-8 sm:mb-12">
            <FadeUp className="max-w-2xl">
              <h2 className="text-fluid-small font-semibold text-accent uppercase tracking-wider mb-3">Industries We Serve</h2>
              <h3 className="text-fluid-section font-bold font-poppins mb-4">
                Powering Deliveries Across Multiple Sectors
              </h3>
              <p className="text-gray-300 text-fluid-body leading-relaxed">
                Our scalable rider solutions are designed to support a wide range of businesses that require dependable logistics and delivery personnel.
              </p>
            </FadeUp>
            <Link href="/contact" className="w-full sm:w-auto shrink-0">
              <Button variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-primary">
                Get a Custom Solution
              </Button>
            </Link>
          </div>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-6 lg:gap-8">
            {INDUSTRY_ITEMS.map((ind, i) => (
              <StaggerItem key={i}>
                <div className="group flex flex-col items-center text-center">
                  <div className="relative w-full aspect-square rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-lg bg-white/10 group-hover:border-accent transition-all duration-300">
                    <Image
                      src={ind.image}
                      alt={ind.name}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 22vw, 18vw"
                      quality={75}
                      className="object-cover transition-transform duration-500 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-20 sm:opacity-40 group-hover:opacity-10 transition-opacity duration-300" />
                  </div>
                  <h4 className="mt-3 font-semibold text-fluid-small text-white/95 group-hover:text-accent transition-colors duration-300 leading-snug">
                    {ind.name}
                  </h4>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. DELIVERY PLATFORMS */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50 border-b border-gray-200/70">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-fluid-small mb-4">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                TRUSTED PARTNERS
              </div>
              <h2 className="text-fluid-section font-bold font-poppins text-text-main mb-3">
                Delivery Platforms We Support
              </h2>
              <p className="text-fluid-body text-text-muted leading-relaxed">
                We provide professional, vetted riders for the UAE&apos;s leading delivery platforms, ensuring your operations never slow down.
              </p>
            </FadeUp>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {PLATFORMS.map((platform, i) => (
              <StaggerItem key={i}>
                <Link href={platform.href} className="block h-full group">
                  <div className="flex flex-col items-center text-center h-full justify-between">
                    <div className="relative w-full aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-md group-hover:shadow-2xl border border-gray-200/80 transition-all duration-400 bg-white">
                      <Image
                        src={platform.image}
                        alt={`${platform.name} Delivery Riders`}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 45vw, 22vw"
                        quality={75}
                        className="object-cover object-top group-hover:scale-108 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-300" />
                    </div>

                    <div className="mt-4 flex flex-col items-center">
                      <h4 className="text-fluid-card font-bold font-poppins text-gray-900 group-hover:text-primary transition-colors duration-300 mb-1">
                        {platform.name} Delivery Riders
                      </h4>
                      <p className="text-fluid-small text-accent font-semibold flex items-center gap-1">
                        View Riders <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </p>
                      <div className={`w-10 h-1 mt-2.5 rounded-full bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 7. OUR PROCESS */}
      <section className="py-10 sm:py-14 md:py-16 bg-primary text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <FadeUp>
              <h2 className="text-[12px] sm:text-fluid-small font-semibold text-accent uppercase tracking-widest mb-1.5">Our Process</h2>
              <h3 className="text-fluid-section font-bold font-poppins">
                Simple, Fast & Reliable
              </h3>
            </FadeUp>
          </div>

          <StaggerContainer className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {PROCESS_STEPS.map((item, idx) => (
              <StaggerItem key={idx} className="h-full">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/15 flex flex-col items-center text-center h-full justify-between hover:bg-white/15 transition-all duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center border border-white/20 shadow-md mb-3 shrink-0">
                    <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                  </div>
                  <div className="text-accent font-bold font-poppins text-[11px] sm:text-xs uppercase tracking-wider mb-2 bg-accent/15 px-2.5 py-0.5 rounded-full border border-accent/25">
                    {item.step}
                  </div>
                  <p className="text-[13px] sm:text-[14px] md:text-fluid-body font-medium text-white/95 leading-snug">
                    {item.title}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 8. UAE COVERAGE */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white relative overflow-hidden border-t border-gray-200/70">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <FadeUp>
              <div className="text-accent font-bold text-fluid-small tracking-[0.35em] uppercase mb-3 font-poppins">
                UAE COVERAGE
              </div>
              <h2 className="text-fluid-section font-extrabold font-poppins text-gray-900 mb-3 tracking-tight">
                Serving Businesses Across the UAE
              </h2>
              <p className="text-fluid-body text-gray-600 leading-relaxed">
                We provide delivery rider services in all major emirates. No matter where your business operates, Fast Fly Delivery Service is ready to support your delivery operations.
              </p>
            </FadeUp>
          </div>

          <StaggerContainer className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {EMIRATES_ITEMS.map((emirate, i) => (
              <StaggerItem key={i}>
                <Link href="/contact" className="block group h-full">
                  <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 border border-gray-100 flex flex-col justify-between h-full">
                    <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
                      <Image
                        src={emirate.image}
                        alt={`${emirate.name} Delivery Riders`}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 45vw, (max-width: 1024px) 30vw, 22vw"
                        quality={75}
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity duration-300" />
                    </div>

                    <div className="p-4 sm:p-5 bg-white text-center">
                      <h3 className="text-[14px] sm:text-fluid-card font-bold font-poppins text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {emirate.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 9. WHY TRUST US & CTA */}
      <section className="section-padding bg-white border-t border-gray-200/70">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <FadeUp delay={0.1} className="h-full">
              <div className="bg-background rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200/70 shadow-sm flex flex-col h-full justify-between">
                <div>
                  <h2 className="text-fluid-card font-bold font-poppins text-text-main mb-6">Why Businesses Trust Us</h2>
                  <div className="space-y-3.5">
                    {WHY_TRUST_POINTS.map((reason, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="bg-primary/10 p-1.5 rounded-full shrink-0 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-fluid-small font-semibold text-text-main">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2} className="h-full">
              <div className="bg-primary rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-primary/10 shadow-xl flex flex-col h-full justify-between text-white relative overflow-hidden">
                <div>
                  <h2 className="text-fluid-small font-semibold text-accent uppercase tracking-wider mb-3">Call to Action</h2>
                  <h3 className="text-fluid-card font-bold font-poppins mb-4">Ready to Hire Professional Delivery Riders?</h3>
                  <p className="text-fluid-small text-white/80 mb-8 leading-relaxed">
                    Scale your delivery operations with trusted rider solutions from Fast Fly Delivery Service. Whether you need one rider or a complete delivery team, we have the right solution for your business.
                  </p>
                </div>
                <div className="space-y-4">
                  <Link href="/contact" className="block w-full">
                    <Button variant="outline" className="w-full bg-white text-primary hover:bg-gray-100 border-transparent shadow-md font-semibold">
                      Get a Free Quote
                    </Button>
                  </Link>
                  <Link href="/contact" className="block w-full">
                    <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 font-semibold">
                      Contact Us Today
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <FadeUp>
              <h2 className="text-fluid-small font-semibold text-accent uppercase tracking-wider mb-3">Have Questions?</h2>
              <h3 className="text-fluid-section font-bold font-poppins text-text-main mb-3">
                Frequently Asked Questions
              </h3>
              <p className="text-fluid-body text-text-muted leading-relaxed">
                Partner with Fast Fly Delivery Service today for reliable, trained, and professional delivery riders anywhere in the UAE.
              </p>
            </FadeUp>
          </div>

          <div className="space-y-3.5 sm:space-y-4 max-w-5xl mx-auto">
            {HOME_FAQS.map((faq, idx) => (
              <FadeUp key={idx} delay={idx * 0.05}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
