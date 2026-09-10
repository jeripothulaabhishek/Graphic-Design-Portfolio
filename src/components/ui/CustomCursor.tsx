"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CursorMode = "default" | "pointer" | "zoom" | "text" | "wait" | "move";

interface TrailPoint {
  x: number;
  y: number;
  time: number;
  speed: number;
}

interface InkParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
}

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorMode, setCursorMode] = useState<CursorMode>("default");
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [particles, setParticles] = useState<InkParticle[]>([]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointsRef = useRef<TrailPoint[]>([]);
  const lastPosRef = useRef({ x: -100, y: -100 });
  const lastScrollYRef = useRef(0);
  const particleIdRef = useRef(0);

  useEffect(() => {
    // Check for touch devices
    if (typeof window !== "undefined") {
      const isTouch =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches;
      setIsTouchDevice(isTouch);
      if (isTouch) return;
      lastScrollYRef.current = window.scrollY;
    }

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
      if (!isVisible) setIsVisible(true);

      // Calculate speed for dynamic line weight
      const dx = clientX - lastPosRef.current.x;
      const dy = clientY - lastPosRef.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      pointsRef.current.push({
        x: clientX,
        y: clientY,
        time: Date.now(),
        speed: dist,
      });

      lastPosRef.current = { x: clientX, y: clientY };

      // Inspect hovered element hierarchy for custom cursor attribute or clickable element
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
      spawnInkSplatter(e.clientX, e.clientY);
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

    // Smooth Scroll Offset Adjustment so pen line floats seamlessly with scroll inertia
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;

      // Adjust points by vertical scroll delta
      pointsRef.current.forEach((p) => {
        p.y -= deltaY;
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  // 60FPS Fluid Canvas Render Loop for Vanishing Pen Ribbon Trail
  useEffect(() => {
    if (isTouchDevice) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = Date.now();
      const maxAge = 650; // Pen stroke vanishes gracefully in 650ms

      // Prune expired trail points
      pointsRef.current = pointsRef.current.filter((p) => now - p.time < maxAge);
      const pts = pointsRef.current;

      if (pts.length > 2) {
        ctx.save();
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        for (let i = 1; i < pts.length; i++) {
          const p1 = pts[i - 1];
          const p2 = pts[i];
          const age = now - p2.time;
          const life = 1 - age / maxAge; // 1.0 (fresh) -> 0.0 (vanished)

          if (life <= 0) continue;

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);

          // Quadratic curve smoothing
          const midX = (p1.x + p2.x) / 2;
          const midY = (p1.y + p2.y) / 2;
          ctx.quadraticCurveTo(p1.x, p1.y, midX, midY);

          // Dynamic line stroke tapering based on mouse speed & life
          const speedFactor = Math.min(1.5, Math.max(0.4, p2.speed / 15));
          const strokeWidth = Math.max(0.8, (i / pts.length) * 5.5 * life * speedFactor);
          ctx.lineWidth = strokeWidth;

          // Theme Color Gradient (Amber Gold -> Vibrant Coral -> Cyan Glow)
          const strokeGrad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
          strokeGrad.addColorStop(0, `rgba(255, 184, 0, ${life * 0.95})`);
          strokeGrad.addColorStop(0.5, `rgba(255, 107, 53, ${life * 0.85})`);
          strokeGrad.addColorStop(1, `rgba(25, 200, 216, ${life * 0.4})`);

          ctx.strokeStyle = strokeGrad;
          ctx.shadowColor = "rgba(255, 184, 0, 0.4)";
          ctx.shadowBlur = 6 * life;
          ctx.stroke();
        }

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animId);
    };
  }, [isTouchDevice]);

  // Spawn Ink Splatter Particles on Click
  const spawnInkSplatter = (x: number, y: number) => {
    const colors = ["#FFB800", "#FF6B35", "#19C8D8", "#111111", "#FFF2A8"];
    const newParticles: InkParticle[] = [];
    const count = 9;

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
      const speed = 2 + Math.random() * 4;
      newParticles.push({
        id: particleIdRef.current++,
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.5,
        size: 3 + Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
      });
    }

    setParticles((prev) => [...prev, ...newParticles]);
  };

  // Particles animation step
  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            vy: p.vy + 0.12,
            size: p.size * 0.92,
            alpha: p.alpha * 0.92,
          }))
          .filter((p) => p.alpha > 0.05 && p.size > 0.5)
      );
    }, 16);

    return () => clearInterval(interval);
  }, [particles]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999999] overflow-hidden select-none">
      {/* 1. FLUID CANVAS FOR VANISHING PEN STROKE TRAIL */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[999998] w-full h-full"
      />

      {/* 2. DYNAMIC INK SPLATTER PARTICLES */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full shadow-xs"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            opacity: p.alpha,
            transform: "translate(-50%, -50%)",
            boxShadow: `0 0 8px ${p.color}`,
          }}
        />
      ))}

      {/* 3. DIGITAL DESIGNER PEN / STYLUS NIB CURSOR CONTAINER */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999999]"
        style={{
          x: position.x,
          y: position.y,
        }}
        animate={{
          scale: isMouseDown ? 0.85 : cursorMode === "pointer" ? 1.2 : 1,
          rotate: cursorMode === "pointer" ? 45 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 38,
          mass: 0.1,
        }}
      >
        {/* POINTER ACTIVE GLOW RING */}
        {cursorMode === "pointer" && (
          <motion.div
            className="absolute -top-4 -left-4 h-12 w-12 rounded-full border-2 border-dashed border-[#FFB800]"
            initial={{ scale: 0.7, opacity: 0.8 }}
            animate={{ scale: [0.9, 1.3, 0.9], opacity: [0.9, 0.3, 0.9], rotate: 360 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
        )}

        {/* CLICK IMPACT WAVE */}
        {isMouseDown && (
          <motion.div
            className="absolute -top-5 -left-5 h-14 w-14 rounded-full border-2 border-[#FFB800] bg-[#FFB800]/25"
            initial={{ scale: 0.2, opacity: 1 }}
            animate={{ scale: 1.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        )}

        {/* DESIGNER PEN NIB / PRECISION CURSOR SVG */}
        <div className="relative -top-1 -left-1">
          {cursorMode === "default" && <DesignerPenNibSvg isMouseDown={isMouseDown} />}
          {cursorMode === "pointer" && <DesignerPointerNibSvg isMouseDown={isMouseDown} />}
          {cursorMode === "zoom" && <DesignerZoomNibSvg />}
          {cursorMode === "text" && <DesignerTextBeamSvg />}
          {cursorMode === "move" && <DesignerMoveSvg />}
          {cursorMode === "wait" && <DesignerWaitSvg />}
        </div>
      </motion.div>
    </div>
  );
}

/* =========================================================================
   DESIGNER DIGITAL STYLUS & PEN NIB SVGs
   ========================================================================= */

// 1. Digital Stylus Pen Nib (Default Precision Cursor)
function DesignerPenNibSvg({ isMouseDown }: { isMouseDown: boolean }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]"
    >
      <defs>
        <linearGradient id="pen-shaft" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#111111" />
          <stop offset="100%" stopColor="#222222" />
        </linearGradient>
        <linearGradient id="pen-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF4B8" />
          <stop offset="60%" stopColor="#FFB800" />
          <stop offset="100%" stopColor="#E59D00" />
        </linearGradient>
      </defs>

      {/* Pen Shaft Body */}
      <path d="M 3 3 L 18 8 L 8 18 Z" fill="url(#pen-shaft)" stroke="#111111" strokeWidth="1" />
      {/* Metallic Gold Band */}
      <path d="M 8 18 L 12 14 L 15 17 L 11 21 Z" fill="url(#pen-gold)" />
      {/* Precision Nib Tip Pointing at (0,0) */}
      <path d="M 0 0 L 7 3 L 3 7 Z" fill={isMouseDown ? "#FF6B35" : "url(#pen-gold)"} />
      {/* Nib Specular Core Glow */}
      <circle cx="2" cy="2" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

// 2. Pointer Nib (Interactive Hover State)
function DesignerPointerNibSvg({ isMouseDown }: { isMouseDown: boolean }) {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_4px_12px_rgba(255,184,0,0.6)]"
    >
      <path d="M 0 0 L 10 3 L 4 9 Z" fill="#FFB800" />
      <path d="M 4 9 L 14 19 L 19 14 L 9 4 Z" fill="#111111" stroke="#FFB800" strokeWidth="1.5" />
      <circle cx="2" cy="2" r="2" fill="#FFFFFF" />
    </svg>
  );
}

