"use client";

import Footer from "@/components/Home/Footer";
import Aboutme from "@/components/Home/aboutme";
import Heropage from "@/components/Home/heropage";
import Navbar from "@/components/Home/navbar";
import Skills from "@/components/Home/skills";
import Work from "@/components/Home/work";
import Learn from "@/components/Home/learn";
import Contact from "@/components/Home/contact";
import Timeline from "@/components/Home/timeline/timeline";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsModalOpen(true);
    }, 4000);
  }, []);

  return (
    <div className="bg-[#0a192f] text-white">
      <Navbar />
      <Heropage />
      <Aboutme />
      <Skills />
      <Timeline />
      <Work />
      <Learn />
      <Contact />
      <Footer />
      {/* Example usage of isModalOpen */}
      {isModalOpen && <div className="modal"></div>}
    </div>
  );
};

export default HomePage;
