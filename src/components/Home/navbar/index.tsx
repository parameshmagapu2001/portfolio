"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Poppins, Passions_Conflict } from "next/font/google";

// Load Google Fonts
const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });
const passionsConflict = Passions_Conflict({ weight: ["400"], subsets: ["latin"] });

export const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const linksRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.from(navRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    }

    if (linksRef.current?.children) {
      gsap.from([...linksRef.current.children], {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2, // Delays each item slightly for a smooth effect
      });
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className={`navbar fixed-top ${poppins.className}`}
      style={{
        height: "80px",
        width: "100%",
        backgroundColor: "#FDF6E3",
        padding: "0px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 2px 5px rgba(171, 171, 171, 0.4)",
        zIndex: 1000,
      }}
    >
      {/* Brand/Logo */}
      <a className="navbar-brand" href="#" style={{ textDecoration: "none" }}>
        <h2
          style={{
            fontSize: "64px",
            fontWeight: "normal",
            margin: "10px 0",
            color: "#333",
            fontFamily: passionsConflict.style.fontFamily,
            transition: "color 0.3s ease-in-out",
          }}
        >
          Paramesh Magapu
        </h2>
      </a>

      {/* Navbar Items */}
      <ul
        ref={linksRef}
        className="navbar-nav"
        style={{
          display: "flex",
          flexDirection: "row",
          listStyle: "none",
          gap: "40px",
          margin: 0,
          padding: 0,
        }}
      >
        {["Home", "Work", "Projects", "Contact"].map((item, index) => (
          <li key={index} className="nav-item">
            <a
              className="nav-link"
              href={`#${item.toLowerCase()}`}
              style={{
                fontSize: "20px",
                fontWeight: 650,
                textTransform: "uppercase",
                textDecoration: "none",
                color: "#333",
                position: "relative",
                transition: "transform 0.3s ease, color 0.1s ease",
                padding: "15px",
              }}
              onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.1, color: "#d95d39" })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, color: "#336" })}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;