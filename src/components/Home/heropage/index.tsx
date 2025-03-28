"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Poppins, Rye } from "next/font/google";

// Load Google Fonts
const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });
const rye = Rye({ weight: ["400"], subsets: ["latin"] });

const HeroSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.from(textRef.current, {
        x: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      });
    }

    if (imgRef.current) {
      gsap.from(imgRef.current, {
        x: -50,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <section id="home" className={`hero ${poppins.className}`}>
      {/* Image Section */}
      <div ref={imgRef} className="image-container">
        <Image
          src="/cycle.png" // Replace with your actual image path
          alt="Hero Image"
          layout="responsive"
          width={500}
          height={500}
        />
      </div>

      {/* Text Section */}
      <div ref={textRef} className="text-container">
        <span className="intro-text">I&apos;m Paramesh Magapu.</span>
        <h1 className={`${rye.className} hero-title`}>
          Full stack developer. <br /> Passionate about coding
        </h1>
        <div className="button-container">
          <button className="portfolio-button">My Portfolio</button>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .hero {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          min-height: calc(100vh - 80px);
          padding: 0 5%;
          background-color: #fdf6e3;
          margin-top: 80px;
          gap: 50px;
        }

        .image-container {
          flex: 1;
          max-width: 500px;
          display: flex;
          justify-content: center;
        }

        .text-container {
          flex: 1;
          max-width: 600px;
          text-align: left;
        }

        .intro-text {
          font-size: clamp(20px, 4vw, 34px);
          font-weight: 400;
          color: #d95d39;
          background-color: #fee3c1;
          padding: 8px 15px;
          border-radius: 25px;
          display: inline-block;
        }

        .hero-title {
          font-size: clamp(32px, 6vw, 48px);
          font-weight: bold;
          color: #333;
          margin-top: 20px;
          line-height: 1.2;
        }

        .button-container {
          margin-top: 20px;
          display: flex;
          justify-content: start;
          gap: 20px;
          flex-wrap: wrap;
        }

        .portfolio-button {
          background-color: #d95d39;
          color: white;
          border: none;
          padding: 12px 24px;
          font-size: clamp(16px, 3vw, 18px);
          font-weight: 600;
          border-radius: 30px;
          cursor: pointer;
          transition: 0.3s;
        }

        .portfolio-button:hover {
          transform: scale(1.05);
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            text-align: center;
          }

          .image-container {
            order: -1;
            max-width: 100%;
          }

          .text-container {
            max-width: 100%;
            text-align: center;
          }

          .button-container {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
