"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Play,
  Pause,
  Sparkles,
  Layers,
} from "lucide-react";
import Sparkle3D from "@/components/ui/Sparkle3D";

interface ProjectShowcaseCarouselProps {
  images: string[];
  title: string;
  category?: string;
}

export default function ProjectShowcaseCarousel({
  images,
  title,
  category = "CREATIVE SHOWCASE",
}: ProjectShowcaseCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const total = images.length;
  const currentImage = images[activeIndex] || images[0];

  // Auto-play interval
  useEffect(() => {
    if (!isPlaying || total <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPlaying, total]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full flex flex-col gap-6">
      
      {/* 1. MAIN AMBIENT STUDIO SHOWCASE DISPLAY */}
      <div className="relative w-full h-[420px] sm:h-[550px] lg:h-[680px] rounded-3xl overflow-hidden border border-[#E5E5E0] shadow-studio bg-[#0C0C0E] group flex items-center justify-center">
        
        {/* AMBIENT BACKGROUND GLOW DERIVED FROM ACTIVE IMAGE (ELIMINATES BLACK VOIDS) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <Image
            src={currentImage}
            alt={`${title} ambient backdrop`}
            fill
            className="object-cover blur-3xl opacity-35 scale-125 transition-all duration-1000 ease-out brightness-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E] via-transparent to-[#0C0C0E]/50" />
        </div>

        {/* TOP OVERLAY BADGES */}
        <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111]/80 backdrop-blur-md border border-white/10 text-white font-mono-meta text-xs font-bold tracking-wider shadow-lg">
            <Sparkle3D className="w-3.5 h-3.5" />
            <span>{category}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#111111]/70 backdrop-blur-md border border-white/10 text-white/80 font-mono-meta text-xs font-semibold">
            <span>{activeIndex + 1}</span>
            <span className="opacity-40">/</span>
            <span>{total}</span>
          </div>
        </div>

        {/* ACTIVE IMAGE DISPLAY WITH ANIMATED TRANSITIONS */}
        <div className="relative z-10 w-full h-full p-4 sm:p-8 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <Image
                src={currentImage}
                alt={`${title} slide ${activeIndex + 1}`}
                fill
                quality={98}
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain filter drop-shadow-2xl max-h-[92%] max-w-[96%] transition-all duration-300"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* LEFT & RIGHT NAVIGATION CHEVRON BUTTONS */}
        {total > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous Image"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md text-[#111111] border border-[#E5E5E0] shadow-xl flex items-center justify-center opacity-80 group-hover:opacity-100 hover:bg-[#FFB800] hover:text-[#111111] transition-all transform hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next Image"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md text-[#111111] border border-[#E5E5E0] shadow-xl flex items-center justify-center opacity-80 group-hover:opacity-100 hover:bg-[#FFB800] hover:text-[#111111] transition-all transform hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* BOTTOM OVERLAY ACTION BAR */}
        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
          {total > 1 && (
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause Auto Play" : "Play Auto Play"}
              className="px-3.5 py-1.5 rounded-full bg-[#111111]/80 backdrop-blur-md border border-white/10 text-white font-mono-meta text-xs font-semibold flex items-center gap-2 hover:bg-white hover:text-[#111111] transition-all shadow-lg"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#FFB800]" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? "PAUSE TICKER" : "AUTO SLIDE"}</span>
            </button>
          )}

          <button
            onClick={() => setLightboxOpen(true)}
            aria-label="Zoom Image Lightbox"
            className="px-4 py-1.5 rounded-full bg-white text-[#111111] font-mono-meta text-xs font-bold flex items-center gap-2 hover:bg-[#FFB800] transition-colors shadow-lg"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>FULLSCREEN HIGH-RES</span>
          </button>
        </div>

      </div>

      {/* 2. SMOOTH INTERACTIVE THUMBNAIL FILMSTRIP CAROUSEL */}
      {total > 1 && (
        <div className="w-full bg-white border border-[#E5E5E0] rounded-2xl p-3 shadow-card flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-2 font-mono-meta text-xs font-bold text-[#707070] pl-2 shrink-0">
            <Layers className="w-4 h-4 text-[#FFB800]" />
            <span className="hidden sm:inline">PROJECT ASSETS ({total}):</span>
          </div>

          <div className="flex items-center gap-3 overflow-x-auto py-1 scrollbar-none snap-x flex-1">
            {images.map((imgUrl, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveIndex(idx);
                    setIsPlaying(false);
                  }}
                  className={`relative shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-xl overflow-hidden border-2 transition-all duration-300 snap-start ${
                    isActive
                      ? "border-[#FFB800] scale-105 shadow-md"
                      : "border-transparent opacity-60 hover:opacity-100 hover:scale-102"
                  }`}
                >
                  <Image
                    src={imgUrl}
                    alt={`${title} thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-[#FFB800]/15 pointer-events-none" />
                  )}
                </button>
              );
            })}
          </div>

        </div>
      )}

      {/* 3. FULLSCREEN HIGH-RES LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#09090C]/96 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-8 select-none"
            onClick={() => setLightboxOpen(false)}
          >
            {/* LIGHTBOX HEADER */}
            <div className="w-full max-w-6xl flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <Sparkle3D className="w-5 h-5" />
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-tight">
                  {title} — ASSET {activeIndex + 1} OF {total}
                </h3>
              </div>

              <button
                onClick={() => setLightboxOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white hover:text-[#111111] transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* LIGHTBOX IMAGE DISPLAY */}
            <div
              className="relative w-full max-w-5xl h-[75vh] flex items-center justify-center p-4 my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentImage}
                alt={`${title} high res`}
                fill
                quality={100}
                className="object-contain filter drop-shadow-2xl"
                priority
              />

              {total > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Lightbox Image"
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 text-white backdrop-blur-md flex items-center justify-center hover:bg-[#FFB800] hover:text-[#111111] transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={handleNext}
                    aria-label="Next Lightbox Image"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/15 text-white backdrop-blur-md flex items-center justify-center hover:bg-[#FFB800] hover:text-[#111111] transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* LIGHTBOX FOOTER HINT */}
            <div className="font-mono-meta text-xs text-white/60 tracking-wider">
              CLICK ANYWHERE OUTSIDE OR PRESS ESC TO CLOSE
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