// 3. Zoom Lens Nib
function DesignerZoomNibSvg() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]"
    >
      <circle cx="12" cy="12" r="9" fill="#111111" stroke="#FFB800" strokeWidth="2.5" />
      <circle cx="12" cy="12" r="7" fill="#FFB800" opacity="0.25" />
      <path d="M 12 8 L 12 16 M 8 12 L 16 12" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" />
      <path d="M 19 19 L 29 29" stroke="#111111" strokeWidth="4" strokeLinecap="round" />
      <path d="M 19 19 L 29 29" stroke="#FFB800" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 4. Precision Text I-Beam
function DesignerTextBeamSvg() {
  return (
    <svg
      width="24"
      height="28"
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
    >
      <path d="M 4 2 H 20 M 12 2 V 26 M 4 26 H 20" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" />
      <path d="M 6 4 H 18 M 12 4 V 24 M 6 24 H 18" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// 5. 4-Way Drag Move Crosshair
function DesignerMoveSvg() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_4px_10px_rgba(0,0,0,0.4)]"
    >
      <circle cx="15" cy="15" r="5" fill="#FFB800" stroke="#111111" strokeWidth="1.5" />
      <path d="M 15 2 L 15 28 M 2 15 L 28 15" stroke="#111111" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 15 2 L 15 28 M 2 15 L 28 15" stroke="#FFB800" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// 6. Hourglass / Wait Spinner
function DesignerWaitSvg() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="animate-spin"
    >
      <circle cx="14" cy="14" r="11" stroke="#E5E5E0" strokeWidth="3" />
      <path d="M 14 3 A 11 11 0 0 1 25 14" stroke="#FFB800" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
