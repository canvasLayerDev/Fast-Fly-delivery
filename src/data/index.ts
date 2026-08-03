import {
  Bike,
  Package,
  Store,
  Building2,
  Users,
  Briefcase,
  ShieldCheck,
  Award,
  Lock,
  Smile,
  Zap,
  ShieldAlert,
  Sparkles,
  Shield,
  Clock,
  ThumbsUp,
  MapPin,
  ClipboardList,
  UserCheck,
  FileCheck,
  Rocket,
} from "lucide-react";
import type {
  NavLink,
  IndustryItem,
  CoreValueItem,
  WhyChooseItem,
  ServiceItem,
  EmirateItem,
  FAQItemData,
  ProcessStep,
} from "@/types";

export const COMPANY_INFO = {
  name: "Fast Fly Delivery Service",
  phone: "+971 52 140 2268",
  phoneTel: "tel:+971521402268",
  email: "Fastfly2002@gmail.com",
  emailMailto: "mailto:Fastfly2002@gmail.com",
  whatsappUrl: "https://wa.me/971521402268",
  addressLine1: "International City, Dubai",
  addressLine2: "Opposite Morocco Cluster",
  mapsUrl: "https://maps.google.com/?q=International+City+Dubai+Morocco+Cluster",
  hoursMonSat: "8:00 AM – 8:00 PM",
  hoursSun: "Closed",
} as const;

export const NAV_LINKS: readonly NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export const INDUSTRY_ITEMS: readonly IndustryItem[] = [
  { name: "Restaurants", image: "/industries/restaurants.jpg" },
  { name: "Cafes", image: "/industries/cafes.jpg" },
  { name: "Cloud Kitchens", image: "/industries/cloud_kitchens.jpg" },
  { name: "Grocery Stores", image: "/industries/grocery_stores.jpg" },
  { name: "Supermarkets", image: "/industries/supermarkets.jpg" },
  { name: "Retail Businesses", image: "/industries/retail.jpg" },
  { name: "E-commerce Companies", image: "/industries/ecommerce.jpg" },
  { name: "Pharmacies", image: "/industries/pharmacies.jpg" },
  { name: "Food Delivery Platforms", image: "/industries/food_delivery.jpg" },
  { name: "Logistics Companies", image: "/industries/logistics.jpg" },
];

export const EMIRATES_ITEMS: readonly EmirateItem[] = [
  { name: "Dubai", image: "/emirates/dubai.jpg" },
  { name: "Abu Dhabi", image: "/emirates/abu_dhabi.jpg" },
  { name: "Sharjah", image: "/emirates/sharjah.jpg" },
  { name: "Ajman", image: "/emirates/ajman.jpg" },
  { name: "Ras Al Khaimah", image: "/emirates/ras_al_khaimah.jpg" },
  { name: "Fujairah", image: "/emirates/fujairah.jpg" },
  { name: "Umm Al Quwain", image: "/emirates/umm_al_quwain.jpg" },
  { name: "Al Ain", image: "/emirates/al_ain.jpg" },
];

export const CORE_VALUES: readonly CoreValueItem[] = [
  {
    title: "Reliability",
    tagline: "Dependable Service",
    desc: "Consistent, punctual, and reliable delivery performance you can count on 7 days a week.",
    icon: ShieldCheck,
    color: "text-emerald-400 bg-emerald-500/15 border-emerald-500/30",
  },
  {
    title: "Professionalism",
    tagline: "Trained & Uniformed",
    desc: "Polite, well-trained riders who represent your business with total professionalism.",
    icon: Award,
    color: "text-amber-400 bg-amber-500/15 border-amber-500/30",
  },
  {
    title: "Integrity",
    tagline: "Honest & Transparent",
    desc: "Complete honesty, clear service agreements, and ethical operations across all channels.",
    icon: Lock,
    color: "text-blue-400 bg-blue-500/15 border-blue-500/30",
  },
  {
    title: "Customer Satisfaction",
    tagline: "Delivering Delight",
    desc: "Putting your customers first with swift, careful, and courteous door-to-door delivery.",
    icon: Smile,
    color: "text-pink-400 bg-pink-500/15 border-pink-500/30",
  },
  {
    title: "Efficiency",
    tagline: "Fast & Streamlined",
    desc: "Optimized route planning and fast deployment to minimize delays and boost order volume.",
    icon: Zap,
    color: "text-yellow-400 bg-yellow-500/15 border-yellow-500/30",
  },
  {
    title: "Safety",
    tagline: "Strict Standards",
    desc: "Uncompromising adherence to UAE traffic rules, helmet safety, and vehicle maintenance.",
    icon: ShieldAlert,
    color: "text-teal-400 bg-teal-500/15 border-teal-500/30",
  },
  {
    title: "Commitment to Excellence",
    tagline: "Continuous Quality",
    desc: "Relentless focus on quality improvement, rider welfare, and service innovation.",
    icon: Sparkles,
    color: "text-purple-400 bg-purple-500/15 border-purple-500/30",
  },
];

