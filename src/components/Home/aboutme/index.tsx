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
    <section id="about-me" className={`about-me ${poppins.className}`}>
      {/* Right Side - Image */}
      <div ref={imgRef} className="image-container">
        <Image
          src="/paramesh.jpg"
          alt="About Me Image"
          width={520}
          height={450}
        />
      </div>

      {/* Left Side - Text */}
      <div ref={textRef} className="text-container">
        <h2 className={`${rye.className} text-xl font-bold mb-6`}>About Me</h2>
        <p>
          I&apos;m a Full-Stack Developer with expertise in building scalable,
          high-performance web applications. With hands-on experience in both
          frontend and backend development, I specialize in crafting intuitive
          user interfaces and robust server-side solutions.
          <br />
          <br />
          My journey began with a passion for problem-solving, evolving into a
          career where I design and develop seamless digital experiences. From
          e-commerce platforms and social media dashboards to real-time data
          visualization and admin systems, I bring ideas to life through clean,
          efficient, and maintainable code.
          <br />
          <br />
          Proficient in Next.js, React.js, Node.js, Django, and MySQL, I thrive
          on challenges that push technological boundaries. Whether it's
          optimizing database queries, integrating APIs, or enhancing UI/UX, I
          am committed to delivering innovative solutions that drive business
          success.
        </p>

        {/* Resume Download Button */}
        <div className="download-btn">
          <a href="/Paramesh Resume.pdf" download>
            Download CV
          </a>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .about-me {
          display: flex;
          flex-direction: row-reverse; /* Image on right, text on left */
          align-items: center;
          justify-content: space-between;
          padding: 5%;
          background-color: #ffffff;
          gap: 50px;
        }

        .text-container {
          flex: 1;
          text-align: left;
        }

        .text-container h2 {
          font-size: 40px;
          font-weight: bold;
          color: #333;
          margin-bottom: 20px;
        }

        .text-container p {
          font-size: 23px;
          color: #555;
          line-height: 1.6;
        }

        .download-btn {
          margin-top: 20px;
        }

        .download-btn a {
          background-color: #d95d39;
          color: white;
          padding: 12px 24px;
          font-size: 18px;
          font-weight: 600;
          border-radius: 30px;
          text-decoration: none;
          display: inline-block;
          transition: 0.3s;
        }

        .download-btn a:hover {
          transform: scale(1.05);
        }

        .image-container {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .image-container img {
          border-radius: 10px;
          object-fit: cover;
          max-width: 100%;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .about-me {
            flex-direction: column; /* Stack vertically on small screens */
            text-align: center;
          }

          .image-container {
            order: -1; /* Moves image to the top */
            margin-bottom: 20px;
          }

          .text-container {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutMe;
