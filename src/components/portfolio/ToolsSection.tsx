"use client";

import { motion } from "framer-motion";
import { Wrench, Box, Code, Palette, Film, Layers, Cpu } from "lucide-react";
import Sparkle3D from "@/components/ui/Sparkle3D";

interface ToolItem {
  name: string;
  category: string;
  desc: string;
  icon: any;
  accent: string;
}

const TOOLS: ToolItem[] = [
  {
    name: "FIGMA",
    category: "UI / UX DESIGN",
    desc: "Design system architecture, wireframing & interactive prototypes.",
    icon: Palette,
    accent: "bg-[#FFB800] text-[#111111]",
  },
  {
    name: "PHOTOSHOP",
    category: "RASTER & PHOTO",
    desc: "High-end retouching, photo manipulation & digital campaign posters.",
    icon: Layers,
    accent: "bg-[#19C8D8] text-white",
  },
  {
    name: "ILLUSTRATOR",
    category: "VECTOR BRANDING",
    desc: "Precision vector logo marks, typography scales & brand identity guides.",
    icon: Sparkle3D,
    accent: "bg-[#FF6B35] text-white",
  },
  {
    name: "AFTER EFFECTS",
    category: "MOTION & KINETICS",
    desc: "Kinetic typography loops, title sequences & logo animation.",
    icon: Film,
    accent: "bg-[#111111] text-white",
  },
  {
    name: "BLENDER",
    category: "3D ART DIRECTION",
    desc: "Studio product mockups, lighting setups & low-poly 3D assets.",
    icon: Box,
    accent: "bg-[#FFB800] text-[#111111]",
  },
  {
    name: "CINEMA 4D",
    category: "SPATIAL 3D",
    desc: "Abstract geometric renders, material texturing & spatial motion.",
    icon: Box,
    accent: "bg-[#19C8D8] text-white",
  },
  {
    name: "CANVA",
    category: "RAPID ASSETS",
    desc: "Quick social collateral, pitch decks & template distributions.",
    icon: Wrench,
    accent: "bg-[#FF6B35] text-white",
  },
  {
    name: "VS CODE",
    category: "DEVELOPMENT",
    desc: "TypeScript, React, Next.js & Tailwind CSS frontend engineering.",
    icon: Code,
    accent: "bg-[#111111] text-white",
  },
  {
    name: "REACT & NEXT.JS",
    category: "CREATIVE DEV",
    desc: "Full-stack SSR web applications, smooth state & API integrations.",
    icon: Cpu,
    accent: "bg-[#FFB800] text-[#111111]",
  },
];

export default function ToolsSection() {
  return (
    <section id="tools" className="py-24 bg-[#F7F7F3] border-b border-[#E5E5E0]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* SECTION HEADER */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5E5E0] shadow-xs mb-4">
            <Wrench className="w-3.5 h-3.5 text-[#111111]" />
            <span className="font-mono-meta text-xs font-semibold text-[#111111] tracking-widest uppercase">
              06 / CREATIVE STACK
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#111111] uppercase tracking-tight">
            THE TOOLS BEHIND THE WORK.
          </h2>
          <p className="text-[#707070] text-base max-w-lg mt-2">
            Industry-standard design software, 3D suites, and frontend technologies powering every creative build.
          </p>
        </div>

        {/* TOOL CARDS GRID (NO PROGRESS BARS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TOOLS.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white border border-[#E5E5E0] rounded-2xl p-6 shadow-card hover:shadow-lift transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-mono-meta text-xs font-bold text-[#707070] uppercase">
                      {tool.category}
                    </span>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold shadow-xs ${tool.accent}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-extrabold text-[#111111] mb-2 tracking-tight group-hover:text-[#FFB800] transition-colors">
                    {tool.name}
                  </h3>

                  <p className="text-[#707070] text-xs leading-relaxed">
                    {tool.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E5E5E0] flex justify-between items-center text-[10px] font-mono-meta text-[#707070]">
                  <span>PROFICIENCY: ADVANCED</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