export const WHY_CHOOSE_US_ITEMS: readonly WhyChooseItem[] = [
  {
    title: "Experienced & Professional Riders",
    desc: "Our riders are trained to deliver orders safely, efficiently, and on time.",
    icon: Shield,
  },
  {
    title: "Fast Rider Deployment",
    desc: "We quickly assign riders based on your business requirements to minimize downtime.",
    icon: Clock,
  },
  {
    title: "Flexible Hiring Solutions",
    desc: "Whether you need one rider or an entire delivery team, we provide scalable staffing options.",
    icon: Briefcase,
  },
  {
    title: "UAE Wide Coverage",
    desc: "Our services are available across all major emirates, ensuring reliable support wherever your business operates.",
    icon: MapPin,
  },
  {
    title: "Reliable Customer Support",
    desc: "Our dedicated support team is always available to assist with your rider and delivery requirements.",
    icon: Users,
  },
  {
    title: "Business Focused Solutions",
    desc: "We understand your operational needs and provide customized rider solutions that help improve delivery performance and customer satisfaction.",
    icon: ThumbsUp,
  },
];

export const SERVICES_DATA: readonly ServiceItem[] = [
  {
    id: "dedicated-riders",
    title: "Dedicated Delivery Riders",
    subtitle: "Reliable Riders Exclusively for Your Business",
    desc: "Our dedicated rider service is ideal for businesses that require full-time or long-term delivery support. We provide trained riders who work exclusively for your company, ensuring consistent, fast, and professional deliveries.",
    icon: Bike,
    image: "/services/dedicated_riders.png",
    listTitle1: "What's Included",
    list1: ["Full-Time Dedicated Riders", "Professional & Experienced Staff", "Flexible Hiring Plans", "Timely Deliveries", "Reliable Service"],
    listTitle2: "Best For:",
    list2: ["Restaurants", "Cloud Kitchens", "Grocery Stores", "Retail Businesses", "E-commerce Companies"],
  },
  {
    id: "noon-riders",
    title: "Noon Delivery Riders",
    subtitle: "Professional Riders for Noon Partners",
    desc: "We provide experienced delivery riders for businesses operating on the Noon platform. Our riders help ensure smooth order fulfillment and timely customer deliveries.",
    icon: Package,
    image: "/services/noon_riders.png",
    listTitle1: "Benefits",
    list1: ["Quick Rider Deployment", "Reliable Delivery Support", "Flexible Staffing", "Professional Service"],
    listTitle2: null,
    list2: null,
  },
  {
    id: "talabat-riders",
    title: "Talabat Delivery Riders",
    subtitle: "Reliable Rider Solutions for Talabat Businesses",
    desc: "Fast Fly Delivery Service supplies trained riders to restaurants and businesses working with Talabat. Our riders help improve delivery efficiency and customer satisfaction.",
    icon: Store,
    image: "/services/talabat_riders.png",
    listTitle1: "Features",
    list1: ["Experienced Riders", "Fast Deliveries", "Flexible Staffing", "Dedicated Support"],
    listTitle2: null,
    list2: null,
  },
  {
    id: "careem-riders",
    title: "Careem Delivery Riders",
    subtitle: "Professional Riders for Careem Delivery Operations",
    desc: "We offer qualified delivery riders for businesses partnered with Careem. Whether you need a single rider or a complete delivery team, we have the right solution for your business.",
    icon: Building2,
    image: "/services/careem_riders.png",
    listTitle1: "Why Choose Our Careem Riders?",
    list1: ["Professional Riders", "Fast Onboarding", "Reliable Deliveries", "Business Focused Solutions"],
    listTitle2: null,
    list2: null,
  },
  {
    id: "smiles-riders",
    title: "Smiles Delivery Riders",
    subtitle: "Trusted Rider Services for Smiles Delivery",
    desc: "Our trained riders help businesses fulfill Smiles delivery orders efficiently while maintaining high service standards and customer satisfaction.",
    icon: Users,
    image: "/services/smiles_riders.png",
    listTitle1: "Advantages",
    list1: ["Experienced Delivery Riders", "Timely Order Fulfillment", "Flexible Hiring Options", "Reliable Support"],
    listTitle2: null,
    list2: null,
  },
  {
    id: "restaurant-riders",
    title: "Restaurant Delivery Riders",
    subtitle: "Dedicated Riders for Restaurants & Cloud Kitchens",
    desc: "We provide professional delivery riders for restaurants, cafes, bakeries, cloud kitchens, and food businesses across the UAE.",
    icon: Store,
    image: "/services/restaurant_riders.png",
    listTitle1: "Perfect For",
    list1: ["Restaurants", "Cafes", "Fast Food Chains", "Cloud Kitchens", "Bakeries", "Dessert Shops", "Pizza Outlets"],
    listTitle2: null,
    list2: null,
  },
  {
    id: "rider-outsourcing",
    title: "Rider Outsourcing Services",
    subtitle: "Flexible Staffing Solutions for Every Business",
    desc: "Managing an in-house delivery team can be expensive and time-consuming. Our rider outsourcing service allows businesses to scale delivery operations without the burden of recruitment, training, and workforce management.",
    icon: Briefcase,
    image: "/services/rider_outsourcing.png",
    listTitle1: "Benefits",
    list1: ["Cost-Effective Solution", "Flexible Staffing", "Professional Riders", "Quick Deployment", "Hassle-Free Management"],
    listTitle2: null,
    list2: null,
  },
];

