"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { FAQItemData } from "@/types";

export function FAQItem({ question, answer }: FAQItemData) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200/80 rounded-2xl bg-white overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md hover:border-primary/30 group">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between px-6 sm:px-8 py-4.5 sm:py-5 text-left focus:outline-none cursor-pointer"
      >
        <span className="font-poppins font-semibold text-text-main text-[16px] sm:text-[18px] md:text-[19px] pr-4 leading-snug">
          {question}
        </span>
        <div
          className={`shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? "rotate-180 bg-primary text-white" : "bg-primary/5 text-primary group-hover:bg-primary/10"
          }`}
        >
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 sm:px-8 pb-5 sm:pb-6 pt-2 text-text-muted text-fluid-body leading-relaxed border-t border-gray-100/80 mt-1">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
