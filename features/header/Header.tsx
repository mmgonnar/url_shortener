"use client"

import Link from "next/link"

import { Zap, BarChart3, Settings } from "lucide-react";
//import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full border-b border-muted/20 backdrop-blur-sm bg-background/50">
    <div className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
            <Link href={""} className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Short.ly</h1>
            <p className="text-xs text-neutral-400">URL Shortener</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
            <Link href={"/"} className="flex items-center gap-2 text-sm text-neutral-400 hover:text-foreground transition-colors">
            <Zap className="w-4 h-4" />
            Features
            </Link>

          <a
            href="#analytics"
            className="flex items-center gap-2 text-sm text-neutral-400 hover:text-foreground transition-colors"
          >
            <BarChart3 className="w-4 h-4" />
            Analytics
          </a>
          <a
            href="#settings"
            className="flex items-center gap-2 text-sm text-neutral-400 hover:text-foreground transition-colors"
          >
            <Settings className="w-4 h-4" />
            Settings
          </a>
        </nav>

        {/* CTA */}
        <button className="btn-accent hidden md:flex">
          Get Started
        </button>
      </div>
    </div>
  </header>
  )
}


