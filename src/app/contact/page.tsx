"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { FAQItem } from "@/components/ui/FAQItem";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FadeUp,
  SlideIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animation/AnimationWrappers";
import {
  COMPANY_INFO,
  WHY_CHOOSE_US_ITEMS,
  EMIRATES_ITEMS,
  CONTACT_FAQS,
} from "@/data";

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  companyName: z.string().min(2, "Company Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Valid phone number required"),
  businessLocation: z.string().min(2, "Location is required"),
  serviceRequired: z.string().min(1, "Please select a service"),
  numberOfRiders: z.string().min(1, "Please specify number of riders"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    void data;
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO */}
      <section className="bg-primary text-white py-10 sm:py-14 md:py-16 relative overflow-hidden min-h-[30vh] flex flex-col justify-center border-b border-white/10">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{ backgroundImage: "url(/hero-section.png)" }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2" />

        <div className="container-custom relative z-10 text-center">
          <FadeUp>
            <h2 className="text-fluid-small font-semibold text-accent uppercase tracking-wider mb-3">Contact Us</h2>
            <h1 className="text-fluid-page font-bold font-poppins mb-6">Get in Touch with Fast Fly Delivery Service</h1>
            <p className="text-fluid-body text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Looking for reliable delivery riders for your business? Whether you need dedicated riders for your restaurant, cloud kitchen, or delivery platform, our team is here to help. Contact us today to discuss your requirements and get a customized rider solution anywhere in the UAE.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* 2. CONTACT INFO & FORM */}
      <section className="section-padding bg-background border-b border-gray-200/70">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <SlideIn direction="left" className="lg:col-span-2 space-y-6 sm:space-y-8">
              <div>
                <span className="text-accent font-bold text-fluid-small uppercase tracking-wider mb-2 block">Direct Communication</span>
                <h2 className="text-fluid-section font-bold font-poppins text-text-main mb-3">Contact Information</h2>
                <p className="text-text-muted text-fluid-body leading-relaxed">
                  Connect directly with our delivery operations team in Dubai. We are available to assist with rider recruitment, platform onboarding, and custom fleet management.
                </p>
              </div>

              <div className="space-y-4">
                {/* Phone & WhatsApp Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <a
                    href={COMPANY_INFO.phoneTel}
                    className="group block p-4 sm:p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full group-hover:bg-primary/20 transition-colors">
                        Call Now
                      </span>
                    </div>
                    <h4 className="font-semibold text-text-main text-fluid-small mb-1">Phone Number</h4>
                    <p className="text-text-muted text-fluid-body font-medium group-hover:text-primary transition-colors">
                      {COMPANY_INFO.phone}
                    </p>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={COMPANY_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-4 sm:p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-emerald-500/40 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shrink-0">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-500/10 px-2.5 py-1 rounded-full group-hover:bg-emerald-500/20 transition-colors">
                        WhatsApp
                      </span>
                    </div>
                    <h4 className="font-semibold text-text-main text-fluid-small mb-1">WhatsApp Chat</h4>
                    <p className="text-text-muted text-fluid-body font-medium group-hover:text-emerald-600 transition-colors">
                      {COMPANY_INFO.phone}
                    </p>
                  </a>
                </div>

                {/* Email */}
                <a
                  href={COMPANY_INFO.emailMailto}
                  className="group block p-4 sm:p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-main text-fluid-small">Email Address</h4>
                        <p className="text-text-muted text-fluid-body font-medium group-hover:text-accent transition-colors">
                          {COMPANY_INFO.email}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-3 py-1 rounded-full shrink-0 group-hover:bg-accent/20 transition-colors hidden sm:inline-block">
                      Send Email
                    </span>
                  </div>
                </a>

                {/* Office Address */}
                <a
                  href={COMPANY_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-5 sm:p-6 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-secondary/40 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-white transition-colors duration-300 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h4 className="font-semibold text-text-main text-fluid-small">Office Address</h4>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full shrink-0 flex items-center gap-1 group-hover:bg-secondary/20 transition-colors">
                          Dubai, UAE <ExternalLink className="w-3 h-3" />
                        </span>
                      </div>
                      <p className="text-text-muted text-fluid-body font-medium leading-relaxed">
                        {COMPANY_INFO.addressLine1} <br />
                        <span className="text-text-main font-semibold">{COMPANY_INFO.addressLine2}</span>
                      </p>
                    </div>
                  </div>
                </a>

                {/* Business Hours */}
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0B2144] text-white shadow-lg relative overflow-hidden border border-white/10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="flex items-start gap-4 relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-white/10 text-accent flex items-center justify-center shrink-0 border border-white/15 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h4 className="font-semibold text-white text-fluid-small font-poppins">Business Hours</h4>
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 rounded-full shrink-0">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          Open Mon-Sat
                        </span>
                      </div>
                      <div className="space-y-1.5 text-fluid-small text-gray-200">
                        <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                          <span className="font-medium">Monday – Saturday</span>
                          <span className="font-semibold text-accent">{COMPANY_INFO.hoursMonSat}</span>
                        </div>
                        <div className="flex items-center justify-between pt-0.5 text-gray-400">
                          <span>Sunday</span>
                          <span className="font-medium text-gray-400 bg-white/5 px-2 py-0.5 rounded text-xs">{COMPANY_INFO.hoursSun}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SlideIn>

            {/* Contact Form */}
            <SlideIn direction="right" className="lg:col-span-3">
              <GlassCard className="bg-white p-6 sm:p-8 md:p-12 border-gray-200/80 shadow-xl relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />
                <h3 className="text-fluid-card font-bold font-poppins text-text-main mb-2">Request a Free Quote</h3>
                <p className="text-text-muted text-fluid-body mb-8 leading-relaxed">
                  Fill out the form below, and our team will get back to you as soon as possible.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h4 className="text-fluid-card font-bold font-poppins text-text-main mb-2">Request Submitted!</h4>
                    <p className="text-text-muted text-fluid-body mb-8 mx-auto leading-relaxed">
                      Thank you for contacting Fast Fly Delivery Service. Our team will get back to you shortly.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Send Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-fluid-small font-medium text-text-main mb-2">Full Name*</label>
                        <input
                          {...register("fullName")}
                          className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-gray-300 bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-fluid-body"
                          placeholder="John Doe"
                        />
                        {errors.fullName && <p className="text-red-500 text-fluid-small mt-1">{errors.fullName.message}</p>}
                      </div>
                      <div>
                        <label className="block text-fluid-small font-medium text-text-main mb-2">Company Name*</label>
                        <input
                          {...register("companyName")}
                          className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-gray-300 bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-fluid-body"
                          placeholder="Your Business LLC"
                        />
                        {errors.companyName && <p className="text-red-500 text-fluid-small mt-1">{errors.companyName.message}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-fluid-small font-medium text-text-main mb-2">Email Address*</label>
                        <input
                          {...register("email")}
                          type="email"
                          className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-gray-300 bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-fluid-body"
                          placeholder="john@company.com"
                        />
                        {errors.email && <p className="text-red-500 text-fluid-small mt-1">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="block text-fluid-small font-medium text-text-main mb-2">Phone Number*</label>
                        <input
                          {...register("phone")}
                          className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-gray-300 bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-fluid-body"
                          placeholder="+971 50 123 4567"
                        />
                        {errors.phone && <p className="text-red-500 text-fluid-small mt-1">{errors.phone.message}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-fluid-small font-medium text-text-main mb-2">Business Location*</label>
                        <input
                          {...register("businessLocation")}
                          className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-gray-300 bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-fluid-body"
                          placeholder="e.g. Dubai"
                        />
                        {errors.businessLocation && <p className="text-red-500 text-fluid-small mt-1">{errors.businessLocation.message}</p>}
                      </div>
                      <div>
                        <label className="block text-fluid-small font-medium text-text-main mb-2">Service Required*</label>
                        <select
                          {...register("serviceRequired")}
                          className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-gray-300 bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-fluid-body"
                        >
                          <option value="">Select Service</option>
                          <option value="Dedicated Delivery Riders">Dedicated Delivery Riders</option>
                          <option value="Noon Riders">Noon Riders</option>
                          <option value="Talabat Riders">Talabat Riders</option>
                          <option value="Careem Riders">Careem Riders</option>
                          <option value="Smiles Riders">Smiles Riders</option>
                          <option value="Restaurant Delivery Riders">Restaurant Delivery Riders</option>
                        </select>
                        {errors.serviceRequired && <p className="text-red-500 text-fluid-small mt-1">{errors.serviceRequired.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-fluid-small font-medium text-text-main mb-2">Number of Riders Required*</label>
                      <input
                        {...register("numberOfRiders")}
                        type="number"
                        className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-gray-300 bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-fluid-body"
                        placeholder="e.g. 5"
                      />
                      {errors.numberOfRiders && <p className="text-red-500 text-fluid-small mt-1">{errors.numberOfRiders.message}</p>}
                    </div>

                    <div>
                      <label className="block text-fluid-small font-medium text-text-main mb-2">Message</label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none text-fluid-body"
                        placeholder="Tell us more about your business needs..."
                      />
                    </div>

                    <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit Request"}
                    </Button>
                  </form>
                )}
              </GlassCard>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* 3. WHY CONTACT FAST FLY */}
      <section className="section-padding bg-white border-b border-gray-200/70">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <FadeUp>
              <h2 className="text-fluid-small font-semibold text-accent uppercase tracking-wider mb-2">Why Choose Us</h2>
              <h3 className="text-fluid-section font-bold font-poppins text-text-main">
                Why Contact Fast Fly Delivery Service?
              </h3>
            </FadeUp>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US_ITEMS.map((reason, idx) => (
              <StaggerItem key={idx} className="h-full">
                <div className="bg-background rounded-2xl p-6 border border-gray-200/70 flex items-start gap-4 h-full shadow-sm hover:shadow-md transition-all duration-300">
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

      {/* 4. AREAS WE SERVE */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white relative overflow-hidden border-b border-gray-200/70">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <FadeUp>
              <div className="text-accent font-bold text-[12px] sm:text-[13px] tracking-[0.35em] uppercase mb-2 font-poppins">
                U A E &nbsp; C O V E R A G E
              </div>
              <h2 className="text-fluid-section font-extrabold font-poppins text-gray-900 mb-3 tracking-tight">
                Areas We Serve
              </h2>
              <p className="text-fluid-body text-gray-600 leading-relaxed">
                We proudly provide delivery rider services across the UAE, including:
              </p>
            </FadeUp>
          </div>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
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

      {/* 5. FAQ SECTION */}
      <section className="section-padding bg-background border-y border-gray-200/70 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <FadeUp>
              <h2 className="text-fluid-small font-semibold text-accent uppercase tracking-wider mb-3">Have Questions?</h2>
              <h3 className="text-fluid-section font-bold font-poppins text-text-main mb-3">
                Frequently Asked Questions
              </h3>
            </FadeUp>
          </div>

          <div className="space-y-3.5 sm:space-y-4 max-w-5xl mx-auto">
            {CONTACT_FAQS.map((faq, idx) => (
              <FadeUp key={idx} delay={idx * 0.05}>
                <FAQItem question={faq.question} answer={faq.answer} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA BANNER */}
      <section className="relative overflow-hidden py-12 sm:py-16 flex flex-col justify-center items-center text-center text-white border-t border-white/10">
        <Image
          src="/background.png"
          alt="Fast Fly Delivery Background"
          fill
          loading="lazy"
          sizes="100vw"
          quality={75}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0D2C5A]/60 pointer-events-none" />

        <div className="container-custom relative z-10 max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="text-fluid-section font-bold font-poppins text-white leading-tight mb-4">
              Let&apos;s Grow Your Delivery Business Together
            </h2>

            <p className="text-fluid-body text-gray-200 mb-8 leading-relaxed">
              At Fast Fly Delivery Service, we&apos;re committed to providing dependable rider solutions that help businesses deliver faster and serve customers better. Get in touch with us today to discuss your requirements and receive a customized quote.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
              <a href={COMPANY_INFO.phoneTel} className="w-full sm:w-auto">
                <div className="w-full sm:w-auto min-h-[48px] px-8 rounded-xl font-bold text-[#0D2C5A] bg-white hover:bg-amber-400 hover:text-[#0D2C5A] transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl border-2 border-white cursor-pointer">
                  <Phone className="w-5 h-5 text-accent fill-accent shrink-0" />
                  <span className="text-[16px]">Call Us Today: {COMPANY_INFO.phone}</span>
                </div>
              </a>

              <Link href="/contact" className="w-full sm:w-auto">
                <div className="w-full sm:w-auto min-h-[48px] px-8 rounded-xl font-bold text-white bg-accent hover:bg-amber-500 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl cursor-pointer">
                  <span className="text-[16px]">Get a Free Quote →</span>
                </div>
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
