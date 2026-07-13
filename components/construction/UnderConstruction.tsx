"use client";

import React from "react";
import Link from "next/link";
import Galaxy from "@/components/Galaxy";
import { Button } from "@/components/ui/button";
import { Construction, ArrowLeft, GitBranch } from "lucide-react";

export default function UnderConstruction() {
  return (
    <div className="relative w-full h-screen bg-background overflow-hidden flex items-center justify-center select-none">
      {/* Background Interactive WebGL Galaxy Layer */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-80 dark:opacity-100">
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.8}
          glowIntensity={0.6}
          saturation={0.9}
          hueShift={140}
          starSpeed={0.3}
          twinkleIntensity={0.5}
          transparent={false}
        />
      </div>

      {/* Glassmorphism Informational Content Card Overlay */}
      <div className="relative z-10 w-full max-w-md mx-4 p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-md shadow-2xl text-center space-y-6">
        {/* Decorative Construction Badge */}
        <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary border border-primary/20 animate-pulse">
          <Construction className="h-6 w-6" />
        </div>

        {/* Messaging Hierarchy */}
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
            Under Construction
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This workspace segment is undergoing an architectural redesign.
            Advanced full-stack microservices and API metrics frameworks are
            actively deploying.
          </p>
        </div>

        {/* Operational Status Sub-Card */}
        <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-muted/50 border border-border text-xs text-muted-foreground text-left font-mono">
          <GitBranch className="h-4 w-4 text-primary shrink-0" />
          <div>
            <span className="text-foreground font-semibold block">
              Branch: main
            </span>
            <span className="opacity-80">
              Refactoring schema aggregation layers
            </span>
          </div>
        </div>

        {/* Action Controls Navigation Row */}
        <div className="pt-2">
          <Button
            render={<Link href="/" />}
            className="w-full group cursor-pointer flex items-center justify-center whitespace-nowrap"
            variant="default"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Return to Terminal Mainframe
          </Button>
        </div>
      </div>
    </div>
  );
}
