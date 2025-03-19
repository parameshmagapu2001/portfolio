"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaArrowLeft, FaArrowRight, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { Nosifer } from "next/font/google";

const nosifer = Nosifer({ weight: ["400"], subsets: ["latin"] });


const resources = [
  { title: "Web Development Basics", file: "/pdfs/web-dev-basics.pdf", image: "/images/web-dev.png" },
  { title: "Advanced JavaScript", file: "/pdfs/advanced-js.pdf", image: "/images/javascript.png" },
  { title: "Django for Beginners", file: "/pdfs/django-basics.pdf", image: "/images/django.png" },
  { title: "React.js Guide", file: "/pdfs/react-guide.pdf", image: "/images/react.png" },
  { title: "Next.js Advanced Concepts", file: "/pdfs/nextjs.pdf", image: "/images/nextjs.png" },
  { title: "CSS Mastery", file: "/pdfs/css-mastery.pdf", image: "/images/css.png" },
];

const Resources = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 10, y: 110 },
      { opacity: 1, y: 0, duration: 5, ease: "power3.out", delay: 0.1 }
    );
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300; // Adjust the scroll distance
      scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div ref={containerRef} className="py-10 px-20 min-h-[70vh] relative bg-[#FDF6E3]">
      <h2 className={`${nosifer.className} text-5xl font-bold text-center mb-10 text-gray-800`}>
      📚 Learning Resources</h2><br /><br />

      <div className="relative max-w-9xl mx-auto overflow-hidden">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg z-10 bg-gray-400 text-white"
        >
          <FaArrowLeft size={30} />
        </button>

        {/* Scrollable Cards Container */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth px-10 no-scrollbar"
        >
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              className="shadow-xl rounded-xl overflow-hidden cursor-pointer relative flex-none w-64 md:w-72"
              style={{
                backgroundColor: "#1F2937",
                scrollSnapAlign: "start",
              }}
              whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 200 } }}
            >
              <a href={resource.file} download>
                <img src={resource.image} alt={resource.title} className="w-full h-48 object-cover" loading="lazy" />
              </a>

              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-white">{resource.title}</h3>
                <a
                  href={resource.file}
                  download
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300 bg-blue-500 text-white"
                >
                  <FaDownload /> Download
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg z-10 bg-gray-400 text-white"
        >
          <FaArrowRight size={30} />
        </button>
      </div>

      {/* Hide scrollbar for all browsers */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Resources;
