"use client";

import { motion } from "framer-motion";
import React from "react";

const strokeVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { duration: 2.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const fillVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 1.5, duration: 1.5 } }
};

/* Architectural Crescent - Sharp, precise lines */
export const IconCrescentV3 = ({ className }: { className?: string }) => (
  <motion.svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path 
      variants={strokeVariants}
      initial="hidden"
      whileInView="visible"
      d="M50 15C35 15 22 25 18 38C14 51 18 65 28 75C38 85 53 87 65 82C55 86 42 84 34 78C22 70 16 55 18 42C20 29 28 18 40 15" 
      stroke="currentColor" 
      strokeWidth="0.8" 
    />
    <motion.circle variants={fillVariants} initial="hidden" whileInView="visible" cx="75" cy="25" r="1.5" fill="var(--color-accent)" />
  </motion.svg>
);

/* Mosque Blueprint - Inspired by high-end architectural drawings */
export const IconMosqueV3 = ({ className }: { className?: string }) => (
  <motion.svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path variants={strokeVariants} initial="hidden" whileInView="visible" d="M20 90H80" stroke="currentColor" strokeWidth="0.5" />
    <motion.rect variants={strokeVariants} initial="hidden" whileInView="visible" x="35" y="45" width="30" height="45" stroke="currentColor" strokeWidth="0.5" />
    <motion.path variants={strokeVariants} initial="hidden" whileInView="visible" d="M35 45C35 35 42 25 50 25C58 25 65 35 65 45" stroke="currentColor" strokeWidth="0.5" />
    <motion.path variants={strokeVariants} initial="hidden" whileInView="visible" d="M15 30L15 90M85 30L85 90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
    <motion.path variants={strokeVariants} initial="hidden" whileInView="visible" d="M10 30L20 20L30 30H10Z" stroke="currentColor" strokeWidth="0.5" />
  </motion.svg>
);

/* Sub-texture Geometric - Quiet and meaningful */
export const IconTextureV3 = ({ className }: { className?: string }) => (
  <motion.svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path 
        variants={strokeVariants} 
        initial="hidden" 
        whileInView="visible" 
        d="M0 50H100M50 0V100" 
        stroke="currentColor" 
        strokeWidth="0.1" 
        opacity="0.2" 
    />
    <motion.circle 
        variants={strokeVariants} 
        initial="hidden" 
        whileInView="visible" 
        cx="50" cy="50" r="30" 
        stroke="currentColor" 
        strokeWidth="0.2" 
        strokeDasharray="2 10" 
    />
  </motion.svg>
);

/* 👇 NOUVEAU COMPOSANT : Pigeon et Branche d'Olivier (Exactement comme le logo) */
export const IconDoveOliveBranchGold = ({ className }: { className?: string }) => {
  return (
    <motion.div 
      className={`relative flex items-center justify-center ${className}`}
      // Petite animation de flottement
      animate={{ y: [-5, 3, -5] }} 
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* 1. L'Aura Lumineuse Dorée très douce */}
      <motion.div
        className="absolute inset-0 bg-accent/20 blur-[25px] rounded-full -z-10"
        animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* 2. L'icône du Pigeon et de la branche (SVG précis) */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 512 512" 
        className="w-full h-full text-accent drop-shadow-[0_8px_15px_rgba(200,160,100,0.3)]"
        fill="currentColor"
      >
        <path d="M492.2 165.1c-19.1-23.7-47-38.3-77-38.3c-23.2 0-45.2 8.3-62.8 23.3l-81.8 70.1L123.5 63.6C119.8 59.3 114.5 56.8 109 56.5c-5.5-.3-11.1 1.7-15.3 5.6C89 66.5 86.8 73 87.5 79.5l14 84.1L24 207c-8.8 2.6-15.4 9.6-17.6 18.5s.4 18.2 6.8 24.8l112.5 116.7c8.5 8.8 20.4 13.7 32.8 13.7h89c16.2 0 31.6-6.7 42.7-18.4l191.1-200.7c11-11.5 14.8-28.1 9.5-43.3zM411.3 430.7c-2.9 8.6-11.6 14.6-21 14.6h-76.3c-11.5 0-21.8-8.1-24.4-19.3L260 384c-1.3-5.6-.2-11.4 3-16.1l32.5-48c5.4-8 15.3-11.2 24.1-7.8l63 24.1c11.1 4.2 17.1 16.5 13.4 27.5l-24.1 63zm-17.6-63c-3.1 8.5-12.7 13.1-21.3 10.1l-63-24.1c-3.4-1.3-6.1-3.9-7.5-7.3l-24.1-63c-3.7-11 2.3-23.3 13.4-27.5l63-24.1c3.4-1.3 7-1.4 10.5-.3l76.3 26.6c11.3 3.9 17.5 16.2 13.6 27.5l-24.1 63zM250 480c-16.6 0-30 13.4-30 30s13.4 30 30 30s30-13.4 30-30s-13.4-30-30-30z"/>
      </svg>
    </motion.div>
  );
};