"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaArrowLeft, FaArrowRight, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from 'next/image';
import { Merienda } from "next/font/google";

const merienda = Merienda({ weight: ["400", "700"], subsets: ["latin"] });


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

  const resourceItems = [
    { 
      title: "UI Technologies", 
      href: "/UI Technologies.pdf",
      alt: "UI Technologies Resource"
    },
    { 
      title: "React js", 
      href: "/reactjs.pdf",
      alt: "React JS Resource"
    },
    { 
      title: "OOPS Concepts", 
      href: "/OOPs important interview question.pdf",
      alt: "Object-Oriented Programming Concepts"
    },
    { 
      title: "Django", 
      href: "/django.pdf",
      alt: "Django Resource"
    },
    { 
      title: "GIT Basics", 
      href: "/git.pdf",
      alt: "Git Basics Resource"
    },
    { 
      title: "API's Basics", 
      href: "/api.pdf",
      alt: "APIs Basics Resource"
    },
    { 
      title: "Java Scripts Basics", 
      href: "/js.pdf",
      alt: "JavaScript Basics Resource"
    },
    { 
      title: "Node js Basics", 
      href: "/nodejs.pdf",
      alt: "Node.js Basics Resource"
    },
    { 
      title: "Advanced JavaScript", 
      href: "/pdfs/advanced-js.pdf",
      alt: "Advanced JavaScript Resource"
    },
    { 
      title: "Django", 
      href: "/django.pdf",
      alt: "Django for Beginners Resource"
    }
  ];

  return (
    <div ref={containerRef} className="py-10 px-10 min-h-[20vh] relative bg-[#FDF6E3]">
    <h2 className={`${merienda.className} text-3xl font-bold text-center mb-10 text-gray-800`}>
      📚 Learning Resources
    </h2>
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
          {resourceItems.map((item, index) => (
            <motion.div
              key={index}
              className="shadow-xl rounded-xl overflow-hidden cursor-pointer relative flex-none w-64 md:w-72"
              style={{ backgroundColor: "white", scrollSnapAlign: "start" }}
              whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 200 } }}
            >
              <a href={item.href} download>
                <Image 
                  src="/folder.png" 
                  alt={item.alt} 
                  width={160} 
                  height={160} 
                  className="w-40 h-40 object-cover mx-auto"
                  loading="lazy"
                />
              </a>

              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                <a 
                  href={item.href} 
                  download 
                  className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300"
                  style={{ backgroundColor: "#FDF6E3", color: "black" }}
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