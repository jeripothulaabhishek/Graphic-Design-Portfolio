"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

type CursorMode = "default" | "pointer" | "zoom" | "text" | "wait" | "move";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
}

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorMode, setCursorMode] = useState<CursorMode>("default");
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdRef = useRef(0);

  useEffect(() => {
    // Check if touch device
    if (typeof window !== "undefined") {
      const isTouch =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches;
      setIsTouchDevice(isTouch);
      if (isTouch) return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Inspect hovered element hierarchy for custom cursor attribute or standard tag
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const closestCursorAttr = target.closest("[data-cursor]") as HTMLElement | null;
      if (closestCursorAttr) {
        const mode = closestCursorAttr.getAttribute("data-cursor") as CursorMode;
        if (mode) {
          setCursorMode(mode);
          return;
        }
      }

      const closestClickable = target.closest("a, button, input, textarea, select, [role='button'], summary");
      if (closestClickable) {
        const tagName = closestClickable.tagName.toLowerCase();
        if (tagName === "input" || tagName === "textarea" || (closestClickable as HTMLElement).isContentEditable) {
          setCursorMode("text");
        } else {
          setCursorMode("pointer");
        }
        return;
      }

      setCursorMode("default");
    };

    const onMouseDown = (e: MouseEvent) => {
      setIsMouseDown(true);
      spawnParticles(e.clientX, e.clientY);
    };

    const onMouseUp = () => {
      setIsMouseDown(false);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  // Particle explosion on click
  const spawnParticles = (x: number, y: number) => {
    const colors = ["#FFB800", "#FFF9C4", "#111111", "#FF6B35", "#19C8D8"];
    const newParticles: Particle[] = [];
    const count = 7;

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = 2.5 + Math.random() * 3.5;
      newParticles.push({
        id: particleIdRef.current++,
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1, // slight upward float
        size: Math.random() > 0.5 ? 6 : 4, // pixel grid sized square
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.floor(Math.random() * 4) * 90,
      });
    }

    setParticles((prev) => [...prev, ...newParticles]);
  };

  // Update particles animation
  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.15, // gravity
            size: p.size * 0.9,
          }))
          .filter((p) => p.size > 0.8)
      );
    }, 16);

    return () => clearInterval(interval);
  }, [particles]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999999] overflow-hidden">
      {/* RETRO PIXEL PARTICLES BURST */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute border border-[#111111]/40"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            transform: `translate(-50%, -50%) rotate(${p.rotation}deg)`,
            boxShadow: "1px 1px 0px rgba(0,0,0,0.5)",
            imageRendering: "pixelated",
          }}
        />
      ))}

      {/* MAIN RETRO PIXEL CURSOR CONTAINER */}
      <motion.div
        className="fixed top-0 left-0"
        style={{
          x: position.x,
          y: position.y,
        }}
        animate={{
          scale: isMouseDown ? 0.85 : cursorMode === "pointer" ? 1.1 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 850,
          damping: 45,
          mass: 0.1,
        }}
      >
        {/* CLICK PULSE RINGS (FOR POINTER STATE) */}
        {cursorMode === "pointer" && (
          <motion.div
            className="absolute -top-3 -left-3 h-10 w-10 rounded-full border-2 border-dashed border-[#FFB800]/80"
            initial={{ scale: 0.6, opacity: 0.8 }}
            animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.8, 0.2, 0.8], rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        )}

        {/* CLICK WAVE IMPACT */}
        {isMouseDown && (
          <motion.div
            className="absolute -top-4 -left-4 h-12 w-12 rounded-full border-2 border-[#111111] bg-[#FFB800]/30"
            initial={{ scale: 0.2, opacity: 1 }}
            animate={{ scale: 1.6, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
        )}

        {/* RETRO PIXEL CURSOR SVGs */}
        <div className="relative -top-1 -left-1 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.8)]">
          {cursorMode === "default" && <RetroArrowSvg />}
          {cursorMode === "pointer" && <RetroPointerHandSvg isMouseDown={isMouseDown} />}
          {cursorMode === "zoom" && <RetroZoomSvg />}
          {cursorMode === "text" && <RetroTextSvg />}
          {cursorMode === "wait" && <RetroHourglassSvg />}
          {cursorMode === "move" && <RetroMoveSvg />}
        </div>
      </motion.div>
    </div>
  );
}

/* =========================================================================
   SVG PIXEL ART CURSORS (Cream #FFFDE7 body, Dark #1C1917 pixel outline)
   ========================================================================= */

// 1. Retro Arrow Pointer
function RetroArrowSvg() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ shapeRendering: "crispEdges" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 2H6V6H10V10H14V14H18V18H22V22H14V26H10V22H6V18H2V2Z"
        fill="#1C1917"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 4H6V8H10V12H14V16H18V18H14V20H10V16H6V12H4V4Z"
        fill="#FFF9C4"
      />
    </svg>
  );
}

