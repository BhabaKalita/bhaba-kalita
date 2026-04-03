"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, FileText, Sun, Moon, Menu, X } from "lucide-react";
import { siteConfig, socialLinks } from "@/data/data";
import { useTheme } from "./ThemeProvider";
import { SocialIcon } from "./SocialIcon";

const dockItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: FileText, label: "Resume", href: "#experience" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsVisible(currentY < 100 || currentY < lastScrollY);
      setLastScrollY(currentY);

      const sections = ["home", "about", "experience", "skills", "services", "contact"];
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Floating bottom dock — desktop */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : 100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-50 items-center gap-1 px-2 py-2 rounded-2xl bg-surface/90 backdrop-blur-xl border border-border shadow-lg shadow-black/5"
      >
        {dockItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href.replace("#", "");
          return (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className={`relative p-3 rounded-xl transition-colors duration-200 ${
                isActive
                  ? "text-foreground bg-surface-alt"
                  : "text-muted hover:text-foreground hover:bg-surface-alt/50"
              }`}
              aria-label={item.label}
            >
              <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
            </button>
          );
        })}

        <div className="w-px h-5 bg-border mx-1" />

        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl text-muted hover:text-foreground hover:bg-surface-alt/50 transition-colors duration-200"
            aria-label={link.label}
          >
            <SocialIcon iconType={link.iconType} size={18} />
          </a>
        ))}

        <div className="w-px h-5 bg-border mx-1" />

        <button
          onClick={toggleTheme}
          className="p-3 rounded-xl text-muted hover:text-foreground hover:bg-surface-alt/50 transition-colors duration-200"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </motion.nav>

      {/* Mobile top bar */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3 bg-surface/90 backdrop-blur-xl border-b border-border">
        <button
          onClick={() => handleNavClick("#home")}
          className="w-9 h-9 rounded-xl bg-initial-bg text-initial-text flex items-center justify-center font-bold text-xs"
        >
          {siteConfig.initials}
        </button>
        <div className="flex items-center gap-1">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl text-muted hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl text-muted hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="flex flex-col items-center gap-4"
            >
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Experience", href: "#experience" },
                { label: "Skills", href: "#skills" },
                { label: "Services", href: "#services" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-xl font-medium tracking-wide transition-colors duration-200 ${
                    activeSection === item.href.replace("#", "")
                      ? "text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>

            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-foreground transition-colors"
                >
                  <SocialIcon iconType={link.iconType} size={22} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
