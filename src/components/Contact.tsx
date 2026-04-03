"use client";

import { motion } from "framer-motion";
import { siteConfig, contactLinks } from "@/data/data";
import { AnimatedSection } from "./AnimatedSection";
import { SocialIcon } from "./SocialIcon";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20 pb-32"
    >
      <div className="max-w-6xl mx-auto text-center">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-5">
            Let&apos;s Connect
          </h2>
          <p className="text-muted text-base md:text-lg max-w-lg mx-auto mb-10">
            Want to chat? Feel free to reach out and I&apos;ll respond as soon
            as I can.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.iconType === "mail" ? undefined : "_blank"}
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-card border border-border text-foreground text-sm font-medium hover:border-accent/40 transition-colors duration-200"
              >
                <SocialIcon iconType={link.iconType} size={16} />
                {link.label}
              </motion.a>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection className="mt-20 pt-6 border-t border-border max-w-6xl mx-auto">
        <p className="text-muted text-xs text-center">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
      </AnimatedSection>
    </section>
  );
}
