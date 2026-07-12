"use client";

import React from "react";
import Link from "next/link";
import Aurora from "@/components/Aurora";

export default function NotFound() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center select-none">
      
      {/* Dynamic Background Aurora Core Layer */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-40">
        <Aurora
          colorStops={["#F43F5E", "#EF4444", "#EC4899"]}
          blend={0.65}
          amplitude={1.2}
          speed={0.4}
        />
      </div>

      {/* Foreground 404 Interface Panel */}
      <div className="relative z-10 text-center space-y-6 max-w-md px-4 pointer-events-auto">
        <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-700 tracking-tighter drop-shadow-md">
          404
        </h1>

        <div className="space-y-2">
          <h2 className="text-xl font-bold text-white tracking-wide">
            Page Not Found
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            The workspace link you are testing does not exist or has moved down to another routing segment.
          </p>
        </div>

        <div className="pt-4">
          <Link 
            href="/"
            className="inline-flex items-center justify-center bg-white text-black font-semibold text-sm px-6 py-3 rounded-lg hover:bg-zinc-200 transition-all duration-200 shadow-xl hover:scale-[1.02] active:scale-[0.98]"
          >
            Return to Homepage
          </Link>
        </div>
      </div>

    </div>
  );
}