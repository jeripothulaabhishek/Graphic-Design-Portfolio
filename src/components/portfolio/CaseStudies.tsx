"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import { PORTFOLIO_CATEGORIES } from "@/data/projects";

export default function CaseStudies() {
  const tedxCategory = PORTFOLIO_CATEGORIES.find((cat) => cat.id === "tedx-ace-2026");
  const mainProject = tedxCategory?.projects[0];

  if (!mainProject) return null;

  return (
    <section className="py-24 bg-[#F7F7F3] bg-swiss-grid border-b border-[#E5E5E0]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5E5E0] shadow-xs mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
            <span className="font-mono-meta text-xs font-semibold text-[#FFB800] tracking-widest uppercase">
              08 / FEATURED CASE STUDY
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#111111] uppercase tracking-tight">
            TEDx ACE COLLEGE — EVENT BRAND ECOSYSTEM.
          </h2>
          <p className="text-[#707070] text-base max-w-2xl mt-3">
            A comprehensive visual identity system, stage graphics, speaker launch series, attendee credential badges & digital marketing campaign engineered for TEDx ACE Engineering College 2026.
          </p>
        </div>

        {/* FLAGSHIP CASE STUDY CARD */}
        <div className="bg-white border border-[#E5E5E0] rounded-3xl overflow-hidden shadow-studio">
          
          {/* LARGE 3D DESK & POSTER MOCKUP HERO */}
          <div className="relative h-[380px] sm:h-[500px] lg:h-[600px] w-full bg-[#111111] overflow-hidden">
            <Image
              src="/tedx-ace-2026/tedx-1.png"
              alt="TEDx ACE College 2026 Event Branding"
              fill
              className="object-cover hover:scale-102 transition-transform duration-700"
              priority
            />
            <div className="absolute top-6 left-6 bg-[#111111]/80 backdrop-blur-md px-4 py-2 rounded-full font-mono-meta text-xs font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFB800] animate-pulse" />
              FLAGSHIP CASE STUDY 2026
            </div>
          </div>

          {/* PROJECT METADATA BAR */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-8 border-b border-[#E5E5E0] bg-[#F7F7F3]">
            <div>
              <span className="font-mono-meta text-[11px] text-[#707070] uppercase block">CLIENT</span>
              <span className="font-display text-sm font-bold text-[#111111]">TEDx ACE College</span>
            </div>
            <div>
              <span className="font-mono-meta text-[11px] text-[#707070] uppercase block">ROLE</span>
              <span className="font-display text-sm font-bold text-[#111111]">Content & Design Lead</span>
            </div>
            <div>
              <span className="font-mono-meta text-[11px] text-[#707070] uppercase block">YEAR</span>
              <span className="font-display text-sm font-bold text-[#111111]">2026</span>
            </div>
            <div>
              <span className="font-mono-meta text-[11px] text-[#707070] uppercase block">SERVICES</span>
              <span className="font-display text-sm font-bold text-[#FFB800]">Identity, Print, Social, Stage</span>
            </div>
          </div>

          {/* EDITORIAL NARRATIVE GRID */}
          <div className="p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* LEFT: STORY NARRATIVE */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl font-extrabold text-[#111111] uppercase mb-4">
                  THE CHALLENGE & VISION
                </h3>
                <p className="text-[#707070] text-base leading-relaxed mb-6">
                  Architecting an authoritative visual identity system aligned strictly with global TEDx brand guidelines, while creating a distinctive visual narrative for TEDx ACE Engineering College 2026.
                </p>

                <h3 className="font-display text-2xl font-extrabold text-[#111111] uppercase mb-4">
                  DESIGN SYSTEM & APPLICATIONS
                </h3>
                <p className="text-[#707070] text-base leading-relaxed mb-6">
                  Built a high-contrast obsidian and kinetic red visual system featuring bold geometric typography, custom speaker portrait frames, color-coded attendee credential badges, and spatial LED stage visual loops.
                </p>
              </div>

              <div className="pt-6 border-t border-[#E5E5E0]">
                <Link
                  href={`/work/${mainProject.slug}`}
                  className="inline-flex items-center gap-3 bg-[#111111] text-white hover:bg-[#FFB800] hover:text-[#111111] px-8 py-4 rounded-xl font-display font-bold text-sm transition-all duration-300 shadow-sm"
                >
                  <span>EXPLORE FULL TEDx CASE STUDY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* RIGHT: GALLERY PREVIEWS */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-2xl overflow-hidden bg-[#111111] border border-[#E5E5E0]">
                <Image
                  src="/tedx-ace-2026/tedx-2.png"
                  alt="Speaker Showcase Poster"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden bg-[#111111] border border-[#E5E5E0]">
                <Image
                  src="/tedx-ace-2026/tedx-3.png"
                  alt="Stage Graphics"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden bg-[#111111] border border-[#E5E5E0]">
                <Image
                  src="/tedx-ace-2026/tedx-4.png"
                  alt="Attendee Badges"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden bg-[#111111] border border-[#E5E5E0]">
                <Image
                  src="/tedx-ace-2026/tedx-5.png"
                  alt="Social Media Campaign"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
