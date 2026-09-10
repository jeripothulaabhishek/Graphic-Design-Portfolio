"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench, Box, Code, Palette, Film, Layers, Cpu, Sparkles } from "lucide-react";
import Sparkle3D from "@/components/ui/Sparkle3D";

interface ToolItem {
  name: string;
  category: string;
  group: "DESIGN" | "3D" | "DEV";
  desc: string;
  icon: any;
  accent: string;
}

const TOOLS: ToolItem[] = [
  {
    name: "FIGMA",
    category: "UI / UX DESIGN",
    group: "DESIGN",
    desc: "Design system architecture, wireframing & interactive prototypes.",
    icon: Palette,
    accent: "bg-[#FFB800] text-[#111111]",
  },
  {
    name: "PHOTOSHOP",
    category: "RASTER & PHOTO",
    group: "DESIGN",
    desc: "High-end retouching, photo manipulation & digital campaign posters.",
    icon: Layers,
    accent: "bg-[#19C8D8] text-white",
  },
  {
    name: "ILLUSTRATOR",
    category: "VECTOR BRANDING",
    group: "DESIGN",
    desc: "Precision vector logo marks, typography scales & brand identity guides.",
    icon: Sparkle3D,
    accent: "bg-[#FF6B35] text-white",
  },
  {
    name: "AFTER EFFECTS",
    category: "MOTION & KINETICS",
    group: "3D",
    desc: "Kinetic typography loops, title sequences & logo animation.",
    icon: Film,
    accent: "bg-[#111111] text-white",
  },
  {
    name: "BLENDER",
    category: "3D ART DIRECTION",
    group: "3D",
    desc: "Studio product mockups, lighting setups & low-poly 3D assets.",
    icon: Box,
    accent: "bg-[#FFB800] text-[#111111]",
  },
  {
    name: "CINEMA 4D",
    category: "SPATIAL 3D",
    group: "3D",
    desc: "Abstract geometric renders, material texturing & spatial motion.",
    icon: Box,
    accent: "bg-[#19C8D8] text-white",
  },
  {
    name: "CANVA",
    category: "RAPID ASSETS",
    group: "DESIGN",
    desc: "Quick social collateral, pitch decks & template distributions.",
    icon: Wrench,
    accent: "bg-[#FF6B35] text-white",
  },
  {
    name: "VS CODE",
    category: "DEVELOPMENT",
    group: "DEV",
    desc: "TypeScript, React, Next.js & Tailwind CSS frontend engineering.",
    icon: Code,
    accent: "bg-[#111111] text-white",
  },
  {
    name: "REACT & NEXT.JS",
    category: "CREATIVE DEV",
    group: "DEV",
    desc: "Full-stack SSR web applications, smooth state & API integrations.",
    icon: Cpu,
    accent: "bg-[#FFB800] text-[#111111]",
  },
];

const STACK_FILTERS = [
  { id: "ALL", label: "ALL TOOLS" },
  { id: "DESIGN", label: "DESIGN & VECTOR" },
  { id: "3D", label: "3D & MOTION" },
  { id: "DEV", label: "FRONTEND DEV" },
];

export default function ToolsSection() {
  const [activeTab, setActiveTab] = useState("ALL");

  const filteredTools = TOOLS.filter((t) => {
    if (activeTab === "ALL") return true;
    return t.group === activeTab;
  });

  return (
    <section id="tools" className="py-24 bg-[#F7F7F3] border-b border-[#E5E5E0]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5E5E0] shadow-xs mb-4">
              <Wrench className="w-3.5 h-3.5 text-[#111111]" />
              <span className="font-mono-meta text-xs font-semibold text-[#111111] tracking-widest uppercase">
                06 / CREATIVE STACK & TOOLS
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#111111] uppercase tracking-tight">
              THE TOOLS BEHIND THE WORK.
            </h2>
          </div>

          {/* FILTER PILLS */}
          <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-full border border-[#E5E5E0] shadow-xs self-start md:self-auto">
            {STACK_FILTERS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-1.5 rounded-full font-mono-meta text-xs font-bold tracking-wider transition-all duration-200 ${
                    isActive
                      ? "bg-[#111111] text-[#FFB800] shadow-xs"
                      : "text-[#707070] hover:text-[#111111] hover:bg-[#F7F7F3]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* TOOL CARDS GRID */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredTools.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
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
                    <span className="font-bold text-[#111111]">PROFICIENCY: ADVANCED EXPERT</span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-emerald-600 font-bold">100%</span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
