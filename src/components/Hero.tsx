"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { siteConfig, socialLinks } from "@/data/data";
import { SocialIcon } from "./SocialIcon";

const subtitles = [
  "Building Web Applications",
  "Crafting ServiceNow Solutions",
  "Architecting Cloud Infrastructure",
  "Leading Full Stack Projects",
];

function TickerBar() {
  const items = [
    "Full Stack Development",
    "ServiceNow ITSM",
    "React & Redux",
    "Cloud Infrastructure",
    "GenAI Integration",
  ];
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden py-4 mb-8 opacity-60">
      <div className="flex gap-8 w-max animate-marquee-left">
        {repeated.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-muted whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function RotatingSubtitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-10 md:h-12 overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.p
          key={subtitles[index]}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl lg:text-2xl text-muted font-medium absolute"
        >
          {subtitles[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-16 md:pt-0"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Mobile-only profile photo — above ticker */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="lg:hidden mb-6"
        >
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-surface border-2 border-border overflow-hidden relative">
            <Image
              src="/profile.png"
              alt={siteConfig.name}
              fill
              sizes="128px"
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>

        <TickerBar />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-16">
          {/* Left */}
          <div className="flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-bold tracking-tight leading-[1.05] text-foreground"
            >
              {siteConfig.name}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-4"
            >
              <RotatingSubtitle />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center px-6 py-3 bg-foreground text-background font-semibold rounded-xl text-sm hover:opacity-90 transition-all duration-200"
              >
                Get in Touch
              </a>
              <a
                href={siteConfig.resumeUrl}
                className="inline-flex items-center px-6 py-3 text-foreground font-medium rounded-xl text-sm border border-border hover:bg-surface transition-all duration-200"
              >
                View Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-8 flex items-center gap-5"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors duration-200"
                  aria-label={link.label}
                >
                  <SocialIcon iconType={link.iconType} size={22} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: profile circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hidden lg:flex shrink-0"
          >
            <div className="w-64 h-64 xl:w-72 xl:h-72 rounded-full bg-surface border-2 border-border overflow-hidden relative">
              <Image
                src="/profile.png"
                alt={siteConfig.name}
                fill
                sizes="(max-width: 1280px) 256px, 288px"
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