export const PROCESS_STEPS: readonly ProcessStep[] = [
  { step: "Step 1", title: "Share Your Requirements", desc: "Tell us the number of riders and your business needs.", icon: ClipboardList },
  { step: "Step 2", title: "Rider Selection", desc: "We assign trained and experienced riders based on your requirements.", icon: UserCheck },
  { step: "Step 3", title: "Quick Onboarding", desc: "Our team completes the onboarding process efficiently.", icon: FileCheck },
  { step: "Step 4", title: "Start Delivering", desc: "Your riders begin operations, ensuring fast, reliable, and professional deliveries.", icon: Rocket },
];

export const HOME_FAQS: readonly FAQItemData[] = [
  {
    question: "Do you provide dedicated delivery riders?",
    answer: "Yes. We provide dedicated riders for restaurants, cloud kitchens, grocery stores, retail businesses, and other organizations across the UAE.",
  },
  {
    question: "Which delivery platforms do you support?",
    answer: "We provide rider solutions for Noon, Talabat, Careem, Smiles, and businesses requiring dedicated delivery staff.",
  },
  {
    question: "Can I hire multiple riders for my business?",
    answer: "Yes. Whether you need a single rider or a large team, we offer scalable staffing solutions.",
  },
  {
    question: "Which areas do you serve?",
    answer: "We provide rider services across all major emirates in the UAE, including Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain, and Al Ain.",
  },
  {
    question: "How quickly can riders be deployed?",
    answer: "Deployment depends on your requirements, but we aim to onboard and assign riders as quickly as possible to minimize operational delays.",
  },
];

export const CONTACT_FAQS: readonly FAQItemData[] = [
  {
    question: "How quickly can you provide delivery riders?",
    answer: "We aim to deploy trained delivery riders as quickly as possible, depending on your business requirements and location.",
  },
  {
    question: "Can I hire riders for my restaurant only?",
    answer: "Yes. We provide dedicated delivery riders for restaurants, cafes, cloud kitchens, and food businesses.",
  },
  {
    question: "Do you provide riders for delivery platforms?",
    answer: "Yes. We offer professional riders for Noon, Talabat, Careem, and Smiles, along with dedicated rider solutions for businesses.",
  },
  {
    question: "Do you serve all Emirates in the UAE?",
    answer: "Yes. Our rider services are available across all major Emirates, ensuring reliable and timely support for businesses throughout the UAE.",
  },
];

export const OFFERINGS_LIST: readonly string[] = [
  "Dedicated Delivery Riders",
  "Noon Delivery Riders",
  "Talabat Delivery Riders",
  "Careem Delivery Riders",
  "Smiles Delivery Riders",
  "Restaurant Delivery Riders",
  "Rider Outsourcing Solutions",
  "Flexible Staffing Services",
];
