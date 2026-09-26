"use client";

import React, { useEffect, useRef } from "react";

/**
 * Custom AtharCode Brand Cursor — "النقاط الثلاث في أثر" (The Three Impact Diamonds)
 * - Pure DOM Ref + Global Inline Script Architecture: works immediately on HTML parse and after React hydration.
 * - Uses fixed viewport coordinates (clientX, clientY) with dir="ltr" so RTL layout never flips X coordinates.
 */
export function BrandCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const scaleWrapperRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const topDiamondRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let isVisible = false;
    let isHovered = false;
    let isPressed = false;
    let isOverDark = false;

    const checkDarkAndInteractive = (startEl: Element | null) => {
      let dark = false;
      let interactive = false;
      let cur: Element | null = startEl;
      while (cur && cur !== document.body && cur !== document.documentElement) {
        const tag = cur.tagName;
        if (
          tag === "A" ||
          tag === "BUTTON" ||
          tag === "INPUT" ||
          tag === "TEXTAREA" ||
          tag === "SELECT" ||
          tag === "LABEL"
        ) {
          interactive = true;
        }
        const role = cur.getAttribute("role");
        if (role === "button" || role === "tab") {
          interactive = true;
        }
        if (
          tag === "FOOTER" ||
          cur.getAttribute("data-dark-zone") === "true" ||
          cur.getAttribute("data-active") === "true"
        ) {
          dark = true;
        }
        const cls = typeof cur.className === "string" ? cur.className : "";
        if (
          cls.indexOf("bg-[#414833]") !== -1 ||
          cls.indexOf("bg-[#23271c]") !== -1 ||
          cls.indexOf("bg-[#2e3324]") !== -1 ||
          cls.indexOf("from-[#414833]") !== -1 ||
          cls.indexOf("from-[#23271c]") !== -1
        ) {
          dark = true;
        }
        cur = cur.parentElement;
      }
      return { dark, interactive };
    };

    const applyVisualState = () => {
      const wrapper = scaleWrapperRef.current;
      const ring = ringRef.current;
      const topDiamond = topDiamondRef.current;
      if (!wrapper || !ring || !topDiamond) return;

      const scale = isPressed ? 0.85 : isHovered ? 1.18 : 1;
      wrapper.style.transform = `translate(-50%, -50%) scale(${scale})`;

      if (isOverDark) {
        ring.style.width = isHovered ? "42px" : "38px";
        ring.style.height = isHovered ? "42px" : "38px";
        ring.style.borderColor = "rgba(235, 227, 210, 0.9)";
        ring.style.backgroundColor = "rgba(235, 227, 210, 0.18)";
        ring.style.boxShadow =
          "0 4px 16px rgba(0, 0, 0, 0.28), 0 0 12px rgba(235, 227, 210, 0.22)";
        topDiamond.setAttribute("fill", "#EBE3D2");
      } else {
        ring.style.width = "36px";
        ring.style.height = "36px";
        ring.style.borderColor = "transparent";
        ring.style.backgroundColor = "transparent";
        ring.style.boxShadow = "none";
        topDiamond.setAttribute("fill", isHovered ? "#737A5D" : "#414833");
      }
    };

    const updatePosition = (clientX: number, clientY: number, targetEl?: EventTarget | null) => {
      const el = cursorRef.current;
      if (!el) return;

      el.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;

      if (!isVisible) {
        isVisible = true;
        el.style.opacity = "1";
      }
      document.documentElement.classList.add("custom-cursor-active");

      const hit =
        (targetEl instanceof Element ? targetEl : null) ||
        document.elementFromPoint(clientX, clientY);
      if (hit) {
        const { dark, interactive } = checkDarkAndInteractive(hit);
        if (dark !== isOverDark || interactive !== isHovered) {
          isOverDark = dark;
          isHovered = interactive;
          applyVisualState();
        }
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      updatePosition(e.clientX, e.clientY, e.target);
    };

    const handleMouseMove = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY, e.target);
    };

    const handleMouseOver = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY, e.target);
    };

    const handleMouseDown = () => {
      isPressed = true;
      applyVisualState();
    };

    const handleMouseUp = () => {
      isPressed = false;
      applyVisualState();
    };

    const handleMouseLeave = () => {
      isVisible = false;
      if (cursorRef.current) {
        cursorRef.current.style.opacity = "0";
      }
      document.documentElement.classList.remove("custom-cursor-active");
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <div
      id="athar-brand-cursor"
      ref={cursorRef}
      dir="ltr"
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "36px",
        height: "36px",
        opacity: 0,
        zIndex: 2147483647,
        pointerEvents: "none",
      }}
      className="transition-opacity duration-150 will-change-transform"
    >
      <div
        id="athar-cursor-scale"
        ref={scaleWrapperRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%) scale(1)",
        }}
        className="flex items-center justify-center transition-transform duration-150 ease-out"
      >
        {/* Integrated Frame / Ring — ONLY visible when cursor is over dark areas */}
        <div
          id="athar-cursor-ring"
          ref={ringRef}
          style={{
            width: "36px",
            height: "36px",
            borderColor: "transparent",
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
          className="rounded-full border flex items-center justify-center transition-all duration-150"
        >
          {/* The Three Diamonds of Athar (النقاط الثلاث في أثر) */}
          <svg
            width="22"
            height="19"
            viewBox="0 0 28 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Top Diamond (النقطة العليا) */}
            <path
              id="athar-cursor-top-diamond"
              ref={topDiamondRef}
              d="M14 1.5 L19.2 6.7 L14 11.9 L8.8 6.7 Z"
              fill="#414833"
              stroke="#FDFCF9"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Bottom-Left Diamond (النقطة اليسرى) */}
            <path
              d="M7.8 9.5 L13 14.7 L7.8 19.9 L2.6 14.7 Z"
              fill="#414833"
              stroke="#FDFCF9"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            {/* Bottom-Right Diamond (النقطة اليمنى) */}
            <path
              d="M20.2 9.5 L25.4 14.7 L20.2 19.9 L15 14.7 Z"
              fill="#414833"
              stroke="#FDFCF9"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
