"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";
import {
  FadeUp,
  SlideIn,
  StaggerContainer,
  StaggerItem,
  ScrollSectionReveal,
} from "@/components/animation/AnimationWrappers";
import {
  SERVICES_DATA,
  INDUSTRY_ITEMS,
  WHY_CHOOSE_US_ITEMS,
  PROCESS_STEPS,
} from "@/data";

export default function Services() {
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
            <h2 className="text-fluid-small font-semibold text-accent uppercase tracking-wider mb-3">Our Services</h2>
            <h1 className="text-fluid-page font-bold font-poppins mb-6">
              Professional Delivery Rider Solutions Across the UAE
            </h1>
            <p className="text-fluid-body text-gray-300 max-w-3xl mx-auto leading-relaxed">
              At Fast Fly Delivery Service, we provide reliable, trained, and professional delivery riders to help businesses manage their delivery operations efficiently. Whether you&apos;re a restaurant, food delivery platform, cloud kitchen, or retail business, we offer flexible rider solutions tailored to your needs.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 2. SERVICES LIST HEADER */}
      <section className="py-10 bg-background border-b border-gray-200/60">
        <div className="container-custom text-center">
          <FadeUp>
            <h2 className="text-fluid-small font-bold text-accent uppercase tracking-widest mb-3">What We Provide</h2>
            <h3 className="text-fluid-section font-bold font-poppins text-text-main">
              Our Delivery Rider Services
            </h3>
          </FadeUp>
        </div>
      </section>

      {/* 2. FULL-BLEED EDGE-TO-EDGE SERVICE ROWS */}
      {SERVICES_DATA.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={cn(
            "relative border-b border-gray-200/70 scroll-mt-20 group transition-colors duration-500",
            index % 2 === 0 ? "bg-white" : "bg-background"
          )}
        >
          <div className="flex flex-col lg:flex-row min-h-[480px] lg:min-h-[560px]">
            {/* Image Side — Full-Bleed 50% width with Vertical Scroll Reveal */}
            <FadeUp
              yOffset={60}
              duration={0.9}
              className={cn(
                "relative w-full lg:w-1/2 min-h-[320px] sm:min-h-[400px] lg:min-h-[560px] shrink-0 overflow-hidden group/img",
                index % 2 !== 0 && "lg:order-2"
              )}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={80}
                className="object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent to-black/10 pointer-events-none" />
            </FadeUp>

            {/* Content Side — 50% width with Vertical Scroll Reveal */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="px-6 sm:px-10 lg:px-14 xl:px-18 py-10 sm:py-14 lg:py-16">
                <FadeUp yOffset={75} delay={0.15} duration={1.0} className="space-y-5 sm:space-y-6">
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className="flex w-12 h-12 sm:w-14 sm:h-14 bg-primary/5 rounded-xl sm:rounded-2xl items-center justify-center text-primary border border-primary/10 shrink-0">
                      <service.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <h2 className="text-fluid-section font-bold font-poppins text-text-main leading-tight">{service.title}</h2>
                      <h3 className="text-fluid-small font-semibold text-accent uppercase tracking-wider mt-1">{service.subtitle}</h3>
                    </div>
                  </div>

                  <p className="text-fluid-body text-text-muted leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-5 sm:gap-8 pt-4 border-t border-gray-200/80">
                    <div>
                      <h4 className="font-bold text-text-main text-fluid-card mb-3">{service.listTitle1}</h4>
                      <div className="space-y-2.5">
                        {service.list1.map((item, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-fluid-small text-text-muted">
                            <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {service.listTitle2 && service.list2 && (
                      <div>
                        <h4 className="font-bold text-text-main text-fluid-card mb-3">{service.listTitle2}</h4>
                        <div className="space-y-2.5">
                          {service.list2.map((item, i) => (
                            <div key={i} className="flex items-center gap-2.5 text-fluid-small text-text-muted">
                              <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-2">
                    <Link href="/contact" className="inline-block w-full sm:w-auto">
                      <Button variant="primary" className="w-full sm:w-auto group">
                        Hire {service.title} →
                      </Button>
                    </Link>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* 3. WHY CHOOSE US */}
      <section className="section-padding bg-white border-y border-gray-200/70">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <FadeUp>
              <h2 className="text-fluid-section font-bold font-poppins text-text-main mb-3">
                Why Choose Fast Fly Delivery Service?
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {WHY_CHOOSE_US_ITEMS.map((feature, i) => (
              <StaggerItem key={i} className="h-full">
                <div className="bg-background rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-200/70 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    {feature.icon && (
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 shrink-0">
                        <feature.icon className="w-6 h-6" />
                      </div>
                    )}
                    <h3 className="text-fluid-card font-bold font-poppins text-text-main mb-3">{feature.title}</h3>
                    <p className="text-text-muted text-fluid-body leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. INDUSTRIES WE SERVE */}
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

      {/* 5. OUR SERVICE PROCESS */}
      <section className="py-10 sm:py-16 bg-background border-t border-gray-200/70">
        <div className="container-custom text-center">
          <FadeUp>
            <h2 className="text-fluid-section font-bold font-poppins text-text-main mb-8 sm:mb-12">
              Our Service Process
            </h2>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {PROCESS_STEPS.map((item, idx) => (
              <StaggerItem key={idx} className="h-full">
                <div className="bg-white rounded-2xl p-5 border border-gray-200/70 shadow-sm flex flex-col items-center text-center h-full justify-between hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center border border-primary/20 shadow-sm mb-3 shrink-0">
                    <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div className="text-accent font-bold font-poppins text-[11px] sm:text-xs uppercase tracking-wider mb-2 bg-accent/10 px-2.5 py-0.5 rounded-full border border-accent/20">
                    {item.step}
                  </div>
                  <h3 className="text-fluid-card font-bold text-text-main mb-1.5 leading-snug">{item.title}</h3>
                  <p className="text-text-muted text-[12px] sm:text-fluid-small leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="section-padding bg-white text-center">
        <div className="container-custom">
          <FadeUp className="max-w-3xl mx-auto">
            <h2 className="text-fluid-section font-bold font-poppins text-text-main mb-3 sm:mb-6">
              Ready to Grow Your Delivery Operations?
            </h2>
            <p className="text-fluid-body text-text-muted mb-8 leading-relaxed">
              Partner with Fast Fly Delivery Service for reliable rider staffing solutions across the UAE. Whether you need dedicated riders for your restaurant or delivery staff for platforms like Noon, Talabat, Careem, and Smiles, we&apos;re here to help your business succeed.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Hire Delivery Riders
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Request a Free Quote
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Contact Our Team Today
                </Button>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
