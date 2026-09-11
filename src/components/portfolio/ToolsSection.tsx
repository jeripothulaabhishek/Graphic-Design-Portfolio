"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Wrench } from "lucide-react";

interface ToolItem {
  name: string;
  category: string;
  group: "DESIGN" | "MOTION" | "DEV" | "AI";
  desc: string;
  iconUrl: string;
  accent: string;
}

const TOOLS: ToolItem[] = [
  {
    name: "FIGMA",
    category: "UI / UX DESIGN",
    group: "DESIGN",
    desc: "Design system architecture, wireframing & interactive prototypes.",
    iconUrl: "/tools/figma-3d.png",
    accent: "bg-[#FFB800]/10 border-[#FFB800]/30",
  },
  {
    name: "PHOTOSHOP",
    category: "RASTER & PHOTO",
    group: "DESIGN",
    desc: "High-end retouching, photo manipulation & digital campaign posters.",
    iconUrl: "/tools/photoshop-3d.png",
    accent: "bg-[#19C8D8]/10 border-[#19C8D8]/30",
  },
  {
    name: "ILLUSTRATOR",
    category: "VECTOR BRANDING",
    group: "DESIGN",
    desc: "Precision vector logo marks, typography scales & brand identity guides.",
    iconUrl: "/tools/illustrator-3d.png",
    accent: "bg-[#FF6B35]/10 border-[#FF6B35]/30",
  },
  {
    name: "AFTER EFFECTS",
    category: "MOTION & KINETICS",
    group: "MOTION",
    desc: "Kinetic typography loops, title sequences & logo animation.",
    iconUrl: "/tools/after-effects-3d.png",
    accent: "bg-[#8E2DE2]/10 border-[#8E2DE2]/30",
  },
  {
    name: "CANVA",
    category: "RAPID ASSETS",
    group: "DESIGN",
    desc: "Quick social collateral, pitch decks & template distributions.",
    iconUrl: "/tools/canva-3d.png",
    accent: "bg-[#FF6B35]/10 border-[#FF6B35]/30",
  },
  {
    name: "MIDJOURNEY & AI",
    category: "AI VISUAL SYNTHESIS",
    group: "AI",
    desc: "Generative AI visual exploration, art direction & concept moodboards.",
    iconUrl: "/tools/midjourney-3d.png",
    accent: "bg-[#19C8D8]/10 border-[#19C8D8]/30",
  },
  {
    name: "VS CODE",
    category: "DEVELOPMENT",
    group: "DEV",
    desc: "TypeScript, React, Next.js & Tailwind CSS frontend engineering.",
    iconUrl: "/tools/vscode-3d.png",
    accent: "bg-[#111111]/10 border-[#111111]/30",
  },
  {
    name: "REACT & NEXT.JS",
    category: "CREATIVE DEV",
    group: "DEV",
    desc: "Full-stack SSR web applications, smooth state & API integrations.",
    iconUrl: "/tools/react-next-3d.png",
    accent: "bg-[#FFB800]/10 border-[#FFB800]/30",
  },
];

const STACK_FILTERS = [
  { id: "ALL", label: "ALL TOOLS" },
  { id: "DESIGN", label: "DESIGN & VECTOR" },
  { id: "MOTION", label: "MOTION & KINETICS" },
  { id: "AI", label: "AI CREATIVE" },
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
          <div className="flex flex-wrap items-center gap-1.5 bg-white p-1.5 rounded-2xl md:rounded-full border border-[#E5E5E0] shadow-xs self-start md:self-auto">
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
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredTools.map((tool) => {
              return (
                <motion.div
                  key={tool.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-[#E5E5E0] rounded-2xl p-6 shadow-card hover:shadow-lift transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="font-mono-meta text-[11px] font-bold text-[#707070] uppercase tracking-wider">
                        {tool.category}
                      </span>
                      
                      {/* 3D GLOSSY APP ICON CONTAINER */}
                      <motion.div 
                        whileHover={{ scale: 1.12, rotate: 4 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className={`w-14 h-14 rounded-2xl p-1.5 flex items-center justify-center border shadow-sm transition-all group-hover:shadow-md ${tool.accent}`}
                      >
                        <Image
                          src={tool.iconUrl}
                          alt={`${tool.name} 3D Icon`}
                          width={52}
                          height={52}
                          className="w-full h-full object-contain rounded-xl drop-shadow-[0_4px_8px_rgba(0,0,0,0.15)]"
                        />
                      </motion.div>
                    </div>

                    <h3 className="font-display text-xl font-extrabold text-[#111111] mb-2 tracking-tight group-hover:text-[#FFB800] transition-colors">
                      {tool.name}
                    </h3>

                    <p className="text-[#707070] text-xs leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#E5E5E0] flex justify-between items-center text-[10px] font-mono-meta text-[#707070]">
                    <span className="font-bold text-[#111111]">PROFICIENCY: EXPERT</span>
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

