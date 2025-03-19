"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Poppins, Passions_Conflict, Rye } from "next/font/google";


// Load Google Fonts
const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });
const passionsConflict = Passions_Conflict({ weight: ["400"], subsets: ["latin"] });
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
    <section
      className={`hero ${poppins.className}`}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100vh",
        padding: "0 5%",
        backgroundColor: "#FDF6E3",
      }}
    >
      {/* Left Side - Image */}
      <div ref={imgRef} style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <Image
          src="/cycle.png" // Replace with your actual image path
          alt="Hero Image"
          width={500}
          height={500}
          style={{ borderRadius: "10px", objectFit: "cover" }}
        />
      </div>

      {/* Right Side - Text */}
      <div ref={textRef} style={{ flex: 1, textAlign: "left" }}>
        <span
          style={{
            fontSize: "24px",
            fontWeight: "400",
            color: "#D95D39",
            backgroundColor: "#FEE3C1",
            padding: "8px 15px",
            borderRadius: "25px",
          }}
        >
          I'm Paramesh Magapu.
        </span>
        <h1
          className={rye.className}
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#333",
            marginTop: "20px",
          }}
        >
          Full stack developer <br /> passionate about coding
        </h1>
        <div style={{ marginTop: "20px", display: "flex", gap: "20px" }}>
          <button
            style={{
              backgroundColor: "#D95D39",
              color: "white",
              border: "none",
              padding: "12px 24px",
              fontSize: "18px",
              fontWeight: "600",
              borderRadius: "30px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05 })}
            onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1 })}
          >
            My Portfolio
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              color: "#D95D39",
              border: "2px solid #D95D39",
              padding: "12px 24px",
              fontSize: "18px",
              fontWeight: "600",
              borderRadius: "30px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05 })}
            onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1 })}
          >
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
