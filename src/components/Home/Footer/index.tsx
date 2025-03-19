"use client";
import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "#fff",
        padding: "20px 0",
        textAlign: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "10px" }}>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/paramesh-magapu-962223248/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", fontSize: "24px", transition: "0.3s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#0077b5")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
        >
          <FaLinkedin />
        </a>


        {/* GitHub */}
        <a
          href="https://github.com/parameshmagapu2001"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", fontSize: "24px", transition: "0.3s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#6e5494")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
        >
          <FaGithub />
        </a>

        {/* Gmail */}
        <a
          href="mailto:your-email@gmail.com"
          style={{ color: "#fff", fontSize: "24px", transition: "0.3s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#D14836")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
        >
          <FaEnvelope />
        </a>
      </div>

      <p style={{ fontSize: "14px", opacity: 0.7 }}>
        Powered by <b>Paramesh Magapu</b> &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
