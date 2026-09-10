"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, X, ArrowUpRight, Sparkles, Layers, Eye } from "lucide-react";
import { PORTFOLIO_CATEGORIES, ProjectItem } from "@/data/projects";

interface ArchiveFolderItem {
  id: string;
  name: string;
  category: string;
  year: string;
  count: number;
  color: string;
  tabColor: string;
  badge: string;
  projects: ProjectItem[];
}

export default function VisualArchive() {
  const [selectedFolder, setSelectedFolder] = useState<ArchiveFolderItem | null>(null);

  // Map portfolio data into manufactured 3D archive folders
  const FOLDERS: ArchiveFolderItem[] = [
    {
      id: "tedx-ace-2026",
      name: "TEDx ACE 2026",
      category: "EVENT BRAND ECOSYSTEM",
      year: "2026",
      count: 7,
      color: "bg-[#111111] text-white border-[#333333]",
      tabColor: "bg-[#FFB800] text-[#111111]",
      badge: "FLAGSHIP",
      projects: PORTFOLIO_CATEGORIES.find((c) => c.id === "tedx-ace-2026")?.projects || [],
    },
    {
      id: "branding",
      name: "BRANDING",
      category: "VISUAL IDENTITY & COLLATERAL",
      year: "2025",
      count: 5,
      color: "bg-white text-[#111111] border-[#E5E5E0]",
      tabColor: "bg-[#19C8D8] text-white",
      badge: "IDENTITY",
      projects: PORTFOLIO_CATEGORIES.find((c) => c.id === "branding")?.projects || [],
    },
    {
      id: "social",
      name: "SOCIAL",
      category: "CAMPAIGNS & AD CREATIVE",
      year: "2025",
      count: 5,
      color: "bg-white text-[#111111] border-[#E5E5E0]",
      tabColor: "bg-[#FF6B35] text-white",
      badge: "CAMPAIGNS",
      projects: PORTFOLIO_CATEGORIES.find((c) => c.id === "social")?.projects || [],
    },
    {
      id: "web",
      name: "WEB",
      category: "DIGITAL & PRODUCT UI/UX",
      year: "2025",
      count: 5,
      color: "bg-white text-[#111111] border-[#E5E5E0]",
      tabColor: "bg-[#FFB800] text-[#111111]",
      badge: "DIGITAL",
      projects: PORTFOLIO_CATEGORIES.find((c) => c.id === "web")?.projects || [],
    },
    {
      id: "3d-motion",
      name: "3D & MOTION",
      category: "SPATIAL ASSETS & LOOPS",
      year: "2024",
      count: 4,
      color: "bg-white text-[#111111] border-[#E5E5E0]",
      tabColor: "bg-[#111111] text-white",
      badge: "3D ART",
      projects: PORTFOLIO_CATEGORIES.find((c) => c.id === "ai-creative")?.projects || [],
    },
    {
      id: "experimental",
      name: "EXPERIMENTAL",
      category: "AI & TYPOGRAPHY CONCEPTS",
      year: "2026",
      count: 6,
      color: "bg-white text-[#111111] border-[#E5E5E0]",
      tabColor: "bg-[#19C8D8] text-white",
      badge: "CONCEPTS",
      projects: PORTFOLIO_CATEGORIES.find((c) => c.id === "ai-creative")?.projects || [],
    },
  ];

  return (
    <section id="archive" className="py-24 bg-[#F7F7F3] bg-swiss-grid border-b border-[#E5E5E0]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5E5E0] shadow-xs mb-4">
            <span className="font-mono-meta text-xs font-semibold text-[#FFB800] tracking-widest uppercase">
              03 / VISUAL ARCHIVE
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#111111] uppercase tracking-tight">
            IDEAS, FILED FOR LATER.
          </h2>
          <p className="text-[#707070] text-base max-w-xl mt-3">
            A virtual physical archive system. Click any 3D manufactured folder to pull out projects, artwork files, and case studies.
          </p>
        </div>

        {/* 3D MANUFACTURED FOLDER GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FOLDERS.map((folder, index) => (
            <motion.div
              key={folder.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => setSelectedFolder(folder)}
              className="group cursor-pointer relative"
            >
              {/* Physical Cardboard Folder Container */}
              <div
                className={`relative rounded-2xl p-6 border shadow-card group-hover:shadow-lift transition-all duration-300 transform group-hover:-translate-y-2 ${folder.color}`}
              >
                {/* Folder Top Tab */}
                <div
                  className={`absolute -top-3.5 left-6 px-4 py-1 rounded-t-lg font-mono-meta text-[10px] font-bold tracking-widest uppercase shadow-xs ${folder.tabColor}`}
                >
                  {folder.badge}
                </div>

                {/* Folder Content Header */}
                <div className="flex justify-between items-start pt-2 mb-6">
                  <div>
                    <span className="font-mono-meta text-xs text-[#707070] block mb-1">
                      {folder.year} • ARCHIVE FOLDER 0{index + 1}
                    </span>
                    <h3 className="font-display text-2xl font-black tracking-tight uppercase group-hover:text-[#FFB800] transition-colors">
                      {folder.name}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#F7F7F3] border border-[#E5E5E0] flex items-center justify-center text-[#111111] group-hover:bg-[#FFB800] transition-colors">
                    <Folder className="w-5 h-5" />
                  </div>
                </div>

                {/* Simulated Paper Sheets inside Folder */}
                <div className="relative h-28 w-full bg-[#F7F7F3] rounded-xl border border-[#E5E5E0] p-3 overflow-hidden flex flex-col justify-between">
                  {/* Paper sheet peek */}
                  <div className="absolute -top-2 left-3 right-3 h-4 bg-white rounded-t-md border border-[#E5E5E0] opacity-80" />
                  <div className="flex justify-between items-center z-10">
                    <span className="font-mono-meta text-[11px] text-[#707070] uppercase">
                      {folder.category}
                    </span>
                    <span className="font-mono-meta text-xs font-bold px-2 py-0.5 rounded bg-white border border-[#E5E5E0] text-[#111111]">
                      {folder.count} FILES
                    </span>
                  </div>

                  <div className="flex items-center justify-between z-10 pt-4 border-t border-[#E5E5E0]">
                    <span className="font-mono-meta text-[10px] text-[#707070]">CLICK TO UNZIP</span>
                    <span className="font-mono-meta text-xs font-bold text-[#111111] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      PULL FILES <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* INTERACTIVE FOLDER ARCHIVE MODAL DRAWER */}
        <AnimatePresence>
          {selectedFolder && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#111111]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
              onClick={() => setSelectedFolder(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-4xl bg-white border border-[#E5E5E0] rounded-3xl p-6 sm:p-10 shadow-2xl max-h-[85vh] overflow-y-auto"
              >
                {/* MODAL HEADER */}
                <div className="flex items-center justify-between border-b border-[#E5E5E0] pb-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FFB800] text-[#111111] flex items-center justify-center font-display font-black text-xl">
                      0{FOLDERS.findIndex((f) => f.id === selectedFolder.id) + 1}
                    </div>
                    <div>
                      <span className="font-mono-meta text-xs text-[#707070] uppercase">
                        ARCHIVE FOLDER • {selectedFolder.year}
                      </span>
                      <h3 className="font-display text-3xl font-extrabold text-[#111111] uppercase">
                        {selectedFolder.name}
                      </h3>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedFolder(null)}
                    className="w-10 h-10 rounded-full bg-[#F7F7F3] border border-[#E5E5E0] flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* PROJECT THUMBNAILS LIST INSIDE FOLDER */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedFolder.projects.map((project) => (
                    <div
                      key={project.id}
                      className="group bg-[#F7F7F3] border border-[#E5E5E0] rounded-2xl overflow-hidden hover:border-[#111111] transition-all duration-200"
                    >
                      <div className="relative h-48 w-full bg-[#111111]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-center font-mono-meta text-xs text-[#707070] mb-1">
                            <span>{project.category}</span>
                            <span>{project.year}</span>
                          </div>
                          <h4 className="font-display text-lg font-bold text-[#111111] mb-2">
                            {project.title}
                          </h4>
                          <p className="text-[#707070] text-xs line-clamp-2 mb-4">
                            {project.description}
                          </p>
                        </div>

                        <Link
                          href={`/work/${project.slug}`}
                          onClick={() => setSelectedFolder(null)}
                          className="inline-flex items-center justify-between w-full pt-3 border-t border-[#E5E5E0] font-mono-meta text-xs font-bold text-[#111111] group-hover:text-[#FFB800] transition-colors"
                        >
                          <span>VIEW PROJECT</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
