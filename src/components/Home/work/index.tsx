"use client";

import { Roboto, Poppins, Nosifer } from "next/font/google";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Load Google Fonts
const roboto = Roboto({ weight: ["700"], subsets: ["latin"] }); // For project names
const poppins = Poppins({ weight: ["400"], subsets: ["latin"] }); // For details
const nosifer = Nosifer({ weight: ["400"], subsets: ["latin"] }); // For heading "Work & Projects"

// Sample Projects Data
const projects = [
  {
    name: "Table Ordering System",
    uses: "Allows restaurant customers to place orders from their tables.",
    technologies: ["Django", "SQLite", "WebSockets", "Bootstrap"],
  },
  {
    name: "E-commerce Platform",
    uses: "A full-fledged online shopping platform with user authentication and payment processing.",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "MySQL", "Tailwind CSS", "AWS"],
  },
  {
    name: "Selling & Buying Farmland Management",
    uses: "A platform for managing farmland transactions and ownership.",
    technologies: ["Next.js", "MySQL", "React.js", "Tailwind CSS", "Node.js", "AWS"],
  },
  {
    name: "Social Media App",
    uses: "A social media platform for connecting users and sharing content.",
    technologies: ["Next.js", "MySQL", "React.js", "Tailwind CSS", "Node.js", "AWS", "GoDaddy"],
  },
  {
    name: "Dashboard",
    uses: "A dashboard for managing and visualizing data.",
    technologies: ["Next.js", "MySQL", "React.js", "Node.js", "AWS", "Vercel"],
  },
  {
    name: "Website for a Real Estate Company",
    uses: "A website for a real estate company to showcase properties and services.",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "Vercel"],
  },
];

// Motion Variants for Animation
const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Work = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Track scroll position to trigger animation
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("work-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="work-section" className="py-15 bg-gray-100">
      {/* Section Heading */}
      <h2
        className={`${nosifer.className} text-4xl font-bold text-center mb-10  pl-4`}
        style={{ color: "rgb(51, 51, 51)" }}
      >
        Work & Projects
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-4 rounded-lg shadow-lg bg-white border-l-4 border-gray-800"
            variants={cardVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {/* Project Name */}
            <h3 className={`${roboto.className} text-xl font-semibold mb-2 text-gray-900`}>
              {project.name}
            </h3>

            {/* Application Uses */}
            <p className={`${poppins.className} text-gray-700 mb-3`}>
              <strong>Use Case:</strong> {project.uses}
            </p>

            {/* Technologies Used */}
            <p className={`${poppins.className} text-gray-700`}>
              <strong>Tech Stack:</strong> {project.technologies.join(", ")}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;
