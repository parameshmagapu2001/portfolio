"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Poppins, Passions_Conflict } from "next/font/google";
import { FiMenu, FiX } from "react-icons/fi";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });
const passionsConflict = Passions_Conflict({ weight: ["400"], subsets: ["latin"] });

export const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menu items with their corresponding section IDs
  const menuItems = [
    { name: "Home", sectionId: "home" },
    { name: "About Me", sectionId: "about-me" },
    { name: "Works", sectionId: "works" },
    { name: "Contact", sectionId: "contact" }
  ];

  useEffect(() => {
    if (navRef.current) {
      gsap.from(navRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
      });
    }
  }, []);

  const toggleMenu = (menuName?: string) => {
    // If a specific menu is clicked
    if (menuName) {
      setActiveMenu(prevMenu => prevMenu === menuName ? null : menuName);
    }

    // Toggle overall menu open/close
    setIsMenuOpen(prev => !prev);

    // Animate sidebar
    if (sidebarRef.current) {
      gsap.to(sidebarRef.current, {
        x: isMenuOpen ? "100%" : "0%",
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  return (
    <nav 
      ref={navRef}
      className={`navbar ${poppins.className}`}
      style={{
        height: "90px",
        width: "100%",
        backgroundColor: "rgba(255, 246, 221, 0.88)",
        padding: "0 50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 8px 15px rgba(255, 255, 255, 0.4)",
        zIndex: 1000,
        position: "fixed",
        top: 0,
        left: 0
      }}
    >
      {/* Brand/Logo with responsive sizing */}
      <a 
        className="navbar-brand" 
        href="#" 
        style={{ 
          textDecoration: "none",
          display: "flex",
          alignItems: "center"
        }}
      >
        <h2
          style={{
            fontSize: "clamp(47px, 4vw, 68px)", // Responsive font size
            fontWeight: "normal",
            margin: 0,
            color: "#333",
            fontFamily: passionsConflict.style.fontFamily,
            transition: "color 0.1s ease-in-out",
          }}
        >
          Paramesh Magapu
        </h2>
      </a>

      {/* Mobile Menu Toggle */}
      <div
        className="menu-toggle"
        onClick={() => toggleMenu()}
        style={{
          fontSize: "32px",
          cursor: "pointer",
          zIndex: 1100,
          display: "block",
          color: "#000",
        }}
      >
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Sidebar Menu */}
      <div
        ref={sidebarRef}
        className="sidebar-menu"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "250px",
          height: "100vh",
          backgroundColor: "rgba(117, 112, 112, 0.9)",
          boxShadow: "-2px 0 5px rgba(171, 171, 171, 0.4)",
          paddingTop: "100px",
          transform: "translateX(100%)",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        {menuItems.map((item) => (
          <a
            key={item.sectionId}
            href={`#${item.sectionId}`}
            onClick={() => toggleMenu(item.name)}
            style={{
              fontSize: "20px",
              fontWeight: 650,
              textDecoration: "none",
              color: activeMenu === item.name ? "#FFC107" : "#FFF", // Highlight active menu
              padding: "15px",
              transition: "color 0.3s",
              width: "100%",
              textAlign: "center",
            }}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;