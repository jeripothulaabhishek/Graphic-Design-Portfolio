"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";
import { PORTFOLIO_CATEGORIES } from "@/data/projects";

export default function SocialDesignShowcase() {
  const socialCat = PORTFOLIO_CATEGORIES.find((cat) => cat.id === "social");
  const projects = socialCat?.projects || [];

  return (
    <section className="py-24 bg-[#F7F7F3] border-b border-[#E5E5E0] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5E5E0] shadow-xs mb-4">
              <Instagram className="w-3.5 h-3.5 text-[#FF6B35]" />
              <span className="font-mono-meta text-xs font-semibold text-[#FF6B35] tracking-widest uppercase">
                05 / SOCIAL DESIGN
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#111111] uppercase tracking-tight">
              DESIGN THAT LIVES IN THE FEED.
            </h2>
          </div>
          <p className="text-[#707070] text-sm md:text-base max-w-md">
            High-converting social campaigns, Instagram carousels, Reels visual assets & promotional ad design.
          </p>
        </div>

        {/* HORIZONTAL EDITORIAL GALLERY */}
        <div className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory">
          {projects.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="snap-start shrink-0 w-[280px] sm:w-[340px] md:w-[380px] bg-white border border-[#E5E5E0] rounded-3xl p-4 shadow-card hover:shadow-lift transition-all duration-300 group"
            >
              {/* Image Aspect Ratio Box */}
              <div className="relative w-full h-[400px] sm:h-[460px] rounded-2xl overflow-hidden bg-[#111111] mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-[#111111]/80 backdrop-blur-md px-3 py-1 rounded-full font-mono-meta text-[11px] font-bold text-white">
                  {idx % 2 === 0 ? "4:5 CAROUSEL" : "1:1 AD POST"}
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="px-2 pb-2">
                <div className="flex justify-between items-center font-mono-meta text-xs text-[#707070] mb-1">
                  <span>{item.client || "CAMPAIGN CREATIVE"}</span>
                  <span>{item.year}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-[#111111] group-hover:text-[#FF6B35] transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
