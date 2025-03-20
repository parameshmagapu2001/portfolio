"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaArrowLeft, FaArrowRight, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { Nosifer } from "next/font/google";

const nosifer = Nosifer({ weight: ["400"], subsets: ["latin"] });

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
        📚 Learning Resources
      </h2>
      <br />
      <br />

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
        <div ref={scrollRef} className="flex gap-8 overflow-x-auto scroll-smooth px-10 no-scrollbar">
          {/* Web Development Basics */}
          <motion.div
            className="shadow-xl rounded-xl overflow-hidden cursor-pointer relative flex-none w-64 md:w-72"
            style={{ backgroundColor: "#1F2937", scrollSnapAlign: "start" }}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 200 } }}
          >
            <a href="/pdfs/web-dev-basics.pdf" download>
              <img src="/images/web-dev.png" alt="Web Development Basics" className="w-full h-48 object-cover" loading="lazy" />
            </a>

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-white">Web Development Basics</h3>
              <a href="/pdfs/web-dev-basics.pdf" download className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300 bg-blue-500 text-white">
                <FaDownload /> Download
              </a>
            </div>
          </motion.div>


          {/* Web Development Basics */}
          <motion.div
            className="shadow-xl rounded-xl overflow-hidden cursor-pointer relative flex-none w-64 md:w-72"
            style={{ backgroundColor: "#1F2937", scrollSnapAlign: "start" }}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 200 } }}
          >
            <a href="/pdfs/web-dev-basics.pdf" download>
              <img src="/images/web-dev.png" alt="Web Development Basics" className="w-full h-48 object-cover" loading="lazy" />
            </a>

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-white">Web Development Basics</h3>
              <a href="/pdfs/web-dev-basics.pdf" download className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300 bg-blue-500 text-white">
                <FaDownload /> Download
              </a>
            </div>
          </motion.div>


          {/* Web Development Basics */}
          <motion.div
            className="shadow-xl rounded-xl overflow-hidden cursor-pointer relative flex-none w-64 md:w-72"
            style={{ backgroundColor: "#1F2937", scrollSnapAlign: "start" }}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 200 } }}
          >
            <a href="/pdfs/web-dev-basics.pdf" download>
              <img src="/images/web-dev.png" alt="Web Development Basics" className="w-full h-48 object-cover" loading="lazy" />
            </a>

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-white">Web Development Basics</h3>
              <a href="/pdfs/web-dev-basics.pdf" download className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300 bg-blue-500 text-white">
                <FaDownload /> Download
              </a>
            </div>
          </motion.div>



          {/* Web Development Basics */}
          <motion.div
            className="shadow-xl rounded-xl overflow-hidden cursor-pointer relative flex-none w-64 md:w-72"
            style={{ backgroundColor: "#1F2937", scrollSnapAlign: "start" }}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 200 } }}
          >
            <a href="/pdfs/web-dev-basics.pdf" download>
              <img src="/images/web-dev.png" alt="Web Development Basics" className="w-full h-48 object-cover" loading="lazy" />
            </a>

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-white">Web Development Basics</h3>
              <a href="/pdfs/web-dev-basics.pdf" download className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300 bg-blue-500 text-white">
                <FaDownload /> Download
              </a>
            </div>
          </motion.div>


          {/* Web Development Basics */}
          <motion.div
            className="shadow-xl rounded-xl overflow-hidden cursor-pointer relative flex-none w-64 md:w-72"
            style={{ backgroundColor: "#1F2937", scrollSnapAlign: "start" }}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 200 } }}
          >
            <a href="/pdfs/web-dev-basics.pdf" download>
              <img src="/images/web-dev.png" alt="Web Development Basics" className="w-full h-48 object-cover" loading="lazy" />
            </a>

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-white">Web Development Basics</h3>
              <a href="/pdfs/web-dev-basics.pdf" download className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300 bg-blue-500 text-white">
                <FaDownload /> Download
              </a>
            </div>
          </motion.div>


          {/* Web Development Basics */}
          <motion.div
            className="shadow-xl rounded-xl overflow-hidden cursor-pointer relative flex-none w-64 md:w-72"
            style={{ backgroundColor: "#1F2937", scrollSnapAlign: "start" }}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 200 } }}
          >
            <a href="/pdfs/web-dev-basics.pdf" download>
              <img src="/images/web-dev.png" alt="Web Development Basics" className="w-full h-48 object-cover" loading="lazy" />
            </a>

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-white">Web Development Basics</h3>
              <a href="/pdfs/web-dev-basics.pdf" download className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300 bg-blue-500 text-white">
                <FaDownload /> Download
              </a>
            </div>
          </motion.div>



          {/* Web Development Basics */}
          <motion.div
            className="shadow-xl rounded-xl overflow-hidden cursor-pointer relative flex-none w-64 md:w-72"
            style={{ backgroundColor: "#1F2937", scrollSnapAlign: "start" }}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 200 } }}
          >
            <a href="/pdfs/web-dev-basics.pdf" download>
              <img src="/images/web-dev.png" alt="Web Development Basics" className="w-full h-48 object-cover" loading="lazy" />
            </a>

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-white">Web Development Basics</h3>
              <a href="/pdfs/web-dev-basics.pdf" download className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300 bg-blue-500 text-white">
                <FaDownload /> Download
              </a>
            </div>
          </motion.div>


          {/* Web Development Basics */}
          <motion.div
            className="shadow-xl rounded-xl overflow-hidden cursor-pointer relative flex-none w-64 md:w-72"
            style={{ backgroundColor: "#1F2937", scrollSnapAlign: "start" }}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 200 } }}
          >
            <a href="/pdfs/web-dev-basics.pdf" download>
              <img src="/images/web-dev.png" alt="Web Development Basics" className="w-full h-48 object-cover" loading="lazy" />
            </a>

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-white">Web Development Basics</h3>
              <a href="/pdfs/web-dev-basics.pdf" download className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300 bg-blue-500 text-white">
                <FaDownload /> Download
              </a>
            </div>
          </motion.div>

          {/* Advanced JavaScript */}
          <motion.div
            className="shadow-xl rounded-xl overflow-hidden cursor-pointer relative flex-none w-64 md:w-72"
            style={{ backgroundColor: "#1F2937", scrollSnapAlign: "start" }}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 200 } }}
          >
            <a href="/pdfs/advanced-js.pdf" download>
              <img src="/images/javascript.png" alt="Advanced JavaScript" className="w-full h-48 object-cover" loading="lazy" />
            </a>

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-white">Advanced JavaScript</h3>
              <a href="/pdfs/advanced-js.pdf" download className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300 bg-blue-500 text-white">
                <FaDownload /> Download
              </a>
            </div>
          </motion.div>

          {/* Django for Beginners */}
          <motion.div
            className="shadow-xl rounded-xl overflow-hidden cursor-pointer relative flex-none w-64 md:w-72"
            style={{ backgroundColor: "#1F2937", scrollSnapAlign: "start" }}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 200 } }}
          >
            <a href="/pdfs/django-basics.pdf" download>
              <img src="/images/django.png" alt="Django for Beginners" className="w-full h-48 object-cover" loading="lazy" />
            </a>

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-white">Django for Beginners</h3>
              <a href="/pdfs/django-basics.pdf" download className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300 bg-blue-500 text-white">
                <FaDownload /> Download
              </a>
            </div>
          </motion.div>
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
