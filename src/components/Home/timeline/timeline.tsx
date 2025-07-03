"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface LifeStep {
  step: string;      
  title: string;       
  description: string; 
  image: string;      
}

const lifeTimeline: LifeStep[] = [
  {
    step: "2023",
    title: "Vignan's LARA Institute of Technology & Science",
    description: "Graduated with a Bachelor's in Mechanical Engineering.Developed analytical thinking, problem-solving, and system design skills during my Mechanical Engineering studies.",
    image: "/graduaton.png",
  },
{
  step: "2024",
  title: "TechGy Innovations    – The Beginning",
  description:
    "Started my career as a Junior Software Developer at TechGy, where I worked on real-world web applications. I collaborated with cross-functional teams, contributed to frontend and backend features, and learned industry best practices. This role laid the foundation for my growth in full-stack development and deepened my understanding of scalable code architecture, APIs, and clean UI design.",
  image: "/code.jpg",
}

];


const MIN_HEIGHT = 130;
const DESKTOP_MAX_HEIGHT = 400;
const MOBILE_MAX_HEIGHT = 550;

const DesignProcess: React.FC = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [cardHeights, setCardHeights] = useState<number[]>(
    Array(lifeTimeline.length).fill(MIN_HEIGHT)
  );
  const [isMobile, setIsMobile] = useState(false);

  // Animate heading & paragraph
  useEffect(() => {
    const elements = [headingRef.current, paragraphRef.current];
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  // Animate individual cards
  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  // Check for mobile
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Dynamic height animation based on scroll
  useEffect(() => {
    let animationFrameId: number;

    const updateCardHeights = () => {
      const centerY = window.innerHeight / 2;
      const maxHeight = isMobile ? MOBILE_MAX_HEIGHT : DESKTOP_MAX_HEIGHT;

      let closestIndex = -1;
      let closestDistance = Infinity;

      // Find the card closest to center
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(centerY - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      // Update heights — only closest card gets expanded
      const newHeights = cardRefs.current.map((_, index) =>
        index === closestIndex ? maxHeight : MIN_HEIGHT
      );

      setCardHeights(newHeights);
      animationFrameId = requestAnimationFrame(updateCardHeights);
    };

    animationFrameId = requestAnimationFrame(updateCardHeights);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isMobile]);

  return (
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-20 bg-white">
<div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-20">
  <h2
    ref={headingRef}
    className="text-[30px] sm:text-[54px] md:text-[76px] lg:text-[108px] leading-[1.1] tracking-[-1px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FF512F] via-[#DD2476] to-[#FF512F] font-syne max-w-full lg:max-w-[450px]"
  >
    My Journey
  </h2>
</div>



      {lifeTimeline.map((step, index) => {
        const height = cardHeights[index];
        return (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            style={{
              height,
              transition: "height 0.3s ease-out",
              overflow: "hidden",
            }}
            className="border-t border-black mb-6 bg-white px-4 sm:px-6 lg:px-0"
          >
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-10 py-6">
              <div className="w-full lg:max-w-[600px] transition-opacity duration-300 ease-in-out">
                <p className="text-[16px] font-inter text-black mb-2">
                  {step.step}
                </p>
                <h3 className="text-[28px] sm:text-[40px] lg:text-[48px] font-dmSans text-black mb-3">
                  {step.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] font-dmSans text-black">
                  {step.description}
                </p>
              </div>

              {height > MIN_HEIGHT + 30 && (
                <div className="w-full max-w-[282px] h-[282px] mx-auto lg:mx-0 transition-opacity duration-500 ease-in-out opacity-100">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={282}
                    height={282}
                    className="object-contain w-full h-full"
                    unoptimized
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default DesignProcess;
