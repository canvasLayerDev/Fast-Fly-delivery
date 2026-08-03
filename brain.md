# 🧠 BRAIN.MD — Fast Fly Delivery Service Master Project Specification & Architecture

Welcome to the definitive architecture and operational documentation for the **Fast Fly Delivery Service** website. This document details every layer of the application—from business domain rules and tech stack to file structures, design tokens, component breakdown, page layouts, interactive logic, and deployment scripts.

---

## 📑 Table of Contents
1. [Executive Overview & Business Context](#1-executive-overview--business-context)
2. [Technology Stack & Dependencies](#2-technology-stack--dependencies)
3. [Project Directory & File Structure](#3-project-directory--file-structure)
4. [Design System & Theme Specifications](#4-design-system--theme-specifications)
5. [Animation & Micro-Interaction Engine](#5-animation--micro-interaction-engine)
6. [Global Layout & Shell Structure](#6-global-layout--shell-structure)
7. [Page-by-Page Architectural Breakdown](#7-page-by-page-architectural-breakdown)
   - [7.1 Home Page (`/`)](#71-home-page-)
   - [7.2 About Us Page (`/about`)](#72-about-us-page-about)
   - [7.3 Services Page (`/services`)](#73-services-page-services)
   - [7.4 Contact Us Page (`/contact`)](#74-contact-us-page-contact)
8. [Core Reusable Component Library](#8-core-reusable-component-library)
9. [Data Models & Form Validation](#9-data-models--form-validation)
10. [Public Assets & Image Assets Catalog](#10-public-assets--image-assets-catalog)
11. [Development & Build Scripts](#11-development--build-scripts)

---

## 1. Executive Overview & Business Context

**Fast Fly Delivery Service** is a premier B2B rider outsourcing and delivery logistics company operating across all 7 Emirates in the United Arab Emirates (UAE). The platform targets restaurants, cloud kitchens, retail businesses, e-commerce providers, and major delivery platform merchants who require dedicated, trained, and verified delivery fleets.

### Core Business Pillars:
* **Dedicated Rider Supply**: Supplying full-time or long-term delivery riders exclusively for client operations.
* **Platform Specialist Fleets**: Providing customized rider solutions for UAE's leading delivery platforms (**Noon**, **Talabat**, **Careem**, and **Smiles**).
* **Flexible Staffing & Outsourcing**: Eliminating recruitment, visa management, training, and operational overhead for partner clients.
* **UAE-Wide Coverage**: Operating in Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain, and Al Ain.
* **Primary Contact Details**:
  * **Office**: International City, Dubai (Opposite Morocco Cluster)
  * **Phone / WhatsApp**: [+971 52 140 2268](tel:+971521402268)
  * **Email**: [Fastfly2002@gmail.com](mailto:Fastfly2002@gmail.com)

---

## 2. Technology Stack & Dependencies

The project is built on the modern React/Next.js ecosystem, optimized for high performance, fluid responsiveness, SEO, accessibility, and sleek visual design.

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | Next.js 16.2 (App Router) | React framework utilizing modern App Router architecture, server/client components, and font optimization. |
| **UI Library** | React 19.2 | Client component rendering and hooks (`useState`, `useEffect`, `forwardRef`). |
| **Language** | TypeScript 5 | Full static typing across components, props, forms, and schemas. |
| **Styling** | Tailwind CSS v4 & CSS Variables | Utility-first CSS engine with `@theme` configurations and CSS custom properties for fluid typography. |
| **Animations** | Framer Motion v12 | GPU-accelerated scroll reveals, scale reveals, line splits, and animated FAQ accordions. |
| **Icons** | Lucide React | Lightweight vector icons (`Bike`, `Package`, `ShieldCheck`, `Store`, `MapPin`, `Phone`, `Mail`, etc.). |
| **Forms & Validation** | React Hook Form v7 + Zod v4 | Type-safe form handling with schema validation and error messaging. |
| **Utilities** | `clsx` & `tailwind-merge` | Conditional classname merging helper via `@/lib/utils`. |

---

## 3. Project Directory & File Structure

Below is the complete file layout of the codebase located under [Fast-Fly-delivery](file:///d:/fast-fly/Fast-Fly-delivery):

```
Fast-Fly-delivery/
├── public/                               # Static image assets & platform banners
│   ├── logo.svg                          # Primary brand SVG logo
│   ├── logo.png                          # PNG fallback logo
│   ├── hero-section.png                  # Main Hero banner image
│   ├── deliveryboy3.png                  # About/Feature section delivery rider photo
│   ├── partner_cta.png                   # CTA banner image
│   └── services/                         # Service card background imagery
│       ├── careem_riders.png             # Careem rider service card image
│       ├── dedicated_riders.png          # Dedicated rider service card image
│       ├── noon_riders.png               # Noon rider service card image
│       ├── restaurant_riders.png         # Restaurant rider service card image
│       ├── rider_outsourcing.png         # Outsourcing service card image
│       ├── smiles_riders.png             # Smiles rider service card image
│       └── talabat_riders.png            # Talabat rider service card image
├── src/
│   ├── app/                              # Next.js App Router routes & layouts
│   │   ├── layout.tsx                    # Root shell layout with Navbar, Footer & Fonts
│   │   ├── globals.css                   # Tailwind v4 theme setup, fluid scale & 120px section padding
│   │   ├── page.tsx                      # Homepage component
│   │   ├── about/
│   │   │   └── page.tsx                  # About Us page component
│   │   ├── services/
│   │   │   └── page.tsx                  # Our Services page component
│   │   └── contact/
│   │       └── page.tsx                  # Contact Us & Free Quote page component
│   ├── components/                       # Reusable React components
│   │   ├── FloatingContactButtons.tsx    # Fixed WhatsApp & Email quick-access widgets
│   │   ├── animation/
│   │   │   └── AnimationWrappers.tsx     # Reusable Framer Motion scroll animation wrappers
│   │   ├── layout/
│   │   │   ├── Navbar.tsx                # Sticky header navbar with mobile drawer
│   │   │   └── Footer.tsx                # Multi-column brand footer with social links
│   │   └── ui/
│   │       ├── Button.tsx                # 48-54px height luxury button system
│   │       └── GlassCard.tsx             # Glassmorphism container component
│   └── lib/
│       └── utils.ts                      # `cn()` class merging utility
├── package.json                          # Dependencies & NPM scripts
├── tsconfig.json                         # TypeScript compiler configuration
└── next.config.ts                        # Next.js build options
```

---

## 4. Design System & Theme Specifications

The site uses a custom color palette, strict section padding scale, and fluid typography system defined in [globals.css](file:///d:/fast-fly/Fast-Fly-delivery/src/app/globals.css).

### Color Tokens

| Token | Hex Value | Semantic Purpose |
| :--- | :--- | :--- |
| `--color-primary` | `#0D2C5A` | Deep Navy Blue — Used for header, primary footers, dark section banners, and text highlights. |
| `--color-secondary` | `#4EA7D9` | Sky Blue — Used for secondary accents, icons, and focus states. |
| `--color-accent` | `#F6A623` | Warm Amber / Gold — Primary call-to-action color, highlight text, and badges. |
| `--color-background` | `#F8FAFC` | Light Slate Gray — Soft background color for page sections. |
| `--color-card` | `#FFFFFF` | Pure White — Card container backgrounds. |
| `--color-text-main` | `#111827` | Almost Black — Primary body headings & body text. |
| `--color-text-muted` | `#4B5563` | Slate Gray — Subtitles, paragraphs, and secondary information. |
| `--color-border` | `#E5E7EB` | Soft Gray — Structural dividing lines and container borders. |

### Layout & Container Grid System
* **Max Container Width**: `1280px` (`max-w-[1280px]` / `.container-custom`).
* **Section Padding Scale**:
  * **Desktop**: `120px` top & bottom (`7.5rem`)
  * **Tablet**: `90px` top & bottom (`5.625rem`)
  * **Mobile**: `70px` top & bottom (`4.375rem`)
* **Paragraph Width**: Capped at `70 characters` (`max-w-[70ch]` / `750px`) for optimal readability.

### Typography Scale (Strict Clamp Range)

* **Hero Title** (`--text-hero`): `clamp(2.5rem, 4vw + 1rem, 4rem)` (40px - 64px, 700 weight, line height 1.1)
* **Page Heading** (`--text-page`): `clamp(2.25rem, 2.5vw + 1rem, 3rem)` (36px - 48px, 700 weight, line height 1.15)
* **Section Heading** (`--text-section`): `clamp(1.875rem, 2vw + 1rem, 2.625rem)` (30px - 42px, 700 weight, line height 1.2)
* **Card Heading** (`--text-card`): `clamp(1.25rem, 0.5vw + 1rem, 1.5rem)` (20px - 24px, 600 weight, line height 1.3)
* **Body Text** (`--text-body`): `clamp(1.0625rem, 0.25vw + 1rem, 1.125rem)` (17px - 18px, line height 1.7)
* **Small Text** (`--text-small`): `clamp(0.9375rem, 0.2vw + 0.875rem, 1rem)` (15px - 16px, line height 1.6)
* **Button Text** (`--text-button`): `16px` constant (`1rem`, 600 weight)

---

## 5. Animation & Micro-Interaction Engine

Encapsulated in [AnimationWrappers.tsx](file:///d:/fast-fly/Fast-Fly-delivery/src/components/animation/AnimationWrappers.tsx), all scroll triggers enforce `viewport={{ once: true }}` to eliminate scroll glitches and maximize Lighthouse scores:

* **`FadeUp`**: Smooth vertical translation (`y: 30px -> 0px`) with duration `1.2s` and cubic-bezier curve `[0.215, 0.61, 0.355, 1]`.
* **`ImageReveal`**: Scroll reveal with opacity `0 -> 1` and scale `1.08 -> 1` over `1.3s` duration. Paired with CSS image hover zoom (`1 -> 1.03`).
* **`SlideIn`**: Left/Right slide-in (`x: -40px/+40px -> 0px`).
* **`StaggerContainer` & `StaggerItem`**: Staggered card reveals with `0.1s` delay intervals.
* **`ButtonReveal`**: Fade-up + scale animation (`scale: 0.95 -> 1`).

---

## 6. Global Layout & Shell Structure

Defined in [layout.tsx](file:///d:/fast-fly/Fast-Fly-delivery/src/app/layout.tsx), the root shell encapsulates all pages with unified navigation, fonts, and floating quick-contact buttons.

```tsx
<html lang="en" className={`${inter.variable} ${poppins.variable} h-full antialiased`}>
  <body className="min-h-full flex flex-col font-sans text-text-main bg-background pt-20">
    <Navbar />
    <main className="flex-1">
      {children}
      <FloatingContactButtons />
    </main>
    <Footer />
  </body>
</html>
```

### Global Elements Breakdown:
1. **[Navbar.tsx](file:///d:/fast-fly/Fast-Fly-delivery/src/components/layout/Navbar.tsx)**:
   - Sticky header fixed at `top-0` with `backdrop-blur-xl`.
   - Listens to scroll events (`window.scrollY > 20`) to switch between semi-transparent and solid white glass background with shadow.
   - 1280px max-width container with 48px touch-target CTA button.
2. **[Footer.tsx](file:///d:/fast-fly/Fast-Fly-delivery/src/components/layout/Footer.tsx)**:
   - 4-column dark primary theme layout (`bg-primary text-white`).
   - 120px desktop padding (`pt-[clamp(4.375rem,6vw,7.5rem)]`).
   - Quick Navigation links, Service deep links, direct location address, telephone (`+971 52 140 2268`), and email links (`Fastfly2002@gmail.com`).
3. **[FloatingContactButtons.tsx](file:///d:/fast-fly/Fast-Fly-delivery/src/components/FloatingContactButtons.tsx)**:
   - Fixed at `right-6 bottom-6 z-50`.
   - Green WhatsApp quick button (`https://wa.me/971521402268`).
   - Blue Email mailto button (`mailto:Fastfly2002@gmail.com`).

---

## 7. Page-by-Page Architectural Breakdown

### 7.1 Home Page (`/`)
* **File Location**: [page.tsx](file:///d:/fast-fly/Fast-Fly-delivery/src/app/page.tsx)
* **Features**:
  - Hero Section: 60-64px line-split heading, 17-18px body paragraph (max 70ch), 48px dual CTAs, staggered feature bar.
  - Full-bleed edge-to-edge mobile image container breakout (`w-screen left-1/2 -ml-[50vw] -mr-[50vw]`) with aspect-square breathe and clean photo surface (statistics overlay card removed).
  - Industries Grid: 10 industry categories rendered as square 1:1 ratio image containers (`aspect-square`, `gap-2.5 sm:gap-6`) with max-width photo scale and full clarity on mobile.
  - Why Businesses Trust Us & CTA Section: Full-bleed edge-to-edge mobile container cards (`-mx-5 sm:mx-0 w-[calc(100%+2.5rem)]`) with `p-6` mobile breathe, 7 trust points, and 48px dual CTAs.
  - Services Section: 6 grid cards featuring full-bleed edge-to-edge mobile container width (`-mx-5 sm:mx-0 w-[calc(100%+2.5rem)]`) with `p-6` mobile breathe, `w-12 h-12` icon boxes, and `sm:grid-cols-2 lg:grid-cols-3` layout.
  - UAE Coverage Grid: Dedicated section styled matching Featured Destinations card layout, featuring clean symmetrical 1:1 square ratio images (no photo text overlays), and city names with "Explore" action buttons placed underneath.
  - Interactive FAQ Accordion using Framer Motion `AnimatePresence`.

### 7.2 About Us Page (`/about`)
* **File Location**: [about/page.tsx](file:///d:/fast-fly/Fast-Fly-delivery/src/app/about/page.tsx)
* **Features**:
  - 48px Page Header Banner.
  - Mission & Vision Cards: Full-bleed edge-to-edge mobile container width (`-mx-5 sm:mx-0 w-[calc(100%+2.5rem)]`) with `p-6 sm:p-10 md:p-12` breathe and elevated hover animations.
  - 8-Item What We Offer Grid: 2-column mobile grid layout (`grid-cols-2 lg:grid-cols-4`, `p-3.5 sm:p-5`) with responsive line height (`leading-snug`) and compact checkmark icons (`w-4 h-4`).
  - Partner CTA Banner: Full-bleed edge-to-edge mobile container (`-mx-5 sm:mx-0 w-[calc(100%+2.5rem)]`) with full aspect-square image breathe (`/partner_cta.png`) and full-width CTA button.

### 7.3 Services Page (`/services`)
* **File Location**: [services/page.tsx](file:///d:/fast-fly/Fast-Fly-delivery/src/app/services/page.tsx)
* **Features**:
  - 7 Service Offerings with deep-link anchors (`#dedicated-riders`, `#noon-riders`, `#talabat-riders`, `#careem-riders`, `#smiles-riders`, `#restaurant-riders`, `#rider-outsourcing`).
  - Ultra-compact responsive section vertical padding (`clamp(1.25rem, 3vw, 3.25rem)` = 20px mobile / 52px desktop) eliminating dead space between adjacent sections site-wide.

### 7.4 Contact Us Page (`/contact`)
* **File Location**: [contact/page.tsx](file:///d:/fast-fly/Fast-Fly-delivery/src/app/contact/page.tsx)
* **Features**:
  - 5-Column layout (2-column info cards + 3-column interactive form).
  - 48px input field touch targets with Zod schema validation.
  - Full-width UAE Coverage 2-column mobile grid (`grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6 lg:gap-8`) with symmetrical 1:1 square ratio image cards and clean centered city names underneath.

---

## 8. Core Reusable Component Library

### 8.1 `Button` Component
* **File Location**: [Button.tsx](file:///d:/fast-fly/Fast-Fly-delivery/src/components/ui/Button.tsx)
* **Styles**: Enforces 48–54px touch target heights, 16px text, `rounded-xl`, active scale `active:scale-[0.97]`.

### 8.2 `GlassCard` Component
* **File Location**: [GlassCard.tsx](file:///d:/fast-fly/Fast-Fly-delivery/src/components/ui/GlassCard.tsx)
* **Styles**: Backdrop blur `backdrop-blur-md`, `rounded-3xl`, equal-height layout support (`h-full flex flex-col`), hover translation `-translate-y-1.5`.

---

## 9. Data Models & Form Validation

Defined in [contact/page.tsx](file:///d:/fast-fly/Fast-Fly-delivery/src/app/contact/page.tsx#L22-L33):

```typescript
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
```

---

## 10. Public Assets & Image Assets Catalog

All static media assets are located in [public](file:///d:/fast-fly/Fast-Fly-delivery/public):

* **Brand Assets**: [logo.svg](file:///d:/fast-fly/Fast-Fly-delivery/public/logo.svg), [logo.png](file:///d:/fast-fly/Fast-Fly-delivery/public/logo.png), [favicon.ico](file:///d:/fast-fly/Fast-Fly-delivery/src/app/favicon.ico).
* **Banners**: [hero-section.png](file:///d:/fast-fly/Fast-Fly-delivery/public/hero-section.png), [deliveryboy3.png](file:///d:/fast-fly/Fast-Fly-delivery/public/deliveryboy3.png), [partner_cta.png](file:///d:/fast-fly/Fast-Fly-delivery/public/partner_cta.png).
* **Service Images**: `dedicated_riders.png`, `noon_riders.png`, `talabat_riders.png`, `careem_riders.png`, `smiles_riders.png`, `restaurant_riders.png`, `rider_outsourcing.png`.

---

## 11. Development & Build Scripts

```bash
# Start local development server (http://localhost:3000)
npm run dev

# Production build compilation
npm run build

# Start production server
npm run start

# ESLint code check
npm run lint
```

---
*Brain.md compiled and verified for Fast Fly Delivery Service codebase.*
