"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxImageProps {
  imageUrl?: string;
  alt: string;
  speed?: number;
  children?: React.ReactNode;
  className?: string;
}

export default function ParallaxImage({
  imageUrl,
  alt,
  speed = 0.5,
  children,
  className = "",
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    if (!container || !image) return;

    gsap.to(image, {
      yPercent: speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        ref={imageRef}
        className="absolute inset-0 scale-125"
        style={{
          willChange: "transform",
        }}
      >
        {/* Placeholder gradient - replace with actual image */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-400 via-purple-400 to-indigo-400" />
        {children}
      </div>
    </div>
  );
}

