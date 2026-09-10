"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Bookmark, Layers } from "lucide-react";
import { PORTFOLIO_CATEGORIES } from "@/data/projects";

export default function BrandShowcase() {
  const brandingCat = PORTFOLIO_CATEGORIES.find((cat) => cat.id === "branding");
  const projects = brandingCat?.projects || [];

  return (
    <section className="py-24 bg-[#F7F7F3] border-b border-[#E5E5E0]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5E5E0] shadow-xs mb-4">
              <Layers className="w-3.5 h-3.5 text-[#19C8D8]" />
              <span className="font-mono-meta text-xs font-semibold text-[#19C8D8] tracking-widest uppercase">
                05 / BRAND IDENTITY
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#111111] uppercase tracking-tight">
              IDENTITIES BUILT TO BE REMEMBERED.
            </h2>
          </div>
          <p className="text-[#707070] text-sm md:text-base max-w-md">
            Complete identity systems, stationery collateral, packaging, brand books & physical stationery mockups.
          </p>
        </div>

        {/* BRAND IDENTITY EDITORIAL MOCKUPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-[#E5E5E0] rounded-3xl p-6 shadow-card hover:shadow-lift transition-all duration-300 group flex flex-col justify-between"
            >
              <Link href={`/work/${project.slug}`}>
                {/* Physical Mockup Image Box */}
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-[#111111] mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full font-mono-meta text-[11px] font-bold text-[#111111]">
                    3D PHYSICAL MOCKUP
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center font-mono-meta text-xs text-[#707070] mb-2">
                    <span>{project.client}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#111111] uppercase tracking-tight group-hover:text-[#19C8D8] transition-colors flex items-center justify-between mb-2">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </h3>

                  <p className="text-[#707070] text-xs leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  {/* Deliverables tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#E5E5E0]">
                    {project.deliverables.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-0.5 rounded-full bg-[#F7F7F3] border border-[#E5E5E0] text-[10px] font-mono-meta text-[#707070]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
