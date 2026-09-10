"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Filter, X } from "lucide-react";

interface PlaygroundItem {
  id: string;
  title: string;
  category: "3D" | "TYPE" | "AI" | "MOTION" | "EXPERIMENTAL";
  image: string;
  aspectRatio: string;
  year: string;
}

const PLAYGROUND_ITEMS: PlaygroundItem[] = [
  {
    id: "p1",
    title: "Surreal Chrome Sculpture",
    category: "3D",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "h-80",
    year: "2026",
  },
  {
    id: "p2",
    title: "Kinetic Swiss Poster Study",
    category: "TYPE",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "h-96",
    year: "2026",
  },
  {
    id: "p3",
    title: "Generative Cyber Botanica",
    category: "AI",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "h-72",
    year: "2025",
  },
  {
    id: "p4",
    title: "Abstract Fluid Sphere Loop",
    category: "MOTION",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "h-80",
    year: "2025",
  },
  {
    id: "p5",
    title: "Futurist City Light Renders",
    category: "3D",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "h-96",
    year: "2026",
  },
  {
    id: "p6",
    title: "Brutalist Interface Layout",
    category: "EXPERIMENTAL",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    aspectRatio: "h-72",
    year: "2025",
  },
];

const FILTERS = ["ALL", "3D", "TYPE", "AI", "MOTION", "EXPERIMENTAL"] as const;

export function PhotoGallery() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [selectedImage, setSelectedImage] = useState<PlaygroundItem | null>(null);

  const filteredItems =
    activeFilter === "ALL"
      ? PLAYGROUND_ITEMS
      : PLAYGROUND_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="playground" className="py-24 bg-[#F7F7F3] border-b border-[#E5E5E0]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5E5E0] shadow-xs mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
              <span className="font-mono-meta text-xs font-semibold text-[#111111] tracking-widest uppercase">
                06 / PLAYGROUND & EXPERIMENTS
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#111111] uppercase tracking-tight">
              NOT EVERYTHING NEEDS A CLIENT.
            </h2>
          </div>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full font-mono-meta text-xs font-bold transition-all duration-200 ${
                  activeFilter === filter
                    ? "bg-[#111111] text-white shadow-xs"
                    : "bg-white text-[#707070] border border-[#E5E5E0] hover:text-[#111111]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* EXPERIMENTAL MASONRY GALLERY */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(item)}
                data-cursor="zoom"
                className="group cursor-pointer bg-white border border-[#E5E5E0] rounded-3xl p-4 shadow-card hover:shadow-lift transition-all duration-300"
              >
                <div className={`relative w-full ${item.aspectRatio} rounded-2xl overflow-hidden bg-[#111111] mb-3`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#111111]/80 backdrop-blur-md px-3 py-1 rounded-full font-mono-meta text-[10px] font-bold text-white uppercase">
                    {item.category}
                  </div>
                </div>

                <div className="flex justify-between items-center px-1">
                  <h3 className="font-display text-sm font-bold text-[#111111] group-hover:text-[#FFB800] transition-colors">
                    {item.title}
                  </h3>
                  <span className="font-mono-meta text-xs text-[#707070]">{item.year}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* IMAGE ZOOM MODAL */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-[#111111]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-6"
              >
                <div className="flex justify-between items-center mb-4 pb-4 border-b border-[#E5E5E0]">
                  <div>
                    <span className="font-mono-meta text-xs text-[#FFB800] font-bold uppercase">
                      {selectedImage.category} EXPERIMENT
                    </span>
                    <h3 className="font-display text-2xl font-bold text-[#111111]">
                      {selectedImage.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="w-9 h-9 rounded-full bg-[#F7F7F3] border border-[#E5E5E0] flex items-center justify-center text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="relative h-[480px] w-full rounded-2xl overflow-hidden bg-[#111111]">
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
