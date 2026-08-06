"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
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
      <section className="bg-primary text-white py-16 sm:py-24 md:py-32 relative overflow-hidden flex flex-col justify-center border-b border-white/10">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{ backgroundImage: "url(/hero-section.png)" }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2 pointer-events-none" />
        <div className="container-custom relative z-10 text-center">
          <FadeUp>
            <h1 className="text-fluid-page font-bold font-poppins mb-6 max-w-4xl mx-auto text-balance">
              Professional Delivery Rider Solutions Across the UAE
            </h1>
            <p className="text-fluid-body text-gray-300 max-w-[65ch] mx-auto leading-relaxed text-pretty">
              At Fast Fly Delivery Service, we provide reliable, trained, and professional delivery riders to help businesses manage their delivery operations efficiently. Whether you&apos;re a restaurant, food delivery platform, cloud kitchen, or retail business, we offer flexible rider solutions tailored to your needs.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 2. SERVICES LIST HEADER */}
      <section className="pt-16 md:pt-24 pb-8 bg-background">
        <div className="container-custom text-center">
          <FadeUp>
            <h2 className="text-fluid-section font-bold font-poppins text-text-main text-balance">
              Our Delivery Rider Services
            </h2>
          </FadeUp>
        </div>
      </section>

      {/* 3. SERVICES LIST */}
      <div className="w-full bg-background">
        {SERVICES_DATA.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={cn(
              "w-full py-16 md:py-24 border-b border-gray-100",
              index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
            )}
          >
            <div className="container-custom">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                {/* Image Side */}
                <FadeUp
                  yOffset={20}
                  className={cn(
                    "relative w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden shrink-0",
                    index % 2 !== 0 && "lg:order-2"
                  )}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={85}
                    className="object-cover"
                  />
                  {/* Subtle inner shadow for depth without hover scaling */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none rounded-2xl" />
                </FadeUp>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <FadeUp yOffset={20} delay={0.1}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex w-12 h-12 bg-primary/5 rounded-xl items-center justify-center text-primary shrink-0">
                        <service.icon className="w-6 h-6" />
                      </div>
                    </div>
                    
                    <h3 className="text-fluid-section font-bold font-poppins text-text-main leading-tight mb-2 text-balance">
                      {service.title}
                    </h3>
                    <p className="text-fluid-card text-text-muted font-medium mb-6 text-balance">
                      {service.subtitle}
                    </p>

                    <p className="text-fluid-body text-text-muted leading-relaxed mb-10 max-w-[65ch] text-pretty">
                      {service.desc}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mb-10">
                      <div>
                        <h4 className="font-semibold text-text-main mb-3">{service.listTitle1}</h4>
                        <ul className="space-y-2.5">
                          {service.list1.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-text-muted">
                              <span className="text-primary/60 mt-1 flex-shrink-0">•</span>
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {service.listTitle2 && service.list2 && (
                        <div>
                          <h4 className="font-semibold text-text-main mb-3">{service.listTitle2}</h4>
                          <ul className="space-y-2.5">
                            {service.list2.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-text-muted">
                                <span className="text-primary/60 mt-1 flex-shrink-0">•</span>
                                <span className="leading-snug">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    
                    <Link href="/contact" className="inline-flex">
                      <Button variant="primary" size="lg">Hire {service.title}</Button>
                    </Link>
                  </FadeUp>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 4. WHY CHOOSE US */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeUp>
              <h2 className="text-fluid-section font-bold font-poppins text-text-main text-balance">
                Why Choose Fast Fly Delivery Service?
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            {WHY_CHOOSE_US_ITEMS.map((feature, i) => (
              <StaggerItem key={i}>
                <div className="flex flex-col">
                  {feature.icon && (
                    <div className="w-12 h-12 text-primary mb-6">
                      <feature.icon className="w-8 h-8" />
                    </div>
                  )}
                  <h3 className="text-fluid-card font-bold font-poppins text-text-main mb-3">{feature.title}</h3>
                  <p className="text-text-muted leading-relaxed max-w-[65ch] text-pretty">{feature.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE */}
      <section className="py-20 md:py-32 bg-primary text-white relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <FadeUp className="mb-16">
            <h2 className="text-fluid-section font-bold font-poppins mb-4 text-balance">Industries We Serve</h2>
            <p className="text-white/80 text-fluid-body max-w-[65ch] mx-auto leading-relaxed text-pretty">
              We proudly provide delivery rider services for diverse business sectors across the UAE.
            </p>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-10">
            {INDUSTRY_ITEMS.map((ind, i) => (
              <StaggerItem key={i}>
                <div className="flex flex-col items-center text-center group">
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-5 bg-white/5 ring-1 ring-inset ring-white/10">
                    <Image
                      src={ind.image}
                      alt={ind.name}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 45vw, 20vw"
                      quality={75}
                      className="object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                  <h4 className="font-medium text-white/90 text-fluid-small">
                    {ind.name}
                  </h4>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. OUR SERVICE PROCESS */}
      <section className="py-20 md:py-32 bg-background border-b border-gray-100">
        <div className="container-custom text-center">
          <FadeUp className="mb-16">
            <h2 className="text-fluid-section font-bold font-poppins text-text-main text-balance">
              Our Service Process
            </h2>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
            {PROCESS_STEPS.map((item, idx) => (
              <StaggerItem key={idx} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-6 shadow-sm">
                    <span className="text-xl font-bold font-poppins text-primary">{idx + 1}</span>
                  </div>
                  <h3 className="text-fluid-card font-bold text-text-main mb-3">{item.title}</h3>
                  <p className="text-text-muted text-fluid-small leading-relaxed max-w-[35ch] mx-auto text-pretty">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 7. CALL TO ACTION */}
      <section className="py-20 md:py-32 bg-white text-center">
        <div className="container-custom">
          <FadeUp className="max-w-3xl mx-auto">
            <h2 className="text-fluid-section font-bold font-poppins text-text-main mb-6 text-balance">
              Ready to Grow Your Delivery Operations?
            </h2>
            <p className="text-fluid-body text-text-muted mb-10 leading-relaxed text-pretty max-w-[65ch] mx-auto">
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
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
