"use client";

import React from "react";
import FloatingLines from "@/components/FloatingLines";

const HeroBanner = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      
      <div className="absolute inset-0 w-full h-full z-0">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineCount={8}
          lineDistance={8}
          bendRadius={8}
          bendStrength={-2}
          interactive={true}
          parallax={true}
          animationSpeed={1}
          linesGradient={["#e945f5", "#6f6f6f", "#6a6a6a"]} 
          mixBlendMode="screen"
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