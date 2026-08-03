"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

// 1. Text Fade Up (30px translate, 1.2s duration)
interface FadeUpProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  once?: boolean;
  className?: string;
}

export const FadeUp: React.FC<FadeUpProps> = ({
  children,
  delay = 0,
  duration = 1.0,
  yOffset = 50,
  once = false,
  className,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};


// 2. Image Reveal (Opacity 0 -> 1, Scale 1.08 -> 1, 1.3s duration, power3 ease)
interface ImageRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  hoverScale?: boolean;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  children,
  delay = 0,
  className,
  hoverScale = true,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.08 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 1.3,
        delay,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      className={cn("overflow-hidden rounded-2xl md:rounded-3xl", className)}
      {...props}
    >
      <div
        className={cn(
          "w-full h-full transition-all duration-500 ease-out",
          hoverScale && "hover:scale-[1.03]"
        )}
      >
        {children}
      </div>
    </motion.div>
  );
};

// 3. Slide From Left / Right
interface SlideInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  direction?: "left" | "right";
  delay?: number;
  className?: string;
}

export const SlideIn: React.FC<SlideInProps> = ({
  children,
  direction = "left",
  delay = 0,
  className,
  ...props
}) => {
  const xOffset = direction === "left" ? -40 : 40;
  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 1.1,
        delay,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// 4. Stagger Container & Stagger Item (0.1s stagger)
export const StaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}> = ({ children, className, staggerDelay = 0.1 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.9,
            ease: [0.215, 0.61, 0.355, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 5. Button Reveal (Fade Up + Scale 0.95 -> 1)
export const ButtonReveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 6. Section Scroll Upward Reveal (Downward to Upward motion on scroll)
interface ScrollSectionRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  id?: string;
  once?: boolean;
}

export const ScrollSectionReveal: React.FC<ScrollSectionRevealProps> = ({
  children,
  delay = 0,
  duration = 1.0,
  yOffset = 70,
  className,
  id,
  once = false,
  ...props
}) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.15 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};


