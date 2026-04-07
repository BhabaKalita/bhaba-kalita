"use client";

import { services } from "@/data/data";
import { SectionHeading } from "./SectionHeading";
import { StaggerContainer, StaggerItem } from "./AnimatedSection";
import { ServiceIcon } from "./ServiceIcon";
import { TiltCard } from "./TiltCard";

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeading label="What I Do" title="Services" />

        <StaggerContainer className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <TiltCard tiltDegree={6} className="rounded-2xl h-full">
                <div className="group p-6 md:p-7 rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors duration-300 h-full">
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

                  <ul className="space-y-2.5">
                    {service.description.map((desc, i) => (
                      <li
                        key={i}
                        className="text-muted text-sm leading-relaxed"
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
