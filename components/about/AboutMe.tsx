"use client";

import React from "react";
import Image from "next/image";

interface AboutMeProps {
  imageSrc?: string;
}

export default function AboutMe({ imageSrc = "/photo.png" }: AboutMeProps) {
  return (
    <section className="w-full max-w-4xl mx-auto my-12 px-4">
      {/* Section Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white tracking-wide">
          About Me
        </h3>
        <hr className="border-t-2 border-zinc-700 mt-2 w-full" />
      </div>

      {/* Content Layout */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-zinc-900/40 backdrop-blur-sm p-6 rounded-xl border border-zinc-800/60 shadow-xl">
        {/* Biography Paragraph */}
        <p className="text-zinc-300 text-base md:text-lg leading-relaxed flex-1 font-normal">
          I am a BCIS graduate with a passion for designing and developing
          modern web applications. I enjoy solving complex problems, learning
          new technologies, and building software that balances performance,
          scalability, and user experience. Beyond technical skills, I value
          collaboration, clear communication, and continuous improvement,
          believing that the best products are created by teams that share
          knowledge and strive for excellence together.
        </p>

        {/* Profile Image Wrapper */}
        <div className="w-32 h-32 md:w-40 md:h-40 relative flex-shrink-0 group">
          {/* Subtle Glow Effect behind the profile image */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-zinc-500 rounded-full blur-md opacity-40 group-hover:opacity-60 transition duration-300"></div>

          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-zinc-700 shadow-inner">
            <Image
              src={imageSrc}
              alt="Manpreet Singh"
              fill
              sizes="(max-width: 768px) 128px, 160px"
              className="object-cover group-hover:scale-105 transition duration-300"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
