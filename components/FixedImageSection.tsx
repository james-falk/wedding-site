"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface FixedImageSectionProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  description: string;
  darkOverlay?: boolean;
}

export default function FixedImageSection({
  imageUrl,
  imageAlt,
  title,
  subtitle,
  description,
  darkOverlay = true,
}: FixedImageSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;

    if (!section || !image || !content) return;

    // Pin the image while content scrolls
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: image,
        pinSpacing: false,
      },
    });

    // Fade in content as it enters
    gsap.fromTo(
      content,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: content,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );

    // Scale image slightly on scroll
    tl.to(image, {
      scale: 1.1,
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[200vh]">
      {/* Fixed Background Image */}
      <div
        ref={imageRef}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        <div className="absolute inset-0">
          {/* Replace with actual image */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-slate-900 via-rose-900 to-purple-900`}
          />
          {darkOverlay && (
            <div className="absolute inset-0 bg-black/40 z-10" />
          )}
        </div>
      </div>

      {/* Scrolling Content */}
      <div ref={contentRef} className="absolute top-1/2 left-0 right-0 z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            {subtitle && (
              <p className="text-sm md:text-base uppercase tracking-widest mb-4 text-rose-200">
                {subtitle}
              </p>
            )}
            <h2 className="font-script text-5xl md:text-7xl lg:text-8xl mb-6">
              {title}
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-200">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

