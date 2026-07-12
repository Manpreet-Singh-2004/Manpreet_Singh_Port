"use client";

import React from "react";
import { experienceData, ExperienceItem } from "@/lib/experience";

export default function Experience() {
  return (
    <section className="w-full max-w-4xl mx-auto my-12 px-4">
      {/* Section Title */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white tracking-wide">
          Experience
        </h3>
        <hr className="border-t-2 border-zinc-700 mt-2 w-full" />
      </div>

      {/* References Alert Banner */}
      <div className="flex items-center justify-center gap-3 bg-zinc-900/40 backdrop-blur-sm py-3 border border-zinc-800/60 rounded-xl text-sm text-zinc-400 mb-8 font-medium px-4 shadow-lg">
        <div className="h-px bg-zinc-800 flex-1 hidden sm:block"></div>
        <span>Note: List of references available on request</span>
        <div className="h-px bg-zinc-800 flex-1 hidden sm:block"></div>
      </div>

      {/* Experience Stream */}
      <div className="space-y-12">
        {experienceData.map((exp: ExperienceItem) => (
          <div
            key={exp.id}
            className="bg-zinc-900/20 backdrop-blur-sm p-6 rounded-xl border border-zinc-800/40 shadow-xl hover:border-zinc-700/50 transition duration-300"
          >
            {/* Header Identity Row */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-1">
              <h4 className="text-xl font-bold text-white tracking-tight">
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition hover:underline"
                  >
                    {exp.company}
                  </a>
                ) : (
                  exp.company
                )}
              </h4>
              <span className="text-xs md:text-sm text-zinc-400 font-medium whitespace-nowrap">
                {exp.duration}
              </span>
            </div>

            {/* Metadata Badges & Location Line */}
            <div className="text-sm text-zinc-400 italic mt-1.5 flex flex-wrap items-center gap-2">
              <span className="text-white font-medium not-italic">
                {exp.role}
              </span>
              <span className="text-zinc-600">|</span>
              <span>{exp.location}</span>
              <span className="text-zinc-600">|</span>
              <span
                className={`px-2 py-0.5 rounded text-xs font-semibold ${
                  exp.type === "Full-Time"
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                }`}
              >
                {exp.type}
              </span>
            </div>

            <hr className="border-t border-zinc-800 w-full my-4" />

            {/* Dynamic Paragraph Stream */}
            <div className="space-y-3 text-zinc-300 leading-relaxed text-sm md:text-base">
              {exp.paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>

            {/* Main Core Points Breakdown */}
            <div className="mt-5">
              <span className="font-semibold text-zinc-200 text-sm tracking-wide uppercase block mb-2">
                Main Points
              </span>
              <ul className="list-disc pl-5 space-y-1.5 text-zinc-300 text-sm md:text-base">
                {exp.mainPoints.map((point, index) => (
                  <li key={index} className="marker:text-zinc-500">
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dynamic Action Controls Links Array */}
            {exp.links.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t border-zinc-800/60">
                {exp.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={link.downloadName || undefined}
                    className="inline-flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-xs md:text-sm px-4 py-2 rounded-lg transition border border-zinc-700/60 shadow hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
