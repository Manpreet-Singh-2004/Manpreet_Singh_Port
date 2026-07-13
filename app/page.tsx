"use client";

import React from "react";
import HeroBanner from "@/components/hero/HeroBanner";
import AboutMe from "@/components/about/AboutMe";
import Experience from "@/components/experience/Experience";

const Page = () => {
  return (
    <div className="w-full min-h-screen bg-background text-foreground select-none">
      
      <HeroBanner />
      
      {/* Dynamic light/dark card sections */}
      <div className="bg-muted/40 py-12 border-t border-border">
        <AboutMe />
      </div>
      <div className="bg-muted/40 py-12 border-t border-border">
        <Experience />
      </div>

    </div>
  );
};

export default Page;