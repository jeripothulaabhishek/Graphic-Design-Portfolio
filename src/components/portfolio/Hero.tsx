"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";

const HeroScene3D = dynamic(() => import("./HeroScene3D"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#F7F7F3] bg-swiss-grid border-b border-[#E5E5E0]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: EDITORIAL CONTENT */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center z-10">
            
            {/* EYEBROW LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E5E0] shadow-xs mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
              <span className="font-mono-meta text-xs font-semibold text-[#111111] tracking-wider uppercase">
                01 / VISUAL CREATIVE • GRAPHIC DESIGNER
              </span>
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
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#FFB800] -z-10 rounded-sm" />
              </span>
              <br />
              MOVE.
            </motion.h1>

            {/* SUPPORTING COPY */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-[#707070] font-normal leading-relaxed max-w-lg mb-10"
            >
              I turn ideas into visual identities, campaigns and digital experiences.
            </motion.p>

            {/* ACTION BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <Link
                href="#work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FFB800] text-[#111111] hover:bg-[#111111] hover:text-white font-display font-bold text-sm px-7 py-4 rounded-xl shadow-sm transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>VIEW MY WORK</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-[#111111] border border-[#E5E5E0] hover:border-[#111111] font-display font-semibold text-sm px-7 py-4 rounded-xl shadow-xs transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>ABOUT ME</span>
                <ArrowRight className="w-4 h-4 text-[#707070]" />
              </Link>
            </motion.div>

            {/* METADATA STRIP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-14 pt-8 border-t border-[#E5E5E0] w-full grid grid-cols-3 gap-4"
            >
              <div>
                <span className="block font-mono-meta text-[11px] text-[#707070] uppercase tracking-wider">ROLE</span>
                <span className="font-display text-sm font-bold text-[#111111]">Design Lead</span>
              </div>
              <div>
                <span className="block font-mono-meta text-[11px] text-[#707070] uppercase tracking-wider">FLAGSHIP</span>
                <span className="font-display text-sm font-bold text-[#111111]">TEDx ACE 2026</span>
              </div>
              <div>
                <span className="block font-mono-meta text-[11px] text-[#707070] uppercase tracking-wider">LOCATION</span>
                <span className="font-display text-sm font-bold text-[#111111]">Available Worldwide</span>
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
    </section>
  );
}
