import { cn } from "@/lib/utils";
import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const BASE_STYLES =
  "inline-flex items-center justify-center rounded-xl text-[16px] font-semibold tracking-tight transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.97] cursor-pointer whitespace-nowrap";

const VARIANTS = {
  primary:
    "bg-accent hover:bg-[#e09418] text-white shadow-md hover:shadow-xl hover:-translate-y-0.5 focus:ring-accent",
  secondary:
    "bg-primary hover:bg-[#081b38] text-white shadow-md hover:shadow-xl hover:-translate-y-0.5 focus:ring-primary",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary shadow-sm hover:shadow-md",
  ghost: "text-primary hover:bg-primary/10 focus:ring-primary",
} as const;

const SIZES = {
  sm: "min-h-[48px] px-6 py-2.5",
  md: "min-h-[50px] px-7 py-3",
  lg: "min-h-[54px] px-9 py-3.5 text-[17px]",
} as const;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(BASE_STYLES, VARIANTS[variant], SIZES[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
