"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle, Sparkles } from "lucide-react";

export default function FloatingWidgets() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showWidgets, setShowWidgets] = useState(false);
  const [whatsappHovered, setWhatsappHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollPercentage(Math.min(100, Math.max(0, currentProgress)));
        setShowWidgets(window.scrollY > 300);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG circle calculation
  const strokeDashoffset = 100 - scrollPercentage;

  return (
    <AnimatePresence>
      {showWidgets && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3 pointer-events-auto"
        >
          {/* WHATSAPP AUTOMATED DIRECT CHAT FAB */}
          <div className="relative group">
            <a
              href="https://wa.me/919581331113?text=Hi%20Abhishek%2C%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20creative%20project!"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setWhatsappHovered(true)}
              onMouseLeave={() => setWhatsappHovered(false)}
              className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 relative group overflow-hidden"
              aria-label="Direct WhatsApp Inquiry"
            >
              <MessageCircle className="w-6 h-6 fill-white stroke-none" />
              <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-white ring-2 ring-[#25D366] flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              </span>
            </a>

            {/* HOVER TOOLTIP PILL */}
            <AnimatePresence>
              {whatsappHovered && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="absolute right-14 top-1.5 bg-[#111111] text-white font-mono-meta text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl border border-zinc-800 flex items-center gap-2 pointer-events-none"
                >
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span>Quick WhatsApp Inquiry</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CIRCULAR PROGRESS SCROLL-TO-TOP BUTTON */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-[#E5E5E0] shadow-card hover:shadow-lift hover:scale-105 transition-all duration-300 flex items-center justify-center relative group"
            aria-label="Scroll back to top"
          >
            {/* SVG CIRCLE PROGRESS RING */}
            <svg className="w-12 h-12 absolute inset-0 transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-[#E5E5E0]"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-[#FFB800] transition-all duration-150"
                strokeDasharray="100, 100"
                strokeDashoffset={strokeDashoffset}
                strokeWidth="2.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>

            {/* ARROW ICON */}
            <ArrowUp className="w-4 h-4 text-[#111111] group-hover:-translate-y-0.5 transition-transform z-10" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
