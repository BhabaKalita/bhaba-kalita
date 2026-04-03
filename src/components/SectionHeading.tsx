"use client";

import { AnimatedSection } from "./AnimatedSection";

export function SectionHeading({
  label,
  title,
}: {
  label?: string;
  title: string;
}) {
  return (
    <AnimatedSection className="mb-10 md:mb-14">
      {label && (
        <p className="text-muted text-xs font-semibold uppercase tracking-[0.2em] mb-2">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
    </AnimatedSection>
  );
}
