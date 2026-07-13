"use client";

import React from "react";
import Prism from "@/components/Prism";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      
      {/* Background Interactive WebGL Prism Layer */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1.5}
          bloom={1.2}
          transparent={true}
          suspendWhenOffscreen={true}
        />
      </div>

      {/* Foreground Identity Context Overlay Layer */}
      <div className="relative z-10 text-center select-none pointer-events-none">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-lg">
          Manpreet Singh
        </h1>
      </div>

    </div>
  );
};

export default HeroBanner;