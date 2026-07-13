"use client";

import React from "react";

export default function AboutMe() {
  return (
    <section className="w-full max-w-4xl mx-auto my-12 px-4">
      {/* Section Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground tracking-wide">
          About Me
        </h3>
        <hr className="border-t-2 border-border mt-2 w-full" />
      </div>

      {/* Content Layout */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-card backdrop-blur-sm p-6 rounded-xl border border-border shadow-xl">
        {/* Biography Paragraph */}
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed flex-1 font-normal">
          I am a BCIS graduate with a passion for designing and developing
          modern web applications. I enjoy solving complex problems, learning
          new technologies, and building software that balances performance,
          scalability, and user experience. Beyond technical skills, I value
          collaboration, clear communication, and continuous improvement,
          believing that the best products are created by teams that share
          knowledge and strive for excellence together.
        </p>
      </div>
    </section>
  );
}