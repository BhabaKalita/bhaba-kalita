"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services, type Service } from "@/data/data";
import { SectionHeading } from "./SectionHeading";
import { StaggerContainer, StaggerItem } from "./AnimatedSection";
import { ServiceIcon } from "./ServiceIcon";
import { TiltCard } from "./TiltCard";

function withEmphasis(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-foreground font-semibold">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

export function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="What I Do" title="Services" />

        <StaggerContainer className="grid gap-5 md:grid-cols-2">
          {services.map((service, i) => (
            <StaggerItem key={service.title}>
              <ServiceCard
                service={service}
                isExpanded={expandedIndex === i}
                onToggle={() =>
                  setExpandedIndex(expandedIndex === i ? null : i)
                }
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  isExpanded,
  onToggle,
}: {
  service: Service;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <TiltCard tiltDegree={6} className="rounded-2xl h-full">
      <motion.div
        layout
        className="group p-6 md:p-7 rounded-2xl bg-card border border-border overflow-hidden hover:border-accent/30 transition-colors duration-300 h-full"
      >
        <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
          <ServiceIcon
            iconType={service.iconType}
            size={20}
            className="text-accent"
          />
        </div>

        <h3 className="text-base font-semibold text-foreground mb-3">
          {service.title}
        </h3>

        {service.highlights && service.highlights.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {service.highlights.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg bg-surface-alt border border-border text-muted text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="text-muted text-sm leading-relaxed">
          {withEmphasis(service.summary)}
        </p>

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
              className="overflow-hidden"
            >
              <ul className="space-y-2 border-t border-border pt-4 mt-4">
                {service.description.map((desc, j) => (
                  <li
                    key={j}
                    className="text-muted text-sm leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/40"
                  >
                    {withEmphasis(desc)}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </TiltCard>
  );
}
