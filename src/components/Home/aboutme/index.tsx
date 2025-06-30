"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Poppins, Rubik_Vinyl } from "next/font/google";
import { motion } from "framer-motion";

// Load Google Fonts
const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });
const rubikVinyl = Rubik_Vinyl({ weight: ["400"], subsets: ["latin"] });

const AboutMe: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.from(textRef.current, {
        x: -50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    }

    if (imgRef.current) {
      gsap.from(imgRef.current, {
        x: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <section id="about-me" className={`about-me-section ${poppins.className}`}>
      <motion.div
        ref={imgRef}
        className="image-container"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div
          className="fancy-border"
          whileHover={{
            boxShadow: "0 0 25px rgba(217, 93, 57, 0.6)",
          }}
        >
          <Image
            src="/paramesh.jpg"
            alt="About Me Image"
            width={340}
            height={340}
            className="profile-image"
          />
        </motion.div>
      </motion.div>

      <div ref={textRef} className="text-container">
        <motion.h2
          className={`${rubikVinyl.className} about-heading`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p>
            I&apos;m a <span className="highlight">Full-Stack Developer</span>{" "}
            with expertise in building scalable, high-performance web applications.
            With hands-on experience in both frontend and backend development, I
            specialize in crafting <span className="highlight">intuitive user interfaces</span> and
            <span className="highlight"> robust server-side solutions</span>.
          </p>
          <p>
            My journey began with a passion for problem-solving, evolving into a
            career where I design and develop <span className="highlight">seamless digital experiences</span>.
            From e-commerce platforms and social media dashboards to real-time data
            visualization and admin systems, I bring ideas to life through
            <span className="highlight"> clean, efficient, and maintainable code</span>.
          </p>
          <p>
            Proficient in{" "}
            <span className="highlight">Next.js, React.js, Node.js, Django</span>, and{" "}
            <span className="highlight">MySQL</span>, I thrive on challenges that push
            technological boundaries. Whether it&apos;s optimizing database queries,
            integrating APIs, or enhancing UI/UX, I am committed to delivering
            <span className="highlight"> innovative solutions that drive business success</span>.
          </p>

          <div className="download-btn">
            <a href="/Paramesh Resume.pdf" download>
              Download CV
            </a>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .about-me-section {
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          justify-content: space-between;
          padding: 6% 5%;
          background-color: rgb(56, 60, 68);
          gap: 50px;
        }

        .text-container {
          flex: 1;
          color: white;
        }

        .about-heading {
          font-size: 54px;
          font-weight: bold;
          margin-bottom: 30px;
          color: #ffffff;
        }

        .text-container p {
          font-size: 22px;
          margin-bottom: 20px;
          line-height: 1.8;
          color: #e0e0e0;
        }

        .highlight {
          color: #d95d39;
          font-weight: 600;
        }

        .download-btn {
          margin-top: 30px;
        }

        .download-btn a {
          background-color: #d95d39;
          color: white;
          padding: 14px 30px;
          font-size: 20px;
          font-weight: 600;
          border-radius: 30px;
          text-decoration: none;
          transition: transform 0.3s ease;
        }

        .download-btn a:hover {
          transform: scale(1.07);
        }

        .image-container {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .fancy-border {
          padding: 8px;
          border: 6px double #fff;
          border-radius: 50%;
          background: linear-gradient(45deg, #d95d39, #6a0572);
        }

        .profile-image {
          border-radius: 50%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .about-me-section {
            flex-direction: column;
            text-align: center;
            padding: 10% 5%;
          }

          .about-heading {
            font-size: 40px;
          }

          .text-container p {
            font-size: 20px;
          }

          .image-container {
            order: -1;
            margin-bottom: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutMe;
