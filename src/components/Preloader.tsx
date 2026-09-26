"use client";

import React, { useEffect, useState } from "react";
import { BrandLogo, BrandStandaloneIcon } from "./BrandLogo";
import { DiamondLatticePattern, CardOrganicCorner } from "./BrandPatterns";

interface PreloaderProps {
  durationMs?: number;
}

/**
 * Brand-Aligned Responsive Splash Preloader (~1.75 seconds)
 * - Pure flat Ebony (#414833) backdrop with official DiamondLatticePattern.
 * - Instant SSR visibility + triple safeguard (CSS animation, React state, and inline DOM timer) so it never blocks clicks.
 */
export function Preloader({ durationMs = 1750 }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, durationMs);

    return () => clearTimeout(timer);
  }, [durationMs]);

  if (!isLoading) return null;

  return (
    <div
      id="athar-preloader"
      onClick={() => setIsLoading(false)}
      className="preloader-overlay-anim fixed inset-0 z-[100] flex flex-col items-center justify-center px-4 bg-[#414833] text-[#EBE3D2] overflow-hidden select-none"
      aria-live="polite"
      aria-busy={isLoading}
    >
      {/* 1. Official Diamond Lattice Pattern Backdrop */}
      <DiamondLatticePattern variant="dark" />

      {/* 2. Top-Left Sweeping Curve — Strictly Flush with Top & Left Viewport Edges */}
      <svg
        className="absolute top-0 left-0 w-[240px] sm:w-[360px] md:w-[440px] h-[170px] sm:h-[240px] md:h-[290px] opacity-40 pointer-events-none"
        viewBox="0 0 380 260"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M -10 220 C 110 180 240 80 350 -10"
          stroke="#EBE3D2"
          strokeWidth="1.6"
          pathLength={100}
          className="svg-line-flow-1"
        />
        <path
          d="M -10 250 C 140 200 260 110 380 -5"
          stroke="#A4AC86"
          strokeWidth="1.1"
          pathLength={100}
          className="svg-line-flow-2"
        />
      </svg>

      {/* 3. Bottom-Right Organic Corner — Strictly Flush with Bottom-Right Viewport Edge on All Screens */}
      <CardOrganicCorner
        variant="dark"
        align="right"
        className="w-[240px] h-[135px] sm:w-[360px] sm:h-[195px] md:w-[460px] md:h-[240px] opacity-95"
      />

      {/* 4. Center Responsive Animated Icon & Logo Stage */}
      <div className="preloader-content-anim relative z-10 flex flex-col items-center text-center max-w-full">
        {/* Standalone Icon Badge with Animated SVG Ring */}
        <div className="relative flex items-center justify-center mb-5 sm:mb-6">
          <svg
            className="w-20 h-20 sm:w-24 sm:h-24 -rotate-90"
            viewBox="0 0 100 100"
            fill="none"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#737A5D"
              strokeWidth="1.5"
              strokeOpacity="0.35"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#EBE3D2"
              strokeWidth="2"
              strokeLinecap="round"
              className="preloader-ring-anim"
            />
          </svg>

          <div className="absolute flex items-center justify-center">
            <BrandStandaloneIcon
              size={48}
              variant="app"
              rounded
              className="shadow-xl sm:scale-110"
            />
          </div>
        </div>

        {/* Official Light Logo Reveal */}
        <div className="scale-90 sm:scale-100">
          <BrandLogo variant="light" size="md" priority />
        </div>

        {/* Three Animated Diamonds + Responsive Tagline */}
        <div className="mt-4 sm:mt-5 flex flex-col items-center gap-2.5 sm:gap-3 px-2">
          <div className="flex items-center gap-2.5">
            <span className="preloader-diamond-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#A4AC86] inline-block" />
            <span className="preloader-diamond-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#A4AC86] inline-block" />
            <span className="preloader-diamond-3 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#A4AC86] inline-block" />
          </div>

          <span className="text-[10px] sm:text-xs font-medium tracking-[0.12em] sm:tracking-[0.22em] text-[#EBE3D2]/85 uppercase leading-relaxed">
            من الفكرة إلى الأثر • FROM IDEA TO IMPACT
          </span>
        </div>

        {/* Sleek Progress Line */}
        <div className="mt-5 sm:mt-6 w-36 sm:w-44 h-[2px] bg-[#737A5D]/40 rounded-full overflow-hidden">
          <div className="preloader-progress-anim w-full h-full bg-gradient-to-r from-[#A4AC86] via-[#EBE3D2] to-[#A4AC86]" />
        </div>
      </div>
    </div>
  );
}
