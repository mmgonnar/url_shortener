"use client";

import Link from "next/link";
import { Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className=" w-full border-t border-muted/20 bg-background/50 backdrop-blur-sm">
        <div className="container w-full mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Shortly */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neutral-500 to-neutral-100 flex items-center justify-center">
                  <Link href="" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gradient">Short.ly</h3>
                  <p className="text-xs text-muted-foreground">URL Shortener</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The most beautiful and powerful URL shortener. Create, track,
                and share your links with style.
              </p>
            </div>
            {/* Product */}
            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Analytics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    API
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            {/* Company */}
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* Resources */}
            {/* <div className="space-y-4">
                <h4 className="font-semibold">Resources</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-foreground transition-colors"
                    >
                      Terms
                    </a>
                  </li>
                </ul>
              </div> */}
          </div>
          <div className="border-t border-muted/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <p>Made by:</p>
              <Link href="https://github.com/mmgonnar" target="blank">
                Mariela González
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              {" \u00A9"} {new Date().getFullYear()} | All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/mmgonnar"
                target="blank"
                className="w-10 h-10 rounded-lg bg-muted/20 hover:bg-muted/40 flex items-center justify-center transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/mmgonnar"
                target="blank"
                className="w-10 h-10 rounded-lg bg-muted/20 hover:bg-muted/40 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/mmgonnar"
                target="blank"
                className="w-10 h-10 rounded-lg bg-muted/20 hover:bg-muted/40 flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
