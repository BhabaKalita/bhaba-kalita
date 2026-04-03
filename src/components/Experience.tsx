"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experiences } from "@/data/data";
import { SectionHeading } from "./SectionHeading";
import { StaggerContainer, StaggerItem } from "./AnimatedSection";

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const featured = experiences[0];
  const rest = experiences.slice(1);

  return (
    <section
      id="experience"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="Work Experience" title="Career Journey" />

        <StaggerContainer className="space-y-5">
          {/* Featured (first) job — full width */}
          <StaggerItem>
            <ExperienceCard
              exp={featured}
              isExpanded={expandedIndex === 0}
              onToggle={() =>
                setExpandedIndex(expandedIndex === 0 ? null : 0)
              }
            />
          </StaggerItem>

          {/* Remaining jobs — 2-column grid */}
          <div className="grid gap-5 md:grid-cols-2">
            {rest.map((exp, i) => {
              const realIndex = i + 1;
              return (
                <StaggerItem key={realIndex}>
                  <ExperienceCard
                    exp={exp}
                    isExpanded={expandedIndex === realIndex}
                    onToggle={() =>
                      setExpandedIndex(
                        expandedIndex === realIndex ? null : realIndex
                      )
                    }
                  />
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

function ExperienceCard({
  exp,
  isExpanded,
  onToggle,
}: {
  exp: (typeof experiences)[0];
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      layout
      className="rounded-2xl bg-card border border-border overflow-hidden hover:border-accent/30 transition-colors duration-300"
    >
      <div className="p-5 md:p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-3">
          <div className="w-10 h-10 rounded-xl bg-initial-bg text-initial-text flex items-center justify-center font-bold text-sm shrink-0">
            {exp.initial}
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">
              {exp.title}
            </h3>
            <p className="text-sm text-muted">{exp.role}</p>
          </div>
        </div>

        <p className="text-xs text-muted mb-3">{exp.period}</p>
        <p className="text-sm text-muted leading-relaxed">{exp.summary}</p>

        {/* Expand toggle */}
        <button
          onClick={onToggle}
          className="mt-4 text-sm font-medium text-accent hover:underline transition-colors duration-200"
        >
          {isExpanded ? "Show less" : "Click to learn more →"}
        </button>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="space-y-2 border-t border-border pt-4 mt-4">
                {exp.details.map((detail, j) => (
                  <li
                    key={j}
                    className="text-muted text-sm leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/40"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
