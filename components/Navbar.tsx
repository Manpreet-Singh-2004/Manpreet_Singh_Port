"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  // { label: "Experience", href: "#experience" },
  // { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Brand/Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold inline-block">MS.npm</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-md transition-colors hover:text-foreground/80 hover:bg-muted/50 text-foreground/60"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Controls (Theme Toggle & Mobile Drawer) */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />

          {/* Mobile Collapse Menu using Shadcn Sheet */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon"
                    className="cursor-pointer"
                  />
                }
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader className="text-left">
                  <SheetTitle className="flex items-center space-x-2">
                    <Code2 className="h-6 w-6 text-primary" />
                    <span>Navigation</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-6 px-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-foreground/60 hover:text-foreground transition-colors py-2 border-b border-muted"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
