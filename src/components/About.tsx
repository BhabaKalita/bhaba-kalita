"use client";

import { siteConfig, stats } from "@/data/data";
import { AnimatedSection } from "./AnimatedSection";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          {/* AT badge + About label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-initial-bg text-initial-text flex items-center justify-center font-bold text-sm">
              {siteConfig.initials}
            </div>
            <span className="text-base font-semibold text-foreground">
              About
            </span>
          </div>

          {/* Bio text — large readable font */}
          <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-foreground font-medium max-w-4xl">
            {siteConfig.bio}
          </p>

          {/* Inline stats row */}
          <div className="mt-12 flex flex-wrap gap-x-16 gap-y-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                  {stat.value}
                </p>
                <p className="text-sm text-muted font-medium mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
