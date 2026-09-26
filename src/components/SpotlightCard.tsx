"use client";

import React, { useRef } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  tiltScale?: number;
}

/**
 * High-Performance Interactive Lighting Card (Zero React Re-Renders on Mouse Move!)
 * Reveals the Athar geometric diamond pattern under the mouse spotlight inside the card.
 */
export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(164, 172, 134, 0.18)",
  tiltScale = 1,
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);
  const sheenRef = useRef<HTMLDivElement>(null);
  const patternRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const applySpotlightAt = (clientX: number, clientY: number) => {
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const nx = x / (rect.width || 1) - 0.5;
      const ny = y / (rect.height || 1) - 0.5;
      const degFactor = 5.5 * tiltScale;
      const moveFactor = 4 * tiltScale;
      const rotX = (-ny * degFactor).toFixed(2);
      const rotY = (nx * degFactor).toFixed(2);
      const moveX = (nx * moveFactor).toFixed(1);
      const moveY = (ny * moveFactor - moveFactor).toFixed(1);

      card.style.transform = `perspective(1000px) translate3d(${moveX}px, ${moveY}px, 0) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.008, 1.008, 1.008)`;
      card.style.borderColor = "rgba(115, 122, 93, 0.85)";
      card.style.boxShadow =
        "0 18px 40px rgba(65, 72, 51, 0.11), 0 0 22px rgba(164, 172, 134, 0.16)";

      if (beamRef.current) {
        beamRef.current.style.opacity = "1";
        beamRef.current.style.background = `radial-gradient(340px circle at ${x}px ${y}px, ${spotlightColor} 0%, rgba(203, 191, 163, 0.10) 45%, transparent 78%)`;
      }
      if (sheenRef.current) {
        sheenRef.current.style.opacity = "1";
        sheenRef.current.style.background = `radial-gradient(190px circle at ${x}px ${y}px, rgba(255, 254, 250, 0.45) 0%, transparent 72%)`;
      }
      if (patternRef.current) {
        patternRef.current.style.opacity = "1";
        const mask = `radial-gradient(240px circle at ${x}px ${y}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 45%, transparent 76%)`;
        patternRef.current.style.setProperty("-webkit-mask-image", mask);
        patternRef.current.style.setProperty("mask-image", mask);
      }
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    applySpotlightAt(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    if (touch) {
      applySpotlightAt(touch.clientX, touch.clientY);
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform =
        "perspective(1000px) translate3d(0px, 0px, 0) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      card.style.borderColor = "";
      card.style.boxShadow = "";
    }
    if (beamRef.current) beamRef.current.style.opacity = "0";
    if (sheenRef.current) sheenRef.current.style.opacity = "0";
    if (patternRef.current) patternRef.current.style.opacity = "0";
  };

  return (
    <div
      ref={cardRef}
      data-spotlight-card="true"
      data-tilt-scale={tiltScale}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchMove}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseLeave}
      onTouchCancel={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transition:
          "transform 190ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 280ms ease, border-color 280ms ease",
      }}
      className={`relative overflow-hidden rounded-3xl border border-[#CBBFA3]/75 bg-[#FDFCF9] shadow-[0_8px_30px_rgba(65,72,51,0.04)] will-change-transform ${className}`}
    >
      {/* Layer 1: Soft Warm Flashlight Spotlight Beam */}
      <div
        ref={beamRef}
        data-spotlight-beam="true"
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-3xl z-[1] opacity-0"
      />
      {/* Layer 2: Subtle Core Flashlight Glint */}
      <div
        ref={sheenRef}
        data-spotlight-sheen="true"
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-3xl z-[1] opacity-0"
      />
      {/* Layer 3: Ultra-Light, Simple Geometric Engraving Revealed Under Cursor (Preserves 100% Text Readability) */}
      <div
        ref={patternRef}
        data-spotlight-pattern="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23737A5D' stroke-width='0.75' stroke-opacity='0.20'%3E%3Cpath d='M24 2 L46 24 L24 46 L2 24 Z'/%3E%3Ccircle cx='24' cy='24' r='1.6' fill='%23A4AC86' fill-opacity='0.26' stroke='none'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "48px 48px",
        }}
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-3xl z-[1] opacity-0"
      />
      {children}
    </div>
  );
}
