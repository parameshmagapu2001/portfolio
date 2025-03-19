"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Poppins, Nosifer } from "next/font/google";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });
const rye = Nosifer({ weight: ["400"], subsets: ["latin"] });

const AboutMe: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.from(textRef.current, {
        x: -50,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      });
    }

    if (imgRef.current) {
      gsap.from(imgRef.current, {
        x: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <section
      className={`about-me ${poppins.className}`}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "5% 5%",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Left Side - Text */}
      <div ref={textRef} style={{ flex: 1, textAlign: "left" }}>
        <h2 className={`${rye.className} text-xl font-bold mb-6`}
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          About Me
        </h2>
        <p style={{ fontSize: "18px", color: "#555", lineHeight: "1.6" }}>
        I’m a  Full-Stack Developer with expertise in building scalable,<br/> high-performance web applications.
         With hands-on experience in frontend and backend development, 
        I specialize in crafting intuitive user interfaces and robust server-side solutions.
          <br />
          <br />
          My journey began with a passion for problem-solving, evolving into a career where I design and develop seamless digital experiences.
           From e-commerce platforms and social media dashboards to real-time data visualization and admin systems,
           I bring ideas to life through clean, efficient, and maintainable code.
           <br />
          <br />
          Proficient in Next.js, React.js, Node.js, Django, and MySQL, I thrive on challenges that push technological boundaries.
           Whether it's optimizing database queries, integrating APIs, or enhancing UI/UX, 
           I am committed to delivering innovative solutions that drive business success.
        </p>

        {/* Resume Download Button */}
        <div style={{ marginTop: "25px" }}>
          <a
            href="/resume.pdf" // Update with your actual resume file path
            download
            style={{
              backgroundColor: "#D95D39",
              color: "white",
              padding: "12px 24px",
              fontSize: "18px",
              fontWeight: "600",
              borderRadius: "30px",
              textDecoration: "none",
              display: "inline-block",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05 })}
            onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1 })}
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Right Side - Image */}
      <div ref={imgRef} style={{ flex: 1, display: "flex", justifyContent: "right " }}>
        <Image
          src="/paramesh.jpg" // Replace with your actual image path
          alt="About Me Image"
          width={500}
          height={500}
          style={{ borderRadius: "10px", objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default AboutMe;
