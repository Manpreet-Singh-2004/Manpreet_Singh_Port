"use client";

import React from "react";
import HeroBanner from "@/components/hero/HeroBanner";
import AboutMe from "@/components/about/AboutMe";
import Experience from "@/components/experience/Experience";

const Page = () => {
  return (
    <div className="w-full min-h-screen bg-black select-none">
      
      <HeroBanner />
      
      <div className="bg-zinc-950 py-12 border-t border-zinc-900">
        <AboutMe />
      </div>
      <div className="bg-zinc-950 py-12 border-t border-zinc-900">
        <Experience />
      </div>

    </div>
  );
};

export default Page;