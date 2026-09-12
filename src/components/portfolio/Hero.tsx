"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Sparkle3D from "@/components/ui/Sparkle3D";

const HeroScene3D = dynamic(() => import("./HeroScene3D"), {
  ssr: false,
});

const MARQUEE_ITEMS = [
  "BRAND IDENTITY",
  "POSTER ART",
  "UI & WEB DESIGN",
  "MARKETING & EVENT GRAPHICS",
  "TYPOGRAPHY & EDITORIAL",
  "UI/UX DESIGN",
  "TEDx BRANDING",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden bg-[#F7F7F3] bg-swiss-grid border-b border-[#E5E5E0]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: EDITORIAL CONTENT */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center z-10">
            
            {/* EYEBROW BADGES */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2 mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E5E0] shadow-xs">
                <Sparkle3D className="w-4 h-4" />
                <span className="font-mono-meta text-xs font-semibold text-[#111111] tracking-wider uppercase">
                  01 / VISUAL CREATIVE • GRAPHIC DESIGNER
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111111] text-white text-[11px] font-mono-meta tracking-wider uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>OPEN FOR COMMISSIONS</span>
              </div>
            </motion.div>

            {/* HERO DISPLAY HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[82px] font-extrabold text-[#111111] leading-[0.95] tracking-tight uppercase mb-8"
            >
              DESIGN,
              <br />
              <span className="relative inline-block text-[#111111]">
                MADE TO
                <span className="absolute bottom-2 left-0 w-full h-3.5 bg-[#FFB800] -z-10 rounded-sm" />
              </span>
              <br />
              MOVE.
            </motion.h1>

            {/* SUPPORTING POSITIONING STATEMENT */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-[#707070] font-normal leading-relaxed max-w-xl mb-10"
            >
              I craft visual identities people notice — and complete digital experiences they remember. Specializing in brand architecture, UI/UX interfaces, responsive websites, high-converting social campaigns, and motion graphics.
            </motion.p>

            {/* ACTION BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-12"
            >
              <Link
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FFB800] text-[#111111] hover:bg-[#111111] hover:text-[#FFB800] font-display font-bold text-sm px-8 py-4 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>EXPLORE WORK</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#111111] text-white hover:bg-[#FFB800] hover:text-[#111111] font-display font-bold text-sm px-8 py-4 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>LET'S BUILD</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* CREDIBILITY METRICS STRIP */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-8 border-t border-[#E5E5E0] w-full grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              <div>
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#111111]">50+</span>
                <span className="block font-mono-meta text-[11px] text-[#707070] uppercase tracking-wider font-medium mt-0.5">Projects Completed</span>
              </div>
              <div>
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#111111]">20+</span>
                <span className="block font-mono-meta text-[11px] text-[#707070] uppercase tracking-wider font-medium mt-0.5">Happy Clients</span>
              </div>
              <div>
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#111111]">3+</span>
                <span className="block font-mono-meta text-[11px] text-[#707070] uppercase tracking-wider font-medium mt-0.5">Years Learning</span>
              </div>
              <div>
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#111111]">∞</span>
                <span className="block font-mono-meta text-[11px] text-[#707070] uppercase tracking-wider font-medium mt-0.5">Ideas to Build</span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: 3D HERO CREATIVE STUDIO SCENE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative flex items-center justify-center w-full"
          >
            <HeroScene3D />
          </motion.div>

        </div>
      </div>

      {/* SUBTLE SCROLL TO EXPLORE INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="hidden md:flex absolute bottom-16 right-12 flex-col items-center gap-2 z-20 pointer-events-none"
      >
        <span className="font-mono-meta text-[10px] font-bold text-[#707070] tracking-widest uppercase rotate-90 origin-right translate-x-4">
          SCROLL
        </span>
        <div className="w-5 h-9 rounded-full border-2 border-[#111111]/30 p-1 flex justify-center mt-6">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-[#FFB800]"
          />
        </div>
      </motion.div>

      {/* INFINITE MARQUEE TICKER */}
      <div className="mt-14 w-full bg-[#111111] text-white py-3.5 overflow-hidden border-y border-[#111111]">
        <div className="flex w-max animate-marquee space-x-8">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center space-x-8">
              <span className="font-mono-meta text-xs font-bold tracking-widest uppercase text-white/90">
                {item}
              </span>
              <span className="text-[#FFB800] text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
