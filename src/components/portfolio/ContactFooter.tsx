"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp, Mail, Linkedin, Instagram, Sparkles, FolderCheck } from "lucide-react";

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Brand Identity",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", projectType: "Brand Identity", message: "" });
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#F7F7F3] border-t border-[#E5E5E0] pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5E5E0] shadow-xs mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
            <span className="font-mono-meta text-xs font-semibold text-[#111111] tracking-widest uppercase">
              09 / CONTACT
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#111111] uppercase tracking-tight max-w-3xl leading-[0.95]">
            LET'S BUILD SOMETHING GREAT.
          </h2>
          <p className="text-[#707070] text-base md:text-lg max-w-xl mt-4">
            Have a brand in mind, a collaboration idea, or simply want to talk design? Let's make something worth remembering.
          </p>
        </div>

        {/* SPLIT FORM & 3D FOLDER NOTE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* LEFT: INQUIRY FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white border border-[#E5E5E0] rounded-3xl p-8 sm:p-10 shadow-card"
          >
            {submitted ? (
              <div className="py-16 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#FFB800] text-[#111111] flex items-center justify-center font-display text-2xl font-bold mb-4">
                  ✓
                </div>
                <h3 className="font-display text-2xl font-bold text-[#111111]">
                  INQUIRY RECEIVED!
                </h3>
                <p className="text-[#707070] text-sm max-w-md mt-2">
                  Thank you for reaching out. Abhishek will review your project details and respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono-meta text-xs font-bold text-[#111111] uppercase mb-2">
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#F7F7F3] border border-[#E5E5E0] rounded-xl px-4 py-3.5 text-sm text-[#111111] focus:outline-none focus:border-[#FFB800] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono-meta text-xs font-bold text-[#111111] uppercase mb-2">
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#F7F7F3] border border-[#E5E5E0] rounded-xl px-4 py-3.5 text-sm text-[#111111] focus:outline-none focus:border-[#FFB800] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono-meta text-xs font-bold text-[#111111] uppercase mb-2">
                    PROJECT TYPE
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#F7F7F3] border border-[#E5E5E0] rounded-xl px-4 py-3.5 text-sm text-[#111111] focus:outline-none focus:border-[#FFB800] transition-colors"
                  >
                    <option value="Brand Identity">Brand Identity System</option>
                    <option value="Social Media">Social Campaign / Ad Creatives</option>
                    <option value="Website">Website / Web Application</option>
                    <option value="UI/UX">UI/UX Interface Design</option>
                    <option value="3D / Motion">3D Art & Motion Loops</option>
                    <option value="Campaign">Full Creative Direction</option>
                    <option value="Other">Other Creative Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono-meta text-xs font-bold text-[#111111] uppercase mb-2">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, timeline and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#F7F7F3] border border-[#E5E5E0] rounded-xl px-4 py-3.5 text-sm text-[#111111] focus:outline-none focus:border-[#FFB800] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FFB800] text-[#111111] hover:bg-[#111111] hover:text-white font-display font-extrabold text-sm py-4 rounded-xl shadow-sm transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>SEND PROJECT INQUIRY</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </motion.div>

          {/* RIGHT: 3D PORTFOLIO FOLDER WITH HANDWRITTEN NOTE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* 3D Folder Visual Card */}
            <div className="bg-[#111111] text-white border border-[#333333] rounded-3xl p-8 shadow-studio relative overflow-hidden flex flex-col justify-between h-80">
              <div className="flex justify-between items-start">
                <span className="font-mono-meta text-xs text-[#FFB800] tracking-wider uppercase">
                  CONFIDENTIAL CREATIVE BRIEF
                </span>
                <FolderCheck className="w-6 h-6 text-[#FFB800]" />
              </div>

              {/* Handwritten note peek */}
              <div className="my-auto bg-[#F7F7F3] text-[#111111] p-5 rounded-2xl border border-dashed border-[#111111]/30 shadow-md transform -rotate-1">
                <span className="font-mono-meta text-[10px] text-[#707070] uppercase block mb-1">
                  PROJECT NOTE #2026
                </span>
                <p className="font-display font-extrabold text-lg uppercase leading-tight tracking-tight">
                  "GOOD PROJECTS START WITH GOOD CONVERSATIONS."
                </p>
              </div>

              <div className="flex justify-between items-center text-xs font-mono-meta text-zinc-400">
                <span>ABHISHEK STUDIO</span>
                <span>GLOBAL CLIENTS</span>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="bg-white border border-[#E5E5E0] rounded-3xl p-6 shadow-xs flex flex-col gap-4">
              <span className="font-mono-meta text-xs font-bold text-[#111111] uppercase tracking-wider">
                DIRECT CHANNELS
              </span>

              <a
                href="mailto:contact@abhishek.design"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F7F7F3] border border-[#E5E5E0] hover:border-[#111111] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#FFB800]" />
                  <span className="font-mono-meta text-xs font-bold text-[#111111]">
                    abhishekm.designing@gmail.com
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#707070]" />
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F7F7F3] border border-[#E5E5E0] hover:border-[#111111] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-[#19C8D8]" />
                  <span className="font-mono-meta text-xs font-bold text-[#111111]">
                    LINKEDIN PROFILE
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#707070]" />
              </a>
            </div>

          </motion.div>

        </div>

        {/* MINIMAL FOOTER STRIP */}
        <div className="pt-12 border-t border-[#E5E5E0] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#111111] overflow-hidden relative shadow-xs border border-[#E5E5E0]">
              <Image
                src="/my-image.png"
                alt="Abhishek"
                fill
                sizes="32px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <span className="font-display font-bold text-sm text-[#111111] block">
                ABHISHEK
              </span>
              <span className="font-mono-meta text-[10px] text-[#707070]">
                "DESIGN TODAY. MOVE TOMORROW."
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 font-mono-meta text-xs text-[#707070]">
            <span>© 2026 ABHISHEK. ALL RIGHTS RESERVED.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 font-mono-meta text-xs font-bold text-[#111111] hover:text-[#FFB800] transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
