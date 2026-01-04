"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Countdown from "../Countdown";
import weddingData from "@/config/wedding-data";

gsap.registerPlugin(ScrollTrigger);

export default function HeroAdvanced() {
  const { couple, weddingDate } = weddingData;
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    if (!hero || !image || !content) return;

    // Parallax effect on hero image
    gsap.to(image, {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // Fade out content as you scroll
    gsap.to(content, {
      opacity: 0,
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-[120%] top-[-10%]"
      >
        {/* Dark gradient background - Replace with actual hero image */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-rose-900 to-purple-900" />
        
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 z-10" />

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-20 text-center px-4">
        <div className="mb-8">
          <p className="text-sm md:text-base text-gray-200 mb-6 font-light tracking-[0.3em] uppercase">
            Together with their families
          </p>

          <h1 className="font-script text-7xl md:text-9xl lg:text-[12rem] text-white mb-8 leading-none">
            {couple.coupleNames}
          </h1>

          <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto max-w-md mb-8" />

          <p className="text-2xl md:text-4xl text-white mb-2 font-light">
            {weddingDate.displayDate}
          </p>

          <p className="text-lg md:text-xl text-gray-300 tracking-wider">
            San Francisco, California
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mt-16">
          <Countdown targetDate={weddingDate.date} />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-white/70">
            <span className="text-xs mb-2 tracking-wider uppercase">Scroll to explore</span>
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

