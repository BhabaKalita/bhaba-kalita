"use client";

import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import { siteConfig } from "@/data/data";
import { useTheme } from "./ThemeProvider";

export function BlogNav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-20 py-4 bg-background/80 backdrop-blur-xl border-b border-border">
      <Link
        href="/"
        className="w-9 h-9 rounded-xl bg-initial-bg text-initial-text flex items-center justify-center font-bold text-xs hover:opacity-90 transition-opacity"
      >
        {siteConfig.initials}
      </Link>

      <nav className="flex items-center gap-4">
        <Link
          href="/"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          Home
        </Link>
        <Link
          href="/blog"
          className="text-sm text-foreground font-medium"
        >
          Blog
        </Link>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl text-muted hover:text-foreground transition-colors"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>
    </header>
  );
}
