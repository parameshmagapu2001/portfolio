import React from "react";
import Image from "next/image";
import { FaCode } from "react-icons/fa";
import { MdOutlineArchitecture } from "react-icons/md";
import { PiLightningBold } from "react-icons/pi";
import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

const projects = [

    {
    title: "TechGy Innovations Website",
    desc:
      "Official website developed for my own organization — Techgy Innovations. A modern, fully responsive frontend built using Next.js and React, designed to showcase our services and technology offerings. Features a clean design flow, interactive sections, and smooth user experience. Contact forms are integrated using Formspree for seamless communication. Hosted with robust and scalable infrastructure.",
    tech: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Formspree", "Hosting"],
    type: "Frontend",
    code: "#",
    demo: "https://techgyinnovations.com/",
    image: "/p2.png"
  },
  {
  title: "Green Land Capital Platform",
  desc:
    "A large-scale web application developed for Green Land Capital, focused on enabling secure and transparent property buying and selling. The platform connects customers directly with other customers or allows them to buy properties directly from the company. It ensures highly secure, legally maintained documentation, and trusted land transactions. Designed to handle high volumes of users and property listings, it prioritizes data security and compliance. This project highlights my ability to work as a strong team player, collaborating effectively to deliver a robust and scalable solution.",
  tech: ["React", "Next.js", "Node.js", "MySQL", "Prisma", "JWT", "Cloudinary"],
  type: "Full Stack",
  code: "#",
  demo: "#",
  image: "/p7.png"
},
  {
    title: "AI-Driven Chatbot for TechGy",
    desc:
      "An intelligent chatbot developed for Techgy Innovations, designed to handle customer queries and provide instant support. The bot is trained on customized prompts specific to our services and workflows, ensuring accurate and context-aware responses. Built using advanced natural language processing techniques, it offers seamless interaction and enhances user engagement on the website.",
    tech: ["JavaScript", "Node.js", "OpenAI API", "Natural Language Processing", "React", "Next.js"],
    type: "AI / Chatbot",
    code: "#",
    demo: "https://techgyinnovations.com/",
    image: "/p3.png"
  },
  {
  title: "Nex2u Platform",
  desc:
    "A modern web platform built to connect nearby users for social and professional networking. Nex2u uses interactive maps to help users find and connect with others in their area, enabling seamless collaborations and real-time interactions. Features include JWT-based authentication, real-time push notifications with Firebase Cloud Messaging, and an admin dashboard for analytics and user insights. Backend is powered by Node.js with a robust MySQL database managed through Prisma, while the frontend is developed using React and Next.js for a smooth, dynamic user experience.",
  tech: ["React", "Next.js", "Node.js", "MySQL", "Prisma", "JWT", "Cloudinary", "Firebase Cloud Messaging"],
  type: "Backend",
  code: "#",
  demo: "#",
  image: "/p5.jpg"
},
  {
    title: "Nuvik",
    desc:
      "Nuvik is a modern e-commerce platform for selling Theassa Laminates and Assa Louvers. Built with Next.js and React, it features a dynamic product catalog, secure checkout, and real-time inventory management.",
    tech: ["Next.js", "React", "JavaScript", "TypeScript", "Node.js", "MySQL", "CSS3"],
    type: "Fullstack",
    code: "#",
    demo: "https://nuvik-latest.vercel.app/",
    image: "/p1.1.png",
  },

{
  title: "Lending Bridge Website",
  desc:
    "A modern, fully responsive frontend website developed for Lending Bridge UK. This platform showcases a range of property-backed loan products, including residential and commercial bridging loans, auction finance, development exit finance, and more. Designed with a clear, professional layout to build trust and guide users to enquire or calculate loan options easily. The site focuses purely on presenting services and capturing leads, without backend application logic.",
  tech: ["HTML5", "CSS3", "JavaScript", "React", "Next.js"],
  type: "Frontend",
  code: "#",
  demo: "https://www.lendingbridge.co.uk/",
  image: "/p4.png"
},
{
  title: "Chat Application Dashboard",
  desc:
    "An advanced admin dashboard built to monitor and manage a real-time chat application. This dashboard provides powerful analytics on active users, message statistics, and system performance in real time. Admins can oversee conversations, manage user accounts, and ensure a secure and smooth chatting experience. Designed with an intuitive UI and robust backend integrations to support high concurrency and seamless scalability.",
  tech: ["React", "Next.js", "Node.js", "MySQL", "Prisma", "JWT", "Socket.io", "Chart.js"],
  type: "Full Stack",
  code: "#",
  demo: "#",
  image: "/p9.jpg"
},

{
  title: "Zepto E-commerce API Development",
  desc:
    "A comprehensive set of APIs developed for an e-commerce platform, designed to handle key functionalities such as user authentication, product management, cart operations, order processing, and payment integration. Built using Next.js API routes and Node.js with MySQL and Prisma for a scalable, secure backend. The APIs ensure efficient data flow between frontend and backend, enabling a seamless shopping experience for users and powerful management tools for admins.",
  tech: ["Next.js", "Node.js", "MySQL", "Prisma", "JWT", "REST API"],
  type: "Backend",
  code: "#",
  demo: "#",
  image: "/p6.1.jpg"
}

];

// Features array (moved out of projects array)
const features = [
  {
    icon: <FaCode size={24} />,
    title: "Clean Code",
    desc: "Writing maintainable and scalable code following best practices",
  },
  {
    icon: <PiLightningBold size={24} />,
    title: "Performance",
    desc: "Optimizing applications for speed and user experience",
  },
  {
    icon: <MdOutlineArchitecture size={24} />,
    title: "Architecture",
    desc: "Building robust and scalable application architectures",
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-[rgb(254,244,214)] text-black py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-blue-600 mb-10 text-sm uppercase tracking-wide">
          Browse My Recent
        </p>
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-16">
          Here are some of the projects I&apos;ve worked on, showcasing my skills in
          full-stack development
        </p>
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          style={{ position: "relative" }}
        >
  <>
    <Image
      src={project.image}
      alt={project.title}
      width={500}
      height={200}
      className="w-full h-48 object-cover rounded-t-xl"
      style={{
        width: "100%",
        height: "12rem",
        objectFit: "cover",
        borderTopLeftRadius: "0.75rem",
        borderTopRightRadius: "0.75rem",
      }}
    />
    <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
      {project.type}
    </span>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">
        {project.title}
      </h3>
      <p className="text-gray-700 text-sm mb-4">{project.desc}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="bg-gray-100 text-xs px-3 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={project.code}
          target="_blank"
          className="flex items-center gap-1 text-sm bg-gray-200 hover:bg-gray-300 transition text-black px-4 py-2 rounded-lg"
        >
          <BsGithub /> Code
        </a>
        <a
          href={project.demo}
          target="_blank"
          className="flex items-center gap-1 text-sm bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-2 rounded-lg"
        >
          <FiExternalLink /> Live Demo
        </a>
      </div>
    </div>
  </>
</div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3 mt-20">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl text-center shadow hover:shadow-lg transition"
            >
              <div className="text-blue-600 mb-3 mx-auto w-fit">{feat.icon}</div>
              <h4 className="font-semibold text-lg mb-2">{feat.title}</h4>
              <p className="text-gray-700 text-sm">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
