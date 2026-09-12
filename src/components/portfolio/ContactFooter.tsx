"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp, Mail, Linkedin, Instagram, FolderCheck, MessageCircle, MapPin, ExternalLink, Globe } from "lucide-react";
import Sparkle3D from "@/components/ui/Sparkle3D";

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Brand Identity System",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Construct automated pre-filled WhatsApp message
    const messageText = `Hi Abhishek!%0A%0A*Name:* ${encodeURIComponent(
      formData.name
    )}%0A*Email:* ${encodeURIComponent(
      formData.email
    )}%0A*Project Type:* ${encodeURIComponent(
      formData.projectType
    )}%0A*Details:* ${encodeURIComponent(formData.message)}`;

    const whatsappUrl = `https://wa.me/919581331113?text=${messageText}`;

    // Automatically open WhatsApp in new window/app
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 500);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", projectType: "Brand Identity System", message: "" });
    }, 6000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("abhishekjeripothula@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
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
            <Sparkle3D className="w-4 h-4" />
            <span className="font-mono-meta text-xs font-semibold text-[#111111] tracking-widest uppercase">
              08 / CONTACT & INQUIRIES
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#111111] uppercase tracking-tight max-w-3xl leading-[0.95]">
            LET'S BUILD SOMETHING GREAT.
          </h2>
          <p className="text-[#707070] text-base md:text-lg max-w-xl mt-4">
            Have a brand identity in mind, a social campaign, or want to talk design? Send a message below to launch an instant WhatsApp chat.
          </p>
        </div>

        {/* SPLIT FORM & DIRECT CONTACT CHANNELS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* LEFT: INQUIRY FORM WITH AUTOMATED WHATSAPP REDIRECT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white border border-[#E5E5E0] rounded-3xl p-8 sm:p-10 shadow-card"
          >
            {submitted ? (
              <div className="py-16 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#FFB800] text-[#111111] flex items-center justify-center font-display text-2xl font-bold mb-4 animate-bounce">
                  ✓
                </div>
                <h3 className="font-display text-2xl font-bold text-[#111111]">
                  REDIRECTING TO WHATSAPP...
                </h3>
                <p className="text-[#707070] text-sm max-w-md mt-2">
                  Thank you, <strong>{formData.name}</strong>! Opening your pre-filled project inquiry in WhatsApp chat with Abhishek.
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
                    <option value="Brand Identity System">Brand Identity System</option>
                    <option value="Social Campaign & Ads">Social Campaign & Ad Creatives</option>
                    <option value="TEDx Event Branding">TEDx / Event Branding Ecosystem</option>
                    <option value="UI/UX Interface Design">UI/UX Interface Design</option>
                    <option value="Web & Graphic Design">Web & Graphic Design</option>
                    <option value="Full Creative Direction">Full Creative Direction</option>
                    <option value="Other Design Inquiry">Other Design Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono-meta text-xs font-bold text-[#111111] uppercase mb-2">
                    PROJECT DETAILS
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project timeline, deliverables, and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#F7F7F3] border border-[#E5E5E0] rounded-xl px-4 py-3.5 text-sm text-[#111111] focus:outline-none focus:border-[#FFB800] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#FFB800] text-[#111111] hover:bg-[#111111] hover:text-white font-display font-extrabold text-sm py-4 rounded-xl shadow-sm transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  <span>SEND VIA AUTOMATED WHATSAPP</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </motion.div>

          {/* RIGHT: DIRECT CHANNELS & SOCIAL LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Direct Contact Cards */}
            <div className="bg-white border border-[#E5E5E0] rounded-3xl p-6 shadow-xs flex flex-col gap-3.5">
              <span className="font-mono-meta text-xs font-bold text-[#111111] uppercase tracking-wider mb-1">
                DIRECT CONTACT CHANNELS
              </span>

              {/* WHATSAPP DIRECT */}
              <a
                href="https://wa.me/919581331113"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F7F7F3] border border-[#E5E5E0] hover:border-[#25D366] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-display text-xs font-bold text-[#111111] block">
                      WHATSAPP DIRECT
                    </span>
                    <span className="font-mono-meta text-[11px] text-[#707070]">
                      +91 95813 31113
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#707070] group-hover:text-[#25D366] transition-colors" />
              </a>

              {/* EMAIL DIRECT WITH COPY */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F7F7F3] border border-[#E5E5E0] hover:border-[#111111] transition-all">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-8 h-8 rounded-xl bg-[#FFB800]/10 text-[#FFB800] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="font-display text-xs font-bold text-[#111111] block">
                      EMAIL ADDRESS
                    </span>
                    <a
                      href="mailto:abhishekjeripothula@gmail.com"
                      className="font-mono-meta text-[11px] text-[#707070] hover:text-[#111111] truncate block"
                    >
                      abhishekjeripothula@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className={`font-mono-meta text-[11px] font-bold px-3 py-1.5 rounded-lg transition-colors shrink-0 ${
                    copiedEmail
                      ? "bg-emerald-500 text-white"
                      : "bg-[#111111] text-[#FFB800] hover:bg-[#FFB800] hover:text-[#111111]"
                  }`}
                >
                  {copiedEmail ? "COPIED!" : "COPY"}
                </button>
              </div>

              {/* LOCATION */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F7F7F3] border border-[#E5E5E0]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#19C8D8]/10 text-[#19C8D8] flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-display text-xs font-bold text-[#111111] block">
                      LOCATION
                    </span>
                    <span className="font-mono-meta text-[11px] text-[#707070]">
                      Hyderabad, India • IST (UTC+5:30)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & External Portfolio Links */}
            <div className="bg-white border border-[#E5E5E0] rounded-3xl p-6 shadow-xs flex flex-col gap-3">
              <span className="font-mono-meta text-xs font-bold text-[#111111] uppercase tracking-wider mb-1">
                CREATIVE NETWORKS & PORTFOLIO
              </span>

              <div className="grid grid-cols-2 gap-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/abhixdesigns_25/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F7F7F3] border border-[#E5E5E0] hover:border-[#FF6B35] transition-all group"
                >
                  <Instagram className="w-4 h-4 text-[#FF6B35]" />
                  <div className="truncate">
                    <span className="font-display text-xs font-bold text-[#111111] block truncate">
                      INSTAGRAM
                    </span>
                    <span className="font-mono-meta text-[10px] text-[#707070] truncate block">
                      @abhixdesigns_25
                    </span>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/abhishek-goud-0b6011281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F7F7F3] border border-[#E5E5E0] hover:border-[#0A66C2] transition-all group"
                >
                  <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                  <div className="truncate">
                    <span className="font-display text-xs font-bold text-[#111111] block truncate">
                      LINKEDIN
                    </span>
                    <span className="font-mono-meta text-[10px] text-[#707070] truncate block">
                      Abhishek Goud
                    </span>
                  </div>
                </a>

                {/* Behance */}
                <a
                  href="https://www.behance.net/jeripotabhishe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F7F7F3] border border-[#E5E5E0] hover:border-[#053DA6] transition-all group"
                >
                  <Globe className="w-4 h-4 text-[#053DA6]" />
                  <div className="truncate">
                    <span className="font-display text-xs font-bold text-[#111111] block truncate">
                      BEHANCE
                    </span>
                    <span className="font-mono-meta text-[10px] text-[#707070] truncate block">
                      /jeripotabhishe
                    </span>
                  </div>
                </a>

                {/* Canva Site */}
                <a
                  href="https://saketsaurabh.my.canva.site/abhishekportfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F7F7F3] border border-[#E5E5E0] hover:border-[#FFB800] transition-all group"
                >
                  <ExternalLink className="w-4 h-4 text-[#FFB800]" />
                  <div className="truncate">
                    <span className="font-display text-xs font-bold text-[#111111] block truncate">
                      CANVA SITE
                    </span>
                    <span className="font-mono-meta text-[10px] text-[#707070] truncate block">
                      View Showcase
                    </span>
                  </div>
                </a>
              </div>
            </div>

          </motion.div>

        </div>

        {/* MINIMAL FOOTER STRIP */}
        <div className="pt-12 border-t border-[#E5E5E0] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#111111] overflow-hidden relative shadow-xs border border-[#E5E5E0]">
              <Image
                src="/my-image.png"
                alt="Abhishek Goud"
                fill
                sizes="36px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <span className="font-display font-bold text-sm text-[#111111] block">
                ABHISHEK GOUD
              </span>
              <span className="font-mono-meta text-[10px] text-[#707070]">
                VISUAL CREATIVE • HYDERABAD, INDIA
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 font-mono-meta text-xs text-[#707070]">
            <span>© 2026 ABHISHEK GOUD. ALL RIGHTS RESERVED.</span>
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
