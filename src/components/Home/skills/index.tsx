"use client"; // Ensuring it's a client component

import { motion } from "framer-motion";
import { Nosifer, Roboto } from "next/font/google";
import { useEffect, useState } from "react";
import Image from "next/image";

// Load Google Fonts
const nosifer = Nosifer({ weight: ["400"], subsets: ["latin"] }); // For heading "Skills"
const roboto = Roboto({ weight: ["700"], subsets: ["latin"] }); // For skill names and percentages

const skills = [
  { name: "HTML", value: 80 },
  { name: "CSS", value: 70 },
  { name: "JavaScript", value: 75 },
  { name: "Python", value: 80 },
  { name: "Node.js", value: 90 },
  { name: "AWS", value: 65 },
];

const Skills = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration issues

  return (
    <div
      className="py-16 min-h-[50vh] flex flex-wrap md:flex-nowrap items-center justify-between px-6 md:px-12 bg-[#FCF2D8]"
    >
      {/* Left Section: Image (40% of screen width) */}
      <div className="w-full md:w-[30%] flex justify-start md:justify-center mb-6 md:mb-0">
        <Image
          src="/skills-image.png" // Replace with your actual image path
          alt="Skills Illustration"
          width={300}
          height={350}
          className="object-contain w-auto h-auto max-w-[600px] sm:max-w-[400px]"
        />
      </div>

      {/* Right Section: Skills Bars (70% of screen width) */}
      <div className="w-full md:w-[65%] text-left flex flex-col items-start justify-center">
        <h2 className={`${nosifer.className} text-4xl md:text-5xl font-bold mb-4 text-gray-800`}>
          Skills
        </h2>
        <h3 className="text-lg md:text-xl font-medium mb-6 text-gray-800">
          These skills reflect my expertise in web development, backend engineering, and cloud computing.
        </h3>

        <div className="w-full">
          {skills.map((skill, index) => (
            <div key={index} className="mb-5">
              <div className="flex justify-between mb-2">
                <span className={`${roboto.className} font-medium text-base md:text-lg text-gray-700`}>
                  {skill.name}
                </span>
                <span className={`${roboto.className} font-medium text-base md:text-lg text-gray-700`}>
                  {skill.value}%
                </span>
              </div>
              <div className="rounded-full h-4 md:h-5 overflow-hidden bg-gray-300">
                <motion.div
                  className="h-full rounded-full bg-gray-700"
                  initial={{ width: 0, scale: 0.8, opacity: 0 }}
                  animate={{
                    width: `${skill.value}%`,
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 1, ease: "easeOut" },
                  }}
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
