"use client";

import Link from "next/link";

import { Zap, BarChart3, Settings, Sun, Moon } from "lucide-react";
import { Button } from "@/features/ui/components/button";
import { useTheme } from "next-themes";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl backdrop-saturate-150">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <Link href={""} className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Short.ly</h1>
              <p className="text-xs text-neutral-400">URL Shortener</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href={"#features"}
              className="flex items-center gap-2 text-sm text-neutral-400 hover:text-foreground transition-colors"
            >
              <Zap className="w-4 h-4" />
              Features
            </Link>
            <Link
              href={"/"}
              className="flex items-center gap-2 text-sm text-neutral-400 hover:text-foreground transition-colors"
            >
              <BarChart3 className="w-4 h-4" />
              Analytics
            </Link>
            <Link
              href={"/"}
              className="flex items-center gap-2 text-sm text-neutral-400 hover:text-foreground transition-colors"
            >
              <Settings className="w-4 h-4" />
              Settings
            </Link>
          </nav>

          <div className="flex gap-8 items-center">
            {/* CTA */}
            <div className="flex gap-2 items-center">
              <Button variant="default" className="hidden md:flex">
                Get Started
              </Button>
              <Button variant="default" className="hidden md:flex">
                Login
              </Button>
            </div>
            <div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
