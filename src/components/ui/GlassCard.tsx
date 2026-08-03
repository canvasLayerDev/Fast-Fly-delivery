import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, hoverEffect = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white/80 backdrop-blur-md border border-gray-100 shadow-lg rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 transition-all duration-400 ease-out flex flex-col h-full",
          hoverEffect && "hover:shadow-2xl hover:-translate-y-1.5 hover:bg-white hover:border-gray-200",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
GlassCard.displayName = "GlassCard";
