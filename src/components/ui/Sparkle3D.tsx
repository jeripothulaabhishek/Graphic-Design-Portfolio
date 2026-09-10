"use client";

import { motion } from "framer-motion";

interface Sparkle3DProps {
  className?: string;
  size?: number;
}

export default function Sparkle3D({
  className = "w-4 h-4 text-[#FFB800]",
  size,
}: Sparkle3DProps) {
  return (
    <motion.span
      className={`inline-flex items-center justify-center relative select-none shrink-0 ${className}`}
      whileHover={{ scale: 1.3, rotate: 90 }}
      whileTap={{ scale: 0.85 }}
      transition={{ type: "spring", stiffness: 450, damping: 15 }}
      style={size ? { width: size, height: size } : undefined}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_2px_6px_rgba(255,184,0,0.5)]"
      >
        <defs>
          <linearGradient id="sparkle-grad-top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4B8" />
            <stop offset="60%" stopColor="#FFB800" />
            <stop offset="100%" stopColor="#E59D00" />
          </linearGradient>
          <linearGradient id="sparkle-grad-shade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFB800" />
            <stop offset="100%" stopColor="#B87500" />
          </linearGradient>
          <linearGradient id="sparkle-grad-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFDC73" />
          </linearGradient>
        </defs>

        {/* 3D Faceted Diamond Main Star */}
        {/* Top-Left Light facet */}
        <path d="M12 1.5 L12 12 L1.5 12 Z" fill="url(#sparkle-grad-top)" />
        {/* Top-Right Mid facet */}
        <path d="M12 1.5 L22.5 12 L12 12 Z" fill="url(#sparkle-grad-shade)" />
        {/* Bottom-Right Dark facet */}
        <path d="M12 12 L22.5 12 L12 22.5 Z" fill="url(#sparkle-grad-shade)" opacity="0.85" />
        {/* Bottom-Left Mid facet */}
        <path d="M12 12 L12 22.5 L1.5 12 Z" fill="url(#sparkle-grad-top)" opacity="0.9" />

        {/* 3D Bevel Highlight Ridge */}
        <path d="M12 1.5 L12 22.5" stroke="#FFFFFF" strokeWidth="0.75" strokeLinecap="round" opacity="0.7" />
        <path d="M1.5 12 L22.5 12" stroke="#FFFFFF" strokeWidth="0.75" strokeLinecap="round" opacity="0.7" />

        {/* Center Diamond Specular Flare */}
        <path
          d="M12 8.5 L15.5 12 L12 15.5 L8.5 12 Z"
          fill="url(#sparkle-grad-glow)"
          className="animate-pulse"
        />

        {/* Secondary Floating Accent Sparkle */}
        <path
          d="M19.5 2.5 L20.3 4 L21.8 4.8 L20.3 5.6 L19.5 7.1 L18.7 5.6 L17.2 4.8 L18.7 4 Z"
          fill="url(#sparkle-grad-top)"
        />
      </svg>
    </motion.span>
  );
}
