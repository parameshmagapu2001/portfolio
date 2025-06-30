'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { Poppins, Rye, Roboto } from 'next/font/google';
import { motion } from 'framer-motion';

// Load Google Fonts
const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] });
const rye = Rye({ weight: ['400'], subsets: ['latin'] });
const roboto = Roboto({ weight: ['700'], subsets: ['latin'] });

const HeroSection: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const [typingComplete, setTypingComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const titleText = 'Full stack developer. Passionate about coding';
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    // Animate text and image entrance
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2, ease: 'power2.out' }
      );
    }

    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out' }
      );
    }

    // Typing effect
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= titleText.length) {
        setDisplayText(titleText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTypingComplete(true);
      }
    }, 100);

    // Blinking cursor
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <section
      id="home"
      className={`${poppins.className} relative overflow-hidden min-h-[calc(100vh-80px)] flex items-center justify-end md:justify-center px-6 md:px-12 pt-20 md:pt-0`}
      style={{ backgroundColor: '#fdf6e3', marginTop: '80px' }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/v3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

     {/* Text Section */}
<div
  ref={textRef}
  className="absolute top-20 left-6 z-10 w-auto max-w-md text-left"
>
  <motion.span
    className={roboto.className}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    whileHover={{
      scale: 1.05,
      backgroundColor: '#fee3c1',
      boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
    }}
    style={{
      fontSize: 'clamp(16px, 3vw, 24px)',
      fontWeight: 700,
      color: '#222',
      backgroundColor: '#fff',
      padding: '8px 16px',
      borderRadius: '25px',
      display: 'inline-block',
      transition: 'all 0.3s ease',
      marginBottom: '12px',
    }}
  >
 <p>I&apos;m a developer</p>
  </motion.span>

  <h1
    className={rye.className}
    style={{
      fontSize: 'clamp(18px, 3vw, 26px)',
      fontWeight: 700,
      color: '#222',
      backgroundColor: '#fff',
      padding: '16px 20px',
      borderRadius: '30px',
      display: 'inline-block',
      transition: 'all 0.3s ease',
    }}
  >
    {displayText}
    <span
      style={{
        color: '#d95d39',
        fontWeight: 100,
        visibility: showCursor ? 'visible' : 'hidden',
      }}
    >
      |
    </span>

    {typingComplete && (
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{
          display: 'inline-block',
          marginLeft: '5px',
        }}
      >
        ✨
      </motion.span>
    )}
  </h1>
</div>

      {/* Image Section - bottom right for md and up, top center for mobile */}
      <motion.div
        ref={imgRef}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="absolute md:bottom-0 md:right-0 bottom-[-20px] left-1/3 md:left-auto transform md:translate-x-0 -translate-x-1/2 z-10 p-0"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
            transition: {
              repeat: Infinity,
              duration: 3,
              ease: 'easeInOut',
            },
          }}
        >
          <Image
            src="/hero.png"
            alt="hero"
            width={1500}
            height={1800}
            style={{
              width: '100%',
              maxWidth: '380px',
              height: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 10px 15px rgb(0, 0, 0))',
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
