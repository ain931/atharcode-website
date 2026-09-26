"use client";

import React, { useEffect, useId, useRef } from "react";

/**
 * 1. Diamond Lattice Pattern (أنماط الخلفيات - النقش الماسي الهندسي)
 * Each instance generates a unique, sanitized ASCII `<pattern id>` so unmounting the Preloader
 * never invalidates SVG `url(#...)` references in other sections.
 */
export function DiamondLatticePattern({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "dark" | "dun" | "flashlight";
  className?: string;
}) {
  const rawId = useId();
  const cleanId = rawId.replace(/[^a-zA-Z0-9_-]/g, "");
  const patternId = `athar-diamond-${variant}-${cleanId}`;

  const isDark = variant === "dark";
  const isFlashlight = variant === "flashlight";

  const strokeColor = isDark ? "#A4AC86" : "#737A5D";
  const fillColor = isDark ? "#A4AC86" : "#414833";
  const opacity = isDark
    ? "opacity-[0.08]"
    : isFlashlight
    ? "opacity-[0.42]"
    : "opacity-[0.035]";

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden select-none ${opacity} ${className}`}
      aria-hidden="true"
    >
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={patternId}
            width="88"
            height="88"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 44 0 L 88 44 L 44 88 L 0 44 Z"
              fill="none"
              stroke={strokeColor}
              strokeWidth={isFlashlight ? "1.35" : "0.75"}
            />
            <path
              d="M 44 7 L 81 44 L 44 81 L 7 44 Z"
              fill="none"
              stroke={strokeColor}
              strokeWidth={isFlashlight ? "0.85" : "0.35"}
              strokeOpacity={isFlashlight ? "0.9" : "0.55"}
            />
            <polygon points="44,29 49,34 44,39 39,34" fill={fillColor} />
            <polygon points="37,37 42,42 37,47 32,42" fill={fillColor} />
            <polygon points="51,37 56,42 51,47 46,42" fill={fillColor} />
            <polygon
              points="44,45 48,49 44,53 40,49"
              fill={fillColor}
              fillOpacity={isFlashlight ? "0.72" : "0.4"}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}

/**
 * 2. Unified Continuous Page Canvas (خلفية موحدة متصلة للموقع بالكامل بدون أي فواصل)
 * Combines:
 * - Viewport-locked (`fixed inset-0`) base diamond pattern + Mouse Lantern / Flashlight layer
 *   (avoids the 4096px GPU mask texture limit on tall pages and works at exact clientX/clientY coordinates)
 * - Continuous non-stop animated SVG curves (`.svg-line-flow-1`, `.svg-line-flow-2`)
 * - Smooth Mouse Parallax interaction on the background waves
 */
export function UnifiedPageCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lanternPatternRef = useRef<HTMLDivElement>(null);
  const lanternGlowRef = useRef<HTMLDivElement>(null);
  const waveParallaxRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let lastClientX = window.innerWidth ? Math.round(window.innerWidth * 0.5) : 600;
    let lastClientY = window.innerHeight ? Math.round(window.innerHeight * 0.38) : 340;
    let rafId: number | null = null;

    const applyLanternUpdate = () => {
      rafId = null;

      if (lanternPatternRef.current) {
        const maskValue = `radial-gradient(330px circle at ${lastClientX}px ${lastClientY}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 45%, rgba(0,0,0,0.22) 75%, transparent 100%)`;
        lanternPatternRef.current.style.setProperty("-webkit-mask-image", maskValue);
        lanternPatternRef.current.style.setProperty("mask-image", maskValue);
      }

      if (lanternGlowRef.current) {
        lanternGlowRef.current.style.background = `radial-gradient(350px circle at ${lastClientX}px ${lastClientY}px, rgba(164, 172, 134, 0.22) 0%, rgba(203, 191, 163, 0.11) 48%, transparent 100%)`;
      }

      if (waveParallaxRef.current) {
        const moveX = (lastClientX / (window.innerWidth || 1440) - 0.5) * -18;
        const moveY = (lastClientY / (window.innerHeight || 900) - 0.5) * -12;
        waveParallaxRef.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      }
    };

    const scheduleUpdate = (clientX: number, clientY: number) => {
      lastClientX = clientX;
      lastClientY = clientY;
      if (rafId === null) {
        rafId = requestAnimationFrame(applyLanternUpdate);
      }
    };

    // Initialize lantern at center-top on mount so it's immediately visible
    applyLanternUpdate();

    const handlePointerMove = (e: PointerEvent) => {
      scheduleUpdate(e.clientX, e.clientY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      scheduleUpdate(e.clientX, e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      scheduleUpdate(e.clientX, e.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0"
      aria-hidden="true"
    >
      {/* 1. Continuous Full-Height SVG Art & Non-Stop Animated Lines + Mouse Parallax */}
      <svg
        id="athar-wave-parallax"
        ref={waveParallaxRef}
        className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out will-change-transform"
        viewBox="0 0 1440 4200"
        fill="none"
        preserveAspectRatio="none"
      >
        {/* Top Organic Shape (Hero Zone) */}
        <path
          d="M -120 0 L 520 0 C 380 280 180 480 -120 560 Z"
          fill="#A4AC86"
          fillOpacity="0.11"
        />
        <path
          d="M 1560 120 C 1180 240 960 520 1560 880 Z"
          fill="#CBBFA3"
          fillOpacity="0.16"
        />

        {/* Top Sweeping Curves — Continuously Drawing Non-Stop */}
        <path
          d="M -100 520 C 340 380 760 80 1540 260"
          stroke="#737A5D"
          strokeWidth="1"
          strokeOpacity="0.14"
        />
        <path
          d="M -100 520 C 340 380 760 80 1540 260"
          stroke="#737A5D"
          strokeWidth="2.4"
          strokeLinecap="round"
          pathLength={100}
          className="svg-line-flow-1"
        />
        <path
          d="M -80 590 C 420 420 840 140 1540 330"
          stroke="#A4AC86"
          strokeWidth="1.8"
          strokeLinecap="round"
          pathLength={100}
          className="svg-line-flow-2"
        />

        {/* Mid-Page Continuous Flowing Ribbon (Services -> Portfolio) */}
        <path
          d="M -140 1150 C 420 980 1020 1380 1580 1120 L 1580 1650 C 1040 1850 460 1480 -140 1680 Z"
          fill="#EBE3D2"
          fillOpacity="0.45"
        />
        <path
          d="M -120 1160 C 420 990 1020 1390 1560 1130"
          stroke="#737A5D"
          strokeWidth="1"
          strokeOpacity="0.14"
        />
        <path
          d="M -120 1160 C 420 990 1020 1390 1560 1130"
          stroke="#737A5D"
          strokeWidth="2.5"
          strokeLinecap="round"
          pathLength={100}
          className="svg-line-flow-1"
        />
        <path
          d="M 1560 1640 C 1040 1840 460 1470 -120 1670"
          stroke="#414833"
          strokeWidth="1"
          strokeOpacity="0.1"
        />
        <path
          d="M 1560 1640 C 1040 1840 460 1470 -120 1670"
          stroke="#414833"
          strokeWidth="2"
          strokeLinecap="round"
          pathLength={100}
          className="svg-line-flow-2"
        />

        {/* Lower-Mid Continuous Flowing Ribbon (Portfolio -> Philosophy -> Contact) */}
        <path
          d="M -140 2650 C 380 2420 980 2840 1580 2560 L 1580 3180 C 1020 3380 440 2980 -140 3220 Z"
          fill="#EBE3D2"
          fillOpacity="0.42"
        />
        <path
          d="M -120 2660 C 380 2430 980 2850 1560 2570"
          stroke="#737A5D"
          strokeWidth="1"
          strokeOpacity="0.14"
        />
        <path
          d="M -120 2660 C 380 2430 980 2850 1560 2570"
          stroke="#737A5D"
          strokeWidth="2.5"
          strokeLinecap="round"
          pathLength={100}
          className="svg-line-flow-1"
        />
        <path
          d="M 1560 3170 C 1020 3370 440 2970 -120 3210"
          stroke="#A4AC86"
          strokeWidth="2"
          strokeLinecap="round"
          pathLength={100}
          className="svg-line-flow-2"
        />

        {/* Bottom Organic Hills Approaching Footer */}
        <path
          d="M 520 4200 C 780 3920 1140 3820 1520 3880 L 1520 4200 Z"
          fill="#CBBFA3"
          fillOpacity="0.22"
        />
        <path
          d="M 500 4200 C 760 3900 1120 3800 1520 3860"
          stroke="#737A5D"
          strokeWidth="2.4"
          strokeLinecap="round"
          pathLength={100}
          className="svg-line-flow-1"
        />
      </svg>

      {/* 2A. Base Faint Continuous Pattern (Viewport Fixed so it aligns 1:1 with the Lantern layer) */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <DiamondLatticePattern variant="light" />
      </div>

      {/* 2B. Soft Lantern Light Halo following the mouse */}
      <div
        id="athar-lantern-glow"
        ref={lanternGlowRef}
        className="pointer-events-none fixed inset-0 z-0"
      />

      {/* 2C. Mouse Lantern / Flashlight Layer — Fixed Viewport Size (100vw x 100vh) so GPU Mask Always Renders */}
      <div
        id="athar-lantern-pattern"
        ref={lanternPatternRef}
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          maskImage:
            "radial-gradient(330px circle at 50% 38%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 45%, rgba(0,0,0,0.22) 75%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(330px circle at 50% 38%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 45%, rgba(0,0,0,0.22) 75%, transparent 100%)",
        }}
      >
        <DiamondLatticePattern variant="flashlight" />
      </div>
    </div>
  );
}

/**
 * 3. Card Edge Organic Corner with Continuous Non-Stop Line Drawing Animation
 * Pinned strictly to `bottom-0` and `left-0` (or `right-0`) of the outer card border (0px gap).
 * Uses hardware-accelerated CSS keyframes (`.svg-line-flow-1`, `.svg-line-flow-2`) for 0 JS overhead!
 */
export function CardOrganicCorner({
  variant = "dark",
  align = "left",
  className = "",
}: {
  variant?: "dark" | "light";
  align?: "left" | "right";
  className?: string;
}) {
  const isDark = variant === "dark";
  const edgeClasses =
    align === "left" ? "left-0 -scale-x-100" : "right-0";

  return (
    <svg
      className={`pointer-events-none select-none absolute bottom-0 z-0 ${edgeClasses} ${className}`}
      viewBox="0 0 320 180"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Back Organic Hill flush with the bottom & side border of the card */}
      <path
        d="M 40 184 C 125 88 220 32 324 38 L 324 184 Z"
        fill={isDark ? "#737A5D" : "#EBE3D2"}
        fillOpacity={isDark ? "0.28" : "0.72"}
      />
      {/* Overlapping Inner Hill flush with the bottom & side border */}
      <path
        d="M 130 184 C 195 110 260 80 324 90 L 324 184 Z"
        fill={isDark ? "#A4AC86" : "#CBBFA3"}
        fillOpacity={isDark ? "0.22" : "0.42"}
      />
      {/* Subtle Base Guide Tracks */}
      <path
        d="M 32 184 C 120 80 215 24 324 30"
        stroke={isDark ? "#EBE3D2" : "#737A5D"}
        strokeWidth="1"
        strokeOpacity={isDark ? "0.18" : "0.15"}
      />
      <path
        d="M 122 184 C 190 102 255 72 324 82"
        stroke={isDark ? "#A4AC86" : "#A4AC86"}
        strokeWidth="0.8"
        strokeOpacity={isDark ? "0.15" : "0.15"}
      />
      {/* Continuously Animated Ridge Line 1 (CSS Keyframes — Zero JS Overhead!) */}
      <path
        d="M 32 184 C 120 80 215 24 324 30"
        stroke={isDark ? "#EBE3D2" : "#737A5D"}
        strokeWidth="2"
        strokeLinecap="round"
        pathLength={100}
        className="svg-line-flow-1"
      />
      {/* Continuously Animated Ridge Line 2 (CSS Keyframes — Zero JS Overhead!) */}
      <path
        d="M 122 184 C 190 102 255 72 324 82"
        stroke={isDark ? "#A4AC86" : "#414833"}
        strokeWidth="1.5"
        strokeLinecap="round"
        pathLength={100}
        className="svg-line-flow-2"
      />
    </svg>
  );
}
