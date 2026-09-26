import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  variant?: "dark" | "light";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  priority?: boolean;
}

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * Official Athar Logo Component based on Brand Guidelines V1.0
 */
export function BrandLogo({
  variant = "dark",
  size = "md",
  className = "",
  priority = false,
}: BrandLogoProps) {
  const dimensions = {
    xs: { width: 106, height: 51 },
    sm: { width: 130, height: 63 },
    md: { width: 165, height: 80 },
    lg: { width: 220, height: 106 },
    xl: { width: 280, height: 135 },
  }[size];

  const src =
    variant === "dark"
      ? `${BASE_PATH}/brand/logo-dark.png`
      : `${BASE_PATH}/brand/logo-light.png`;

  return (
    <div
      dir="ltr"
      className={`inline-flex items-center select-none ${className}`}
      aria-label="شعار شركة أثر للحلول البرمجية"
    >
      <Image
        src={src}
        alt="شعار شركة أثر للحلول البرمجية والتسويق الرقمي"
        width={dimensions.width}
        height={dimensions.height}
        className="h-auto w-auto object-contain"
        style={{ width: `${dimensions.width}px`, height: `${dimensions.height}px` }}
        priority={priority}
      />
    </div>
  );
}

/**
 * Standalone Icon (الأيقونة المستقلة) from Brand Guidelines Page 3 & 8
 */
export function BrandStandaloneIcon({
  variant = "dark",
  size = 40,
  rounded = false,
  className = "",
}: {
  variant?: "dark" | "light" | "app";
  size?: number;
  rounded?: boolean;
  className?: string;
}) {
  if (variant === "app") {
    return (
      <Image
        src={`${BASE_PATH}/brand/app-icon-512.png`}
        alt="أيقونة شعار شركة أثر"
        width={size}
        height={size}
        className={`object-contain ${rounded ? "rounded-xl shadow-sm" : ""} ${className}`}
        style={{ width: `${size}px`, height: `${size}px` }}
      />
    );
  }

  const src =
    variant === "dark"
      ? `${BASE_PATH}/brand/icon-standalone-dark.png`
      : `${BASE_PATH}/brand/icon-standalone-light.png`;

  return (
    <Image
      src={src}
      alt="أيقونة شعار شركة أثر"
      width={size}
      height={Math.round((size * 408) / 459)}
      className={`object-contain h-auto ${className}`}
      style={{
        width: `${size}px`,
        height: "auto",
      }}
    />
  );
}

/**
 * Three Diamonds Motif (الأثر) used as a refined graphic accent throughout the UI
 */
export function ImpactDiamonds({
  className = "w-4 h-3.5",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 48 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Top Diamond */}
      <polygon points="24,3 32,11 24,19 16,11" fill={color} />
      {/* Left Diamond */}
      <polygon points="13,15 21,23 13,31 5,23" fill={color} />
      {/* Right Diamond */}
      <polygon points="35,15 43,23 35,31 27,23" fill={color} />
    </svg>
  );
}

/**
 * Philosophy Symbol Dissection Component (matching Page 2 & 3 of Guidelines)
 */
export function PhilosophySymbol({
  symbol,
  variant = "dark",
}: {
  symbol: "A" | "curve" | "diamonds" | "ar";
  variant?: "dark" | "light";
}) {
  const fill = variant === "dark" ? "#414833" : "#EBE3D2";

  if (symbol === "A") {
    return (
      <svg viewBox="0 0 100 80" className="w-16 h-14" fill="none" aria-hidden="true">
        <path
          d="M54 10 H43 L18 64 C16 68 13.5 69.5 10 70 V72 H29 V70 C24.5 69.5 23 68 25 63 L31 49 H58 L64.5 63.5 C66 68 65 69.5 60 70 V72 H82 V70 C78 69.5 76 67.5 74 63 L54 10 Z M33 44 L44.5 18 L56 44 H33 Z"
          fill={fill}
        />
      </svg>
    );
  }

  if (symbol === "curve") {
    return (
      <svg viewBox="0 0 140 80" className="w-24 h-14" fill="none" aria-hidden="true">
        <path
          d="M10 46 C46 53 96 58 128 22 C130 20 131.5 21 130 24 C116 58 78 70 20 50 Z"
          fill={fill}
        />
      </svg>
    );
  }

  if (symbol === "diamonds") {
    return (
      <svg viewBox="0 0 100 80" className="w-16 h-14" fill="none" aria-hidden="true">
        <polygon points="50,14 61,25 50,36 39,25" fill={fill} />
        <polygon points="35,30 46,41 35,52 24,41" fill={fill} />
        <polygon points="65,30 76,41 65,52 54,41" fill={fill} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 100 80" className="w-16 h-14" fill="none" aria-hidden="true">
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fill={fill}
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: "64px",
          fontWeight: 400,
          letterSpacing: "-0.03em",
        }}
      >
        ar
      </text>
    </svg>
  );
}
