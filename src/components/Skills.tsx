"use client";

import { skills, skillCategories } from "@/data/data";
import { SectionHeading } from "./SectionHeading";
import { AnimatedSection } from "./AnimatedSection";

function MarqueeRow({
  items,
  direction = "left",
}: {
  items: string[];
  direction?: "left" | "right";
}) {
  const doubled = [...items, ...items, ...items];

  return (
    <div className="marquee-container overflow-hidden py-2">
      <div
        className={`flex gap-3 w-max ${
          direction === "left"
            ? "animate-marquee-left"
            : "animate-marquee-right"
        }`}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap border border-border text-foreground hover:border-accent/40 hover:text-accent transition-colors duration-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Skills & Technologies"
          title="Technical Expertise"
        />

        <AnimatedSection>
          <div className="space-y-3">
            {skillCategories.map((category, i) => {
              const categorySkills = skills
                .filter((s) => s.category === category.key)
                .map((s) => s.name);

              return (
                <MarqueeRow
                  key={category.key}
                  items={categorySkills}
                  direction={i % 2 === 0 ? "left" : "right"}
                />
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
