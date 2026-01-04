"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ImageRevealProps {
  imageUrl?: string;
  alt: string;
  direction?: "left" | "right" | "top" | "bottom";
  children?: React.ReactNode;
}

export default function ImageReveal({
  imageUrl,
  alt,
  direction = "bottom",
  children,
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const overlay = overlayRef.current;

    if (!container || !image || !overlay) return;

    const directionMap = {
      left: { x: "-100%", y: "0%" },
      right: { x: "100%", y: "0%" },
      top: { x: "0%", y: "-100%" },
      bottom: { x: "0%", y: "100%" },
    };

    // Image scale animation
    gsap.fromTo(
      image,
      {
        scale: 1.3,
      },
      {
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      }
    );

    // Overlay slide away animation
    gsap.to(overlay, {
      ...directionMap[direction],
      duration: 1.2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: container,
        start: "top 70%",
        end: "top 30%",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [direction]);

  return (
    <div ref={containerRef} className="relative overflow-hidden rounded-2xl">
      <div
        ref={imageRef}
        className="relative h-[400px] md:h-[600px] overflow-hidden"
      >
        {/* Placeholder gradient - replace with actual image */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-300 via-purple-300 to-blue-300" />
        {children}
      </div>

      {/* Reveal overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-white z-10"
        style={{ transformOrigin: "center" }}
      />
    </div>
  );
}

