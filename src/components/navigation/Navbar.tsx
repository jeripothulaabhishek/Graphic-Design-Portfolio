"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "WORK", href: "#work" },
  { label: "ARCHIVE", href: "#archive" },
  { label: "PLAYGROUND", href: "#playground" },
  { label: "TOOLS", href: "#tools" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex justify-center">
          <nav
            className={`pointer-events-auto flex items-center justify-between transition-all duration-300 w-full max-w-5xl rounded-full bg-white/95 backdrop-blur-md border border-[#E5E5E0] px-5 ${
              scrolled ? "py-2.5 shadow-md" : "py-3.5 shadow-sm"
            }`}
          >
            {/* LEFT: BRAND MONOGRAM */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 rounded-full bg-[#111111] ring-2 ring-[#111111]/10 group-hover:ring-[#FFB800] transition-all overflow-hidden relative shadow-xs">
                <Image
                  src="/my-image.png"
                  alt="Abhishek"
                  fill
                  sizes="32px"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold tracking-tight text-sm text-[#111111] leading-none">
                  ABHISHEK
                </span>
                <span className="font-mono-meta text-[10px] text-[#707070] tracking-widest uppercase mt-0.5 hidden sm:inline-block">
                  VISUAL CREATIVE
                </span>
              </div>
            </Link>

            {/* CENTER: DESKTOP NAV LINKS */}
            <div className="hidden md:flex items-center gap-1 bg-[#F7F7F3] p-1 rounded-full border border-[#E5E5E0]">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setActiveSection(link.href.substring(1))}
                    className={`relative px-4 py-1.5 rounded-full font-mono-meta text-xs tracking-wider transition-all duration-200 ${
                      isActive
                        ? "text-[#111111] font-semibold"
                        : "text-[#707070] hover:text-[#111111]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-white rounded-full border border-[#E5E5E0] shadow-xs"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      {link.label}
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800]" />
                      )}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* RIGHT: CTA BUTTON & MOBILE TOGGLE */}
            <div className="flex items-center gap-3">
              <Link
                href="#contact"
                className="hidden sm:inline-flex items-center gap-1.5 bg-[#FFB800] text-[#111111] hover:bg-[#111111] hover:text-white font-display font-semibold text-xs px-4 py-2 rounded-full transition-all duration-200 tracking-wide"
              >
                <span>LET'S BUILD</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-9 h-9 rounded-full bg-[#F7F7F3] border border-[#E5E5E0] flex items-center justify-center text-[#111111] hover:bg-[#FFB800] transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN EDITORIAL MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#F7F7F3] flex flex-col justify-between p-6 pt-28 md:hidden"
          >
            <div className="flex flex-col gap-6 max-w-sm">
              <span className="font-mono-meta text-xs text-[#707070] tracking-widest">
                00 / NAVIGATION
              </span>
              <div className="flex flex-col gap-4">
                {NAV_LINKS.map((link, idx) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-baseline justify-between border-b border-[#E5E5E0] pb-3"
                  >
                    <span className="font-display text-3xl font-bold tracking-tight text-[#111111] group-hover:text-[#FFB800] transition-colors">
                      {link.label}
                    </span>
                    <span className="font-mono-meta text-xs text-[#707070]">
                      0{idx + 1}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 border-t border-[#E5E5E0] pt-6">
              <div className="flex justify-between items-center text-xs font-mono-meta text-[#707070]">
                <span>ABHISHEK PORTFOLIO</span>
                <span>2026 EDITION</span>
              </div>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-[#111111] text-white text-center py-3.5 rounded-xl font-display font-bold text-sm hover:bg-[#FFB800] hover:text-[#111111] transition-colors flex items-center justify-center gap-2"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
