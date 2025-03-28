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
    <div ref={containerRef} className="py-10 px-10 min-h-[20vh] relative bg-[#FDF6E3]">
      <h2 className={`${nosifer.className} text-3xl font-bold text-center mb-10 text-gray-800`}>
        📚 Learning Resources
      </h2>
      <br />
      <br />

      <div className="relative max-w-10xl mx-auto overflow-hidden">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="absolute left-2 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-lg z-10 bg-gray-400 text-black"
        >
          <FaArrowLeft size={30} />
        </button>

        {/* Scrollable Cards Container */}
        <div ref={scrollRef} className="flex gap-10 overflow-x-auto scroll-smooth px-10 no-scrollbar">

          {/* Web Development Basics */}
          <motion.div
            className="shadow-xl rounded-xxl overflow-hidden cursor-pointer relative flex-none w-74 md:w-80"
            style={{ backgroundColor: "white", scrollSnapAlign: "start" }}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 1000 } }}
          >
            <a href="/UI Technologies.pdf" download>
              <img src="/folder.png" alt="Web Development Basics" className="w-40 h-40 object-cover mx-auto" loading="lazy" />
            </a>

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-black">UI Technologies</h3>
              <a href="/UI Technologies.pdf" download className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300 " style={{ backgroundColor: "#FDF6E3", color: "black" }}>
                <FaDownload /> Download
              </a>
            </div>
          </motion.div>

          {/* Web Development Basics */}
          <motion.div
            className="shadow-xl rounded-xl overflow-hidden cursor-pointer relative flex-none w-64 md:w-72"
            style={{ backgroundColor: "white", scrollSnapAlign: "start" }}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 200 } }}
          >
            <a href="/reactjs.pdf" download>
              <img src="/folder.png" alt="Web Development Basics" className="w-40 h-40 object-cover mx-auto" loading="lazy" />
            </a>

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-black">React js</h3>
              <a href="/reactjs.pdf" download className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300" style={{ backgroundColor: "#FDF6E3", color: "black" }}>
                <FaDownload /> Download
              </a>
            </div>
          </motion.div>


          {/* Web Development Basics */}
          <motion.div
          className="shadow-xl rounded-xl overflow-hidden cursor-pointer relative flex-none w-64 md:w-72"
          style={{ backgroundColor: "white", scrollSnapAlign: "start" }}
          whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 200 } }}
        >
          <a href="/OOPs important interview question.pdf" download>
            <img src="/folder.png" alt="Web Development Basics" className="w-40 h-40 object-cover mx-auto" loading="lazy" />
          </a>

          <div className="p-5 text-center">
            <h3 className="text-lg font-semibold text-black">OOPS Concepts</h3>
            <a href="/OOPs important interview question.pdf" download className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300 " style={{ backgroundColor: "#FDF6E3", color: "black" }}>
              <FaDownload /> Download
            </a>
          </div>
        </motion.div>


          {/* Web Development Basics */}
          <motion.div
            className="shadow-xl rounded-xl overflow-hidden cursor-pointer relative flex-none w-64 md:w-72"
            style={{ backgroundColor: "white", scrollSnapAlign: "start" }}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 200 } }}
          >
            <a href="/django.pdf" download>
              <img src="/folder.png" alt="Web Development Basics" className="w-40 h-40 object-cover mx-auto" loading="lazy" />
            </a>

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-black">Django</h3>
              <a href="/django.pdf" download className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300" style={{ backgroundColor: "#FDF6E3", color: "black" }}>
                <FaDownload /> Download
              </a>
            </div>
          </motion.div>


          {/* Web Development Basics */}
          <motion.div
            className="shadow-xl rounded-xl overflow-hidden cursor-pointer relative flex-none w-64 md:w-72"
            style={{ backgroundColor: "white", scrollSnapAlign: "start" }}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 200 } }}
          >
            <a href="/git.pdf" download>
              <img src="/folder.png" alt="Web Development Basics" className="w-40 h-40 object-cover mx-auto" loading="lazy" />
            </a>

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-black">GIT Basics</h3>
              <a href="/git.pdf" download className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300 " style={{ backgroundColor: "#FDF6E3", color: "black" }}>
                <FaDownload /> Download
              </a>
            </div>
          </motion.div>


          {/* Web Development Basics */}
          <motion.div
            className="shadow-xl rounded-xl overflow-hidden cursor-pointer relative flex-none w-64 md:w-72"
            style={{ backgroundColor: "white", scrollSnapAlign: "start" }}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 200 } }}
          >
            <a href="/api.pdf" download>
              <img src="/folder.png" alt="Web Development Basics" className="w-40 h-40 object-cover mx-auto" loading="lazy" />
            </a>

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-black">API's Basics</h3>
              <a href="/api.pdf" download className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300 " style={{ backgroundColor: "#FDF6E3", color: "black" }}>
                <FaDownload /> Download
              </a>
            </div>
          </motion.div>
        
          {/* Web Development Basics */}
          <motion.div
            className="shadow-xl rounded-xl overflow-hidden cursor-pointer relative flex-none w-64 md:w-72"
            style={{ backgroundColor: "white", scrollSnapAlign: "start" }}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 200 } }}
          >
            <a href="/js.pdf" download>
              <img src="/folder.png" alt="Web Development Basics" className="w-40 h-40 object-cover mx-auto" loading="lazy" />
            </a>

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-black">Java Scripts Basics</h3>
              <a href="/js.pdf" download className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300 " style={{ backgroundColor: "#FDF6E3", color: "black" }}>
                <FaDownload /> Download
              </a>
            </div>
          </motion.div>


          {/* Web Development Basics */}
          <motion.div
            className="shadow-xl rounded-xl overflow-hidden cursor-pointer relative flex-none w-64 md:w-72"
            style={{ backgroundColor: "white", scrollSnapAlign: "start" }}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 200 } }}
          >
            <a href="/nodejs.pdf" download>
              <img src="/folder.png" alt="Web Development Basics" className="w-40 h-40 object-cover mx-auto" loading="lazy" />
            </a>

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-black">Node js Basics</h3>
              <a href="/nodejs.pdf" download className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300 " style={{ backgroundColor: "#FDF6E3", color: "black" }}>
                <FaDownload /> Download
              </a>
            </div>
          </motion.div>

          {/* Advanced JavaScript */}
          <motion.div
            className="shadow-xl rounded-xl overflow-hidden cursor-pointer relative flex-none w-64 md:w-72"
            style={{ backgroundColor: "white", scrollSnapAlign: "start" }}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 200 } }}
          >
            <a href="/pdfs/advanced-js.pdf" download>
              <img src="/folder.png" alt="Advanced JavaScript" className="w-40 h-40 object-cover mx-auto" loading="lazy" />
            </a>

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-black">Advanced JavaScript</h3>
              <a href="/pdfs/advanced-js.pdf" download className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300 " style={{ backgroundColor: "#FDF6E3", color: "black" }}>
                <FaDownload /> Download
              </a>
            </div>
          </motion.div>

          {/* Django for Beginners */}
          <motion.div
            className="shadow-xl rounded-xl overflow-hidden cursor-pointer relative flex-none w-64 md:w-72"
            style={{ backgroundColor: "white", scrollSnapAlign: "start" }}
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 200 } }}
          >
            <a href="/django.pdf" download>
              <img src="/folder.png" alt="Django for Beginners" className="w-40 h-40 object-cover mx-auto" loading="lazy" />
            </a>

            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-black">Django</h3>
              <a href="/django.pdf" download className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300 " style={{ backgroundColor: "#FDF6E3", color: "black" }}>
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