// 2. Retro Pointer Hand (Pointing index finger with click wave ring)
function RetroPointerHandSvg({ isMouseDown }: { isMouseDown: boolean }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ shapeRendering: "crispEdges" }}
    >
      {/* Index finger top click wave sparkles */}
      <path d="M12 0H16V4H12V0Z" fill="#FFB800" />
      <path d="M6 4H10V8H6V4Z" fill="#FFB800" />
      <path d="M18 4H22V8H18V4Z" fill="#FFB800" />

      {/* Dark Pixel Outline Hand */}
      <path
        d="M12 4H16V16H18V12H22V16H24V14H28V24H26V28H14V26H10V22H8V14H12V4Z"
        fill="#1C1917"
      />
      {/* Cream Glove Body */}
      <path
        d="M13 6H15V16H19V14H21V16H23V16H27V23H25V27H15V25H11V21H9V15H13V6Z"
        fill={isMouseDown ? "#FFB800" : "#FFF9C4"}
      />
      {/* Detail Shadow Lines */}
      <path d="M15 18H19V20H15V18Z" fill="#E6D385" />
      <path d="M19 18H23V20H19V18Z" fill="#E6D385" />
      <path d="M11 25H15V27H11V25Z" fill="#1C1917" />
    </svg>
  );
}

// 3. Retro Zoom Magnifier (+ sign inside)
function RetroZoomSvg() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ shapeRendering: "crispEdges" }}
    >
      {/* Lens Circle Dark Border */}
      <path
        d="M6 2H18V4H22V8H24V16H22V20H18V22H16V20H18V16H20V8H18V6H6V8H4V16H6V18H14V22H10V24H8V26H6V28H4V32H0V28H4V26H6V24H8V22H6V20H4V18H2V8H4V4H6V2Z"
        fill="#1C1917"
      />
      {/* Cream Glass Lens */}
      <path d="M6 4H18V8H20V16H18V20H6V16H4V8H6V4Z" fill="#FFF9C4" />

      {/* Plus Sign (+) inside Lens */}
      <path d="M11 8H13V16H11V8Z" fill="#1C1917" />
      <path d="M7 11H17V13H7V11Z" fill="#1C1917" />

      {/* Handle */}
      <path d="M18 18H22V22H18V18Z" fill="#FFB800" />
      <path d="M22 22H26V26H22V22Z" fill="#1C1917" />
      <path d="M26 26H30V30H26V26Z" fill="#1C1917" />
    </svg>
  );
}

// 4. Retro Text Beam (I-Beam)
function RetroTextSvg() {
  return (
    <svg
      width="24"
      height="28"
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ shapeRendering: "crispEdges" }}
    >
      {/* Top bar */}
      <path d="M4 2H20V6H16V8H14V20H16V22H20V26H4V22H8V20H10V8H8V6H4V2Z" fill="#1C1917" />
      <path d="M6 4H18V5H14V7H12V21H14V23H18V24H6V23H10V21H12V7H10V5H6V4Z" fill="#FFF9C4" />
    </svg>
  );
}

// 5. Retro Hourglass (Wait / Loading)
function RetroHourglassSvg() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ shapeRendering: "crispEdges" }}
    >
      {/* Hourglass Frame Outer Dark */}
      <path
        d="M2 2H26V6H22V10H18V12H16V16H18V18H22V22H26V26H2V22H6V18H10V16H12V12H10V10H6V6H2V2Z"
        fill="#1C1917"
      />
      {/* Cream Inner Body */}
      <path
        d="M4 4H24V5H20V9H16V11H14V12H13V11H11V9H7V5H4V4ZM4 24H24V23H20V19H16V17H14V16H13V17H11V19H7V23H4V24Z"
        fill="#FFF9C4"
      />
      {/* Sand Amber Fill */}
      <path d="M6 6H22V8H18V10H14V11H12V10H8V8H6V6Z" fill="#FFB800" />
      <path d="M8 20H20V22H22V23H6V22H8V20Z" fill="#FFB800" />
    </svg>
  );
}

// 6. Retro Move 4-Way Crosshair
function RetroMoveSvg() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ shapeRendering: "crispEdges" }}
    >
      <path
        d="M12 0H16V4H20V6H16V10H20V6H24V10H28V14H24V18H20V14H16V18H20V22H16V28H12V22H8V18H12V14H8V18H4V14H0V10H4V6H8V10H12V6H8V4H12V0Z"
        fill="#1C1917"
      />
      <path d="M13 2H15V6H13V2ZM22 11H26V13H22V11ZM13 22H15V26H13V22ZM2 11H6V13H2V11Z" fill="#FFF9C4" />
    </svg>
  );
}
