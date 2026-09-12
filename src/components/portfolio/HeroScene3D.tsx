"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import * as THREE from "three";
import { Layers, Box, Compass, Move3d } from "lucide-react";
import Sparkle3D from "@/components/ui/Sparkle3D";

export default function HeroScene3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Framer Motion 3D Tilt Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for 3D rotation
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), {
    stiffness: 250,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-18, 18]), {
    stiffness: 250,
    damping: 25,
  });

  // Parallax offsets for floating items
  const floatX1 = useTransform(x, [-0.5, 0.5], [-25, 25]);
  const floatY1 = useTransform(y, [-0.5, 0.5], [-20, 20]);

  const floatX2 = useTransform(x, [-0.5, 0.5], [20, -20]);
  const floatY2 = useTransform(y, [-0.5, 0.5], [18, -18]);

  const floatX3 = useTransform(x, [-0.5, 0.5], [-12, 12]);
  const floatY3 = useTransform(y, [-0.5, 0.5], [-15, 15]);

  // Spotlight Cursor Reflection Template (Top Level Hook)
  const spotlightX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const spotlightY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);
  const spotlightBg = useMotionTemplate`radial-gradient(600px circle at ${spotlightX} ${spotlightY}, rgba(255, 184, 0, 0.15), transparent 40%)`;

  const [isMobileDevice, setIsMobileDevice] = useState(false);

  // Handle Mouse Movement over Card Container
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  // Handle Touch Drag on Mobile Devices
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const touchX = e.touches[0].clientX - rect.left;
    const touchY = e.touches[0].clientY - rect.top;

    const xPct = Math.max(-0.5, Math.min(0.5, touchX / width - 0.5));
    const yPct = Math.max(-0.5, Math.min(0.5, touchY / height - 0.5));

    setIsHovered(true);
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  // Mobile Device Orientation Gyroscope Tilt Handler
  useEffect(() => {
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.beta === null || e.gamma === null) return;
      setIsMobileDevice(true);

      // Normalizing gamma (left/right tilt) [-30, 30] to [-0.5, 0.5]
      const clampedGamma = Math.max(-25, Math.min(25, e.gamma));
      const xPct = clampedGamma / 50;

      // Normalizing beta (front/back tilt around 40 deg holding angle) [-25, 25] to [-0.5, 0.5]
      const targetBeta = e.beta - 40;
      const clampedBeta = Math.max(-25, Math.min(25, targetBeta));
      const yPct = clampedBeta / 50;

      x.set(xPct);
      y.set(yPct);
    };

    if (typeof window !== "undefined" && window.DeviceOrientationEvent) {
      if (typeof (DeviceOrientationEvent as any).requestPermission === "function") {
        const requestGyro = () => {
          (DeviceOrientationEvent as any)
            .requestPermission()
            .then((permissionState: string) => {
              if (permissionState === "granted") {
                window.addEventListener("deviceorientation", handleOrientation, true);
              }
            })
            .catch(() => {});
        };
        window.addEventListener("touchstart", requestGyro, { once: true });
      } else {
        window.addEventListener("deviceorientation", handleOrientation, true);
      }
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("deviceorientation", handleOrientation, true);
      }
    };
  }, [x, y]);

  // Three.js WebGL Ambient Particle Field & Light Dynamics
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 100);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particle Geometry (Ambient Golden Studio Dust)
    const particleCount = 75;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      scales[i] = Math.random() * 0.08 + 0.02;
    }

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    // Particle Material
    const material = new THREE.PointsMaterial({
      color: 0xffb800,
      size: 0.12,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Dynamic Ambient Studio Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const goldLight = new THREE.PointLight(0xffb800, 2, 10);
    goldLight.position.set(-3, 3, 2);
    scene.add(goldLight);

    const tealLight = new THREE.PointLight(0x00d2ff, 1.5, 10);
    tealLight.position.set(3, -2, 2);
    scene.add(tealLight);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Rotate particle cloud gently
      particles.rotation.y = elapsedTime * 0.04;
      particles.rotation.x = Math.sin(elapsedTime * 0.03) * 0.05;

      // Animate light intensity pulses
      goldLight.intensity = 2 + Math.sin(elapsedTime * 2) * 0.4;
      tealLight.intensity = 1.5 + Math.cos(elapsedTime * 1.5) * 0.3;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={handleMouseLeave}
      className="relative w-full min-h-[440px] sm:min-h-[540px] md:min-h-[600px] flex items-center justify-center p-2 sm:p-4 select-none perspective-1000 touch-pan-y"
    >
      {/* 1. WEBGL CANVAS BACKDROP FOR AMBIENT PARTICLES & 3D LIGHTING */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 rounded-3xl opacity-80"
      />

      {/* 2. DYNAMIC AMBIENT BACKDROP GLOW */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#FFB800]/10 via-transparent to-[#00D2FF]/10 rounded-3xl blur-2xl pointer-events-none" />

      {/* 3. INTERACTIVE 3D STAGE CONTAINER */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-[560px] flex flex-col items-center justify-center z-10 transition-shadow duration-300"
      >
        {/* MAIN 3D ARTWORK CONTAINER CARD */}
        <div
          style={{ transform: "translateZ(30px)" }}
          className="relative w-full rounded-2xl bg-white/70 border border-[#E5E5E0] shadow-studio p-3 sm:p-5 backdrop-blur-md overflow-hidden group"
        >
          {/* CURSOR SPOTLIGHT REFLECTION OVERLAY */}
          <motion.div
            className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-20"
            style={{
              background: spotlightBg,
            }}
          />

          {/* MAIN 3D RENDER IMAGE */}
          <div className="relative w-full aspect-[1/1] sm:aspect-[4/3.8] rounded-xl overflow-hidden bg-gradient-to-b from-[#FDFDFB] to-[#F5F5EE] flex items-center justify-center shadow-inner">
            <Image
              src="/hero-section-image.png"
              alt="Abhishek 3D Creative Studio Render"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-contain p-1 sm:p-2 filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />

            {/* SOFT REFLECTION FLOOR SHADOW */}
            <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#111111]/10 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* SUBTLE BRAND STRIP FOOTER */}
          <div className="mt-3.5 pt-3 border-t border-[#E5E5E0]/80 flex items-center justify-between text-xs font-mono-meta text-[#707070]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFB800] animate-pulse" />
              <span className="font-semibold text-[#111111] uppercase tracking-wider text-[10px] sm:text-[11px]">
                ABHISHEK CREATIVE DESIGN STUDIO
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-[10px] text-[#707070] uppercase tracking-widest font-bold">
              <Layers className="w-3.5 h-3.5 text-[#FFB800]" />
              <span>UI/UX • WEB • GRAPHICS</span>
            </div>
          </div>
        </div>

        {/* 4. FLOATING DEPTH 3D APP LOGOS & PARALLAX Z-LAYERS AROUND HERO FRAME */}
        
        {/* TOP LEFT BADGE: PHOTOSHOP & CAPCUT 3D */}
        <motion.div
          style={{
            x: floatX1,
            y: floatY1,
            transform: "translateZ(75px)",
          }}
          animate={{
            y: [-4, 6, -4],
            rotate: [-1.5, 1.5, -1.5],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-4 -left-3 sm:-top-8 sm:-left-8 bg-white/95 border border-[#E5E5E0] shadow-2xl rounded-2xl px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2.5 sm:gap-3 backdrop-blur-xl z-30 pointer-events-none group"
        >
          <div className="flex items-center -space-x-1.5">
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-xl overflow-hidden shadow-md border border-white/60 bg-[#001E36]">
              <Image
                src="/tools/photoshop-3d.png"
                alt="Photoshop 3D"
                fill
                className="object-cover p-0.5"
              />
            </div>
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-xl overflow-hidden shadow-md border border-white/60 bg-[#111111]">
              <Image
                src="/tools/capcut-3d.jpg"
                alt="CapCut 3D"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-[11px] sm:text-xs font-bold text-[#111111]">Photoshop & CapCut</span>
            <span className="font-mono-meta text-[9px] sm:text-[10px] text-[#707070] font-medium">Visual & Motion Graphics</span>
          </div>
        </motion.div>

        {/* TOP RIGHT BADGE: FIGMA & CANVA 3D */}
        <motion.div
          style={{
            x: floatX2,
            y: floatY2,
            transform: "translateZ(65px)",
          }}
          animate={{
            y: [5, -7, 5],
            rotate: [1.5, -1.5, 1.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-4 -right-3 sm:-top-7 sm:-right-7 bg-white/95 border border-[#E5E5E0] shadow-2xl rounded-2xl px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2.5 sm:gap-3 backdrop-blur-xl z-30 pointer-events-none group"
        >
          <div className="flex items-center -space-x-1.5">
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-xl overflow-hidden shadow-md border border-white/60 bg-[#1E1E1E]">
              <Image
                src="/tools/figma-3d.png"
                alt="Figma 3D"
                fill
                className="object-cover p-0.5"
              />
            </div>
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-xl overflow-hidden shadow-md border border-white/60 bg-[#00C4CC]">
              <Image
                src="/tools/canva-3d.png"
                alt="Canva 3D"
                fill
                className="object-cover p-0.5"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display text-[11px] sm:text-xs font-bold text-[#111111]">Figma & Canva</span>
            <span className="font-mono-meta text-[9px] sm:text-[10px] text-[#FFB800] font-semibold uppercase tracking-wider">
              UI/UX & Design Systems
            </span>
          </div>
        </motion.div>

        {/* MIDDLE LEFT BADGE: 3D UI / UX DESIGN */}
        <motion.div
          style={{
            x: floatX3,
            y: floatY1,
            transform: "translateZ(85px)",
          }}
          animate={{
            y: [-6, 6, -6],
            scale: [0.98, 1.02, 0.98],
          }}
          transition={{
            duration: 4.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="hidden md:flex absolute top-1/2 -left-10 -translate-y-1/2 bg-white/95 border border-[#E5E5E0] shadow-2xl rounded-2xl px-3.5 py-2.5 items-center gap-3 backdrop-blur-xl z-30 pointer-events-none"
        >
          <div className="relative w-8 h-8 rounded-xl overflow-hidden shadow-md border border-white/60 bg-[#0D1117]">
            <Image
              src="/tools/ui-ux-3d.jpg"
              alt="UI/UX 3D"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xs font-bold text-[#111111]">UI / UX Design</span>
            <span className="font-mono-meta text-[10px] text-[#00D2FF] font-semibold">Interactive Prototypes</span>
          </div>
        </motion.div>

        {/* MIDDLE RIGHT BADGE: WEB DEV & REACT NEXT 3D */}
        <motion.div
          style={{
            x: floatX1,
            y: floatY3,
            transform: "translateZ(70px)",
          }}
          animate={{
            y: [6, -6, 6],
            scale: [1.02, 0.98, 1.02],
          }}
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="hidden md:flex absolute top-1/2 -right-10 -translate-y-1/2 bg-white/95 border border-[#E5E5E0] shadow-2xl rounded-2xl px-3.5 py-2.5 items-center gap-3 backdrop-blur-xl z-30 pointer-events-none"
        >
          <div className="relative w-8 h-8 rounded-xl overflow-hidden shadow-md border border-white/60 bg-[#000000]">
            <Image
              src="/tools/react-next-3d.png"
              alt="Web Dev 3D"
              fill
              className="object-cover p-0.5"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xs font-bold text-[#111111]">Web Dev</span>
            <span className="font-mono-meta text-[10px] text-[#707070] font-medium">React / Next.js Apps</span>
          </div>
        </motion.div>

        {/* BOTTOM LEFT BADGE: BRAND STORYTELLING */}
        <motion.div
          style={{
            x: floatX3,
            y: floatY3,
            transform: "translateZ(80px)",
          }}
          animate={{
            y: [-5, 5, -5],
            rotate: [-1, 2, -1],
          }}
          transition={{
            duration: 4.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-4 -left-2 sm:-bottom-7 sm:-left-7 bg-white/95 border border-[#E5E5E0] shadow-2xl rounded-2xl px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-2.5 sm:gap-3 backdrop-blur-xl z-30 pointer-events-none"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#FFB800] to-[#FF8A00] flex items-center justify-center text-[#111111] shadow-md">
            <Sparkle3D className="w-4 h-4 sm:w-5 sm:h-5 text-[#111111]" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-[11px] sm:text-xs font-bold text-[#111111]">Design, Create & Elevate</span>
            <span className="font-mono-meta text-[9px] sm:text-[10px] text-[#707070]">Brand Storytelling</span>
          </div>
        </motion.div>

        {/* EXTRA FLOATING 3D OBJECT: CAMERA 3D BADGE */}
        <motion.div
          style={{
            x: floatX2,
            y: floatY1,
            transform: "translateZ(90px)",
          }}
          animate={{
            y: [-7, 5, -7],
            rotate: [2, -2, 2],
          }}
          transition={{
            duration: 5.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="hidden xl:flex absolute -top-12 left-1/3 -translate-x-1/2 bg-white/95 border border-[#E5E5E0] shadow-2xl rounded-2xl p-2 items-center gap-2.5 backdrop-blur-xl z-30 pointer-events-none"
        >
          <div className="relative w-7 h-7 rounded-xl overflow-hidden shadow-sm border border-white/60 bg-[#111111]">
            <Image
              src="/tools/camera-3d.jpg"
              alt="Camera 3D"
              fill
              className="object-cover"
            />
          </div>
          <span className="font-mono-meta text-[10px] font-bold text-[#111111] uppercase tracking-wider pr-1">
            PHOTOGRAPHY & CAMERA
          </span>
        </motion.div>

        {/* EXTRA FLOATING 3D OBJECT: COLOR PALETTE 3D BADGE */}
        <motion.div
          style={{
            x: floatX1,
            y: floatY3,
            transform: "translateZ(85px)",
          }}
          animate={{
            y: [6, -6, 6],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 4.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="hidden xl:flex absolute -bottom-10 left-1/3 -translate-x-1/2 bg-white/95 border border-[#E5E5E0] shadow-2xl rounded-2xl p-2 items-center gap-2.5 backdrop-blur-xl z-30 pointer-events-none"
        >
          <div className="relative w-7 h-7 rounded-xl overflow-hidden shadow-sm border border-white/60 bg-[#111111]">
            <Image
              src="/tools/palette-3d.jpg"
              alt="Palette 3D"
              fill
              className="object-cover"
            />
          </div>
          <span className="font-mono-meta text-[10px] font-bold text-[#FFB800] uppercase tracking-wider pr-1">
            COLOR SWATCHES & GRIDS
          </span>
        </motion.div>

        {/* BOTTOM RIGHT BADGE: INTERACTIVE STAGE COMPASS */}
        <motion.div
          style={{
            x: floatX1,
            y: floatY2,
            transform: "translateZ(55px)",
          }}
          animate={{
            y: [4, -4, 4],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-[#111111] text-white shadow-2xl rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 flex items-center gap-2 backdrop-blur-xl z-30 pointer-events-none border border-white/10"
        >
          <Compass className="w-3.5 h-3.5 text-[#FFB800] animate-spin-slow" />
          <span className="font-mono-meta text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-white/90">
            {isHovered ? "INTERACTIVE STAGE" : isMobileDevice ? "TILT TO VIEW" : "HOVER TO VIEW 3D"}
          </span>
        </motion.div>

      </motion.div>
    </div>
  );
}

