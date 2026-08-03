"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import {
  Target,
  Lightbulb,
  CheckCircle2,
  HeartHandshake,
} from "lucide-react";
import {
  FadeUp,
  SlideIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animation/AnimationWrappers";
import {
  INDUSTRY_ITEMS,
  OFFERINGS_LIST,
  WHY_CHOOSE_US_ITEMS,
  CORE_VALUES,
} from "@/data";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO */}
      <section className="bg-primary text-white py-10 sm:py-14 md:py-16 relative overflow-hidden min-h-[30vh] flex flex-col justify-center border-b border-white/10">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat pointer-events-none transition-transform duration-1000 ease-out hover:scale-105"
          style={{ backgroundImage: "url(/hero-section.png)" }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2" />
        <div className="container-custom relative z-10 text-center">
          <FadeUp>
            <h2 className="text-fluid-small font-semibold text-accent uppercase tracking-wider mb-3">About Us</h2>
            <h1 className="text-fluid-page font-bold font-poppins mb-6">
              Your Trusted Delivery Rider Partner in the UAE
            </h1>
            <p className="text-fluid-body text-gray-300 mx-auto leading-relaxed max-w-3xl">
              Fast Fly Delivery Service is a premier rider outsourcing company dedicated to providing reliable, professional, and efficient delivery rider staffing across the United Arab Emirates.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 2. ABOUT US CONTENT — Full-bleed split */}
      <section className="relative bg-background overflow-hidden border-t border-gray-100">
        <div className="flex flex-col lg:flex-row">
          <div className="relative w-full lg:w-1/2 min-h-[320px] sm:min-h-[420px] lg:min-h-[600px] shrink-0 overflow-hidden">
            <Image
              src="/deliveryboy3.png"
              alt="About Fast Fly Delivery Service"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={80}
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent to-background/30 pointer-events-none" />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="px-6 sm:px-10 lg:px-14 xl:px-18 py-10 sm:py-14 lg:py-18">
              <SlideIn direction="right">
                <h2 className="text-fluid-small font-semibold text-accent uppercase tracking-wider mb-3">Who We Are</h2>
                <h3 className="text-fluid-section font-bold font-poppins text-text-main mb-6 leading-tight">
                  Empowering UAE Businesses with Dependable Rider Staffing
                </h3>

                <p className="text-fluid-body text-text-muted mb-5 leading-relaxed">
                  Fast Fly Delivery Service is a leading delivery rider solutions company in the UAE, dedicated to providing reliable, professional, and efficient rider staffing for businesses of all sizes. We help restaurants, cloud kitchens, food delivery platforms, supermarkets, and e-commerce companies streamline their delivery operations with trained and experienced riders.
                </p>

                <p className="text-fluid-body text-text-muted mb-5 leading-relaxed">
                  Whether you need dedicated riders for your business or delivery support for platforms like Noon, Talabat, Careem, and Smiles, our flexible staffing solutions are designed to meet your operational requirements while maintaining the highest standards of service.
                </p>

                <p className="text-fluid-body text-text-muted mb-8 leading-relaxed">
                  With a focus on reliability, professionalism, and customer satisfaction, Fast Fly Delivery Service ensures that your deliveries are completed safely, efficiently, and on time, allowing you to focus on growing your business.
                </p>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200/80">
                  <div className="flex items-center gap-2.5 text-text-main font-semibold text-fluid-small">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span>Trained & Verified Riders</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-text-main font-semibold text-fluid-small">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span>Flexible Outsourcing Plans</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-text-main font-semibold text-fluid-small">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span>All 7 Emirates Covered</span>
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="section-padding bg-gradient-to-br from-slate-900 via-[#0B2144] to-[#0D2C5A] text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <FadeUp delay={0.1}>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-white/15 shadow-xl flex flex-col justify-between h-full hover:border-white/30 transition-all duration-300">
                <div>
                  <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent mb-6 border border-accent/30 shrink-0">
                    <Target className="w-7 h-7" />
                  </div>
                  <h2 className="text-fluid-section font-bold font-poppins text-white mb-4">Our Mission</h2>
                  <p className="text-fluid-body text-gray-200 leading-relaxed">
                    Our mission is to empower businesses across the UAE with dependable delivery rider solutions, enabling them to optimize delivery operations, improve customer satisfaction, and scale seamlessly without workforce constraints.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-white/15 shadow-xl flex flex-col justify-between h-full hover:border-white/30 transition-all duration-300">
                <div>
                  <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary mb-6 border border-secondary/30 shrink-0">
                    <Lightbulb className="w-7 h-7" />
                  </div>
                  <h2 className="text-fluid-section font-bold font-poppins text-white mb-4">Our Vision</h2>
                  <p className="text-fluid-body text-gray-200 leading-relaxed">
                    Our vision is to become the most trusted and preferred delivery rider staffing partner in the United Arab Emirates, recognized for reliability, professional standards, fast deployment, and business-focused rider solutions.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="section-padding bg-background border-b border-gray-200/70">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-fluid-small mb-3">
                <HeartHandshake className="w-4 h-4 text-accent" />
                OUR GUIDING PRINCIPLES
              </div>
              <h2 className="text-fluid-section font-bold font-poppins text-text-main mb-3">
                Core Values That Drive Fast Fly
              </h2>
              <p className="text-fluid-body text-text-muted leading-relaxed">
                At Fast Fly Delivery Service, our culture and operations are built upon seven foundational pillars of operational excellence.
              </p>
            </FadeUp>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {CORE_VALUES.map((val, idx) => (
              <StaggerItem key={idx} className="h-full">
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col justify-between group hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                        <val.icon className="w-6 h-6" />
                      </div>
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${val.color}`}>
                        {val.tagline}
                      </span>
                    </div>
                    <h3 className="text-fluid-card font-bold font-poppins text-text-main mb-2 group-hover:text-primary transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-fluid-small text-text-muted leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. WHAT WE OFFER */}
      <section className="section-padding bg-white border-b border-gray-200/70">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <FadeUp>
              <h2 className="text-fluid-small font-semibold text-accent uppercase tracking-wider mb-2">Comprehensive Solutions</h2>
              <h3 className="text-fluid-section font-bold font-poppins text-text-main mb-3">
                What We Offer
              </h3>
              <p className="text-fluid-body text-text-muted leading-relaxed">
                We specialize in complete delivery rider staffing for companies across the UAE:
              </p>
            </FadeUp>
          </div>

          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {OFFERINGS_LIST.map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="bg-background rounded-2xl p-4 sm:p-6 border border-gray-200/70 flex items-center gap-3.5 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                  <div className="bg-primary/10 p-2 rounded-xl shrink-0 text-primary flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold text-text-main text-fluid-small leading-snug">{item}</h4>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="section-padding bg-background border-b border-gray-200/70">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <FadeUp>
              <h2 className="text-fluid-section font-bold font-poppins text-text-main mb-3">
                Why Choose Fast Fly Delivery Service?
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US_ITEMS.map((reason, idx) => (
              <StaggerItem key={idx} className="h-full">
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/70 flex items-start gap-4 h-full shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="bg-primary/10 p-2.5 rounded-xl shrink-0 text-primary flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-main text-fluid-card mb-1">{reason.title}</h4>
                    <p className="text-fluid-small text-text-muted leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 7. INDUSTRIES WE SERVE */}
      <section className="section-padding bg-primary text-white relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <FadeUp>
            <h2 className="text-fluid-section font-bold font-poppins mb-4">Industries We Serve</h2>
            <p className="text-white/80 text-fluid-body mb-8 max-w-2xl mx-auto leading-relaxed">We proudly provide delivery rider services for</p>
          </FadeUp>

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

      {/* 8. PARTNER CTA BANNER */}
      <section className="relative overflow-hidden bg-slate-900 border-t border-gray-800">
        <div className="flex flex-col lg:flex-row">
          <div className="relative w-full lg:w-1/2 min-h-[320px] sm:min-h-[420px] lg:min-h-[540px] shrink-0 overflow-hidden group">
            <Image
              src="/partner_cta.png"
              alt="Partner with Fast Fly Delivery Service"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={80}
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-slate-900/40 to-slate-900 pointer-events-none" />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center bg-slate-900 text-white">
            <div className="px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-10 sm:py-14 lg:py-16">
              <FadeUp>
                <div className="text-accent font-bold text-[12px] sm:text-[13px] tracking-[0.35em] uppercase mb-3 font-poppins">
                  L E T &apos; S &nbsp; W O R K &nbsp; T O G E T H E R
                </div>

                <h2 className="text-fluid-section font-extrabold font-poppins text-white mb-4 leading-tight">
                  Partner with Fast Fly Delivery Service
                </h2>

                <p className="text-fluid-body text-gray-300 mb-8 leading-relaxed">
                  At Fast Fly Delivery Service, we believe that reliable delivery starts with the right people. Our goal is to provide skilled riders and dependable staffing solutions that help businesses operate more efficiently and deliver exceptional customer experiences. Whether you&apos;re a restaurant, food delivery platform, or e-commerce business, we&apos;re here to support your growth with trusted rider solutions across the UAE.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button variant="primary" size="lg" className="w-full sm:w-auto font-bold px-8 shadow-xl">
                      Contact Us Today →
                    </Button>
                  </Link>

                  <Link href="/services" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto font-bold px-8 text-white border-white/30 hover:bg-white hover:text-slate-900">
                      View Our Services
                    </Button>
                  </Link>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
