"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, ArrowUpRight, ExternalLink, Laptop, ArrowRight } from "lucide-react";
import { PORTFOLIO_CATEGORIES } from "@/data/projects";

export default function WebShowcase() {
  const webCategory = PORTFOLIO_CATEGORIES.find((cat) => cat.id === "web-showcase");
  const webProjects = webCategory?.projects || [];

  return (
    <section id="web-showcase" className="py-24 bg-[#F7F7F3] border-b border-[#E5E5E0] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5E5E0] shadow-xs mb-4">
              <Globe className="w-3.5 h-3.5 text-[#19C8D8]" />
              <span className="font-mono-meta text-xs font-semibold text-[#19C8D8] tracking-widest uppercase">
                04 / BEYOND THE CANVAS • WEBSITES & DIGITAL EXPERIENCES
              </span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#111111] uppercase tracking-tight">
              I DESIGN MORE THAN JUST GRAPHICS.
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-3 max-w-xl">
            <p className="text-[#707070] text-base md:text-lg leading-relaxed lg:text-right font-normal">
              From visual identities to complete digital experiences — I design websites that turn brand ideas into interactive products people actually connect with.
            </p>

            {/* VISUAL STORYTELLING TRANSITION PIPELINE */}
            <div className="flex flex-wrap items-center gap-2 font-mono-meta text-[11px] font-bold text-[#111111] bg-white px-4 py-2 rounded-full border border-[#E5E5E0] shadow-xs">
              <span className="text-[#707070]">POSTERS</span>
              <span className="text-[#FFB800]">→</span>
              <span className="text-[#707070]">SOCIAL</span>
              <span className="text-[#FFB800]">→</span>
              <span className="text-[#707070]">BRANDING</span>
              <span className="text-[#FFB800]">→</span>
              <span className="text-[#707070]">UI/UX</span>
              <span className="text-[#FFB800]">→</span>
              <span className="text-[#19C8D8] font-extrabold">LIVE WEBSITES</span>
            </div>
          </div>
        </div>

        {/* WEBSITE PROJECT CARDS GRID */}
        <div className="space-y-16">
          {webProjects.map((project, idx) => {
            const isEven = idx % 2 === 1;
            const projectNumber = `0${idx + 1}`;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group bg-white border border-[#E5E5E0] rounded-3xl p-6 sm:p-10 shadow-card hover:shadow-lift transition-all duration-500 overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? "lg:flex-row-reverse" : ""}`}>
                  
                  {/* BROWSER MOCKUP CONTAINER */}
                  <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block relative rounded-2xl overflow-hidden border border-[#E5E5E0] shadow-studio bg-[#111111] group/frame transform group-hover:-translate-y-1.5 transition-transform duration-500"
                    >
                      {/* BROWSER CHROME FRAME HEADER */}
                      <div className="bg-[#1A1A1A] px-4 py-3 border-b border-white/10 flex items-center justify-between select-none">
                        {/* Control Window Dots */}
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                          <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                        </div>

                        {/* Address Bar */}
                        <div className="flex-1 max-w-sm mx-4 bg-[#0F0F0F] rounded-md px-3 py-1 flex items-center justify-center gap-2 border border-white/5 font-mono-meta text-[11px] text-white/70 tracking-wider overflow-hidden">
                          <span className="text-emerald-400 text-xs">🔒</span>
                          <span className="truncate">{project.externalUrl?.replace("https://", "")}</span>
                        </div>

                        {/* Icon */}
                        <div className="flex items-center gap-1.5 text-white/40 text-xs">
                          <Laptop className="w-4 h-4" />
                        </div>
                      </div>

                      {/* WEBSITE PREVIEW IMAGE */}
                      <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] overflow-hidden bg-[#0A0A0A]">
                        <Image
                          src={project.image}
                          alt={`${project.title} Website Preview`}
                          fill
                          quality={95}
                          sizes="(max-width: 1024px) 100vw, 750px"
                          className="object-cover object-top group-hover/frame:scale-102 transition-transform duration-700 ease-out"
                        />

                        {/* HOVER OVERLAY GLOW */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent opacity-0 group-hover/frame:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#111111] font-mono-meta text-xs font-bold shadow-xl">
                            <span>CLICK TO OPEN LIVE WEBSITE</span>
                            <ExternalLink className="w-3.5 h-3.5 text-[#FFB800]" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* PROJECT DETAILS & CASE STUDY CONTENT */}
                  <div className={`lg:col-span-5 flex flex-col justify-between h-full ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div>
                      {/* Eyebrow Label & Year */}
                      <div className="flex items-center justify-between font-mono-meta text-xs text-[#707070] mb-4">
                        <span className="uppercase tracking-widest font-bold text-[#FFB800]">
                          {projectNumber} • {project.category}
                        </span>
                        <span className="font-bold text-[#111111]">{project.year}</span>
                      </div>

                      {/* Project Title */}
                      <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[#111111] uppercase tracking-tight mb-2 group-hover:text-[#FFB800] transition-colors">
                        {project.title}
                      </h3>

                      {/* Subtitle / Hook */}
                      <p className="font-display font-semibold text-lg text-[#111111] italic mb-4">
                        "{project.subtitle}"
                      </p>

                      {/* Description */}
                      <p className="text-[#707070] text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Deliverables / Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.deliverables.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1 rounded-full bg-[#F7F7F3] border border-[#E5E5E0] text-[11px] font-mono-meta text-[#111111] font-semibold"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTAs BUTTON BAR */}
                    <div className="pt-6 border-t border-[#E5E5E0] flex flex-wrap items-center gap-4">
                      {/* Primary Live Website CTA */}
                      <a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#111111] text-white hover:bg-[#FFB800] hover:text-[#111111] font-display font-bold text-xs px-6 py-3.5 rounded-xl shadow-xs transition-all duration-300 group/btn"
                      >
                        <span>EXPLORE WEBSITE</span>
                        <ExternalLink className="w-4 h-4 text-[#FFB800] group-hover/btn:text-[#111111] transition-colors" />
                      </a>

                      {/* Secondary Case Study Detail Link */}
                      <Link
                        href={`/work/${project.slug}`}
                        className="inline-flex items-center justify-center gap-2 bg-white text-[#111111] border border-[#E5E5E0] hover:border-[#111111] font-display font-semibold text-xs px-5 py-3.5 rounded-xl transition-all duration-300"
                      >
                        <span>VIEW CASE STUDY</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#707070]" />
                      </Link>
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* SECTION FOOTER CALLOUT */}
        <div className="mt-16 bg-white border border-[#E5E5E0] rounded-3xl p-8 md:p-10 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#111111] uppercase tracking-tight mb-2">
              HAVE A BRAND THAT NEEDS MORE THAN A LOGO?
            </h3>
            <p className="text-[#707070] text-sm md:text-base">
              Let's turn your visual identity into a complete interactive digital experience.
            </p>
          </div>

          <Link
            href="#contact"
            className="shrink-0 inline-flex items-center justify-center gap-2.5 bg-[#FFB800] text-[#111111] hover:bg-[#111111] hover:text-white font-display font-extrabold text-sm px-8 py-4 rounded-xl shadow-sm transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>LET'S WORK TOGETHER</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
