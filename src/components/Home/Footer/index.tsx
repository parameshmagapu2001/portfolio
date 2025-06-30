"use client";
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "#FDF6E3",
        color: "#000", // Set text color to black
        padding: "20px 0",
        textAlign: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginBottom: "10px" }}>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/paramesh-magapu-962223248/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#000", fontSize: "24px", transition: "0.3s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#000")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#000")}
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/parameshmagapu2001"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#000", fontSize: "30px", transition: "0.3s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#000")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#000")}
        >
          <FaGithub />
        </a>

        {/* Gmail */}
        <a
          href="mailto:your-email@gmail.com"
          style={{ color: "#000", fontSize: "30px", transition: "0.3s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#000")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#000")}
        >
          <FaEnvelope />
        </a>
      </div>

      <p style={{ fontSize: "24px", opacity: 1, color: "#000" }}>
        Powered by <b>Paramesh Magapu</b> &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
