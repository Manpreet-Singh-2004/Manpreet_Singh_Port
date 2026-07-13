"use client";

import React, { useEffect, useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  // Fallback date from your HTML file in case the API rate-limits or fails
  const [lastUpdated, setLastUpdated] = useState<string>("12-07-2026");

  useEffect(() => {
    // Replace with your actual GitHub username and repository name
    const username = "Manpreet-Singh-2004";
    const repo = "manpreet_singh_port";

    fetch(`https://api.github.com/repos/${username}/${repo}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch repository metadata");
        return res.json();
      })
      .then((data) => {
        // data.pushed_at returns an ISO string (e.g., "2026-07-11T18:29:09Z")
        if (data.pushed_at) {
          const date = new Date(data.pushed_at);

          // Format it to match your preferred style: DD-MM-YYYY
          const day = String(date.getDate()).padStart(2, "0");
          const month = String(date.getMonth() + 1).padStart(2, "0");
          const year = date.getFullYear();

          setLastUpdated(`${day}-${month}-${year}`);
        }
      })
      .catch((err) => {
        console.error("GitHub API error, using static fallback date:", err);
      });
  }, []);

  return (
    <footer className="w-full bg-zinc-950 border-t border-zinc-900 py-12 px-4 mt-auto text-center z-10 relative">
      <div className="max-w-4xl mx-auto space-y-6">
        <h3 className="text-xl font-bold text-white tracking-wide">
          Connect With Me !
        </h3>

        <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

        <div className="flex justify-center items-center gap-6 text-sm md:text-base font-medium">
          <a
            href="mailto:mani194580@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-pink-500 transition-colors duration-200"
          >
            Email
          </a>

          <span className="text-zinc-800" aria-hidden="true">
            |
          </span>

          <a
            href="https://www.linkedin.com/in/manpreetsingh18-ufv/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-blue-500 transition-colors duration-200"
          >
            LinkedIn
          </a>

          <span className="text-zinc-800" aria-hidden="true">
            |
          </span>

          <a
            href="https://github.com/Manpreet-Singh-2004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors duration-200"
          >
            GitHub
          </a>
        </div>

        {/* Dynamic System Timestamp mapping the latest state */}
        <div className="text-[10px] tracking-widest text-zinc-600 uppercase pt-4">
          © {currentYear} Manpreet Singh • Last Updated {lastUpdated}
        </div>
      </div>
    </footer>
  );
}
