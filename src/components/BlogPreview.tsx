"use client";

import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { TiltCard } from "./TiltCard";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./AnimatedSection";

export function BlogPreview() {
  const topPosts = blogPosts.slice(0, 3);
  const featured = topPosts[0];
  const rest = topPosts.slice(1);

  return (
    <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex items-baseline justify-between mb-8">
            <p className="text-muted text-xs font-semibold uppercase tracking-[0.2em]">
              Latest from the Blog
            </p>
            <Link
              href="/blog"
              className="text-accent text-sm font-medium hover:underline"
            >
              View all posts →
            </Link>
          </div>
        </AnimatedSection>

        <StaggerContainer className="space-y-5">
          {/* Featured post — full width with cover */}
          <StaggerItem>
            <Link href={`/blog/${featured.slug}`}>
              <TiltCard tiltDegree={3} className="rounded-2xl">
                <article className="rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors duration-300 overflow-hidden">
                  <div className="w-full h-40 md:h-52 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={featured.coverImage}
                      alt={featured.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-2.5 py-1 rounded-lg bg-accent/10 text-accent text-xs font-semibold">
                        {featured.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-muted text-xs">
                        <Calendar size={12} />
                        {featured.date}
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                      {featured.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed mb-4 max-w-2xl">
                      {featured.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-accent text-sm font-medium">
                      Read article <ArrowRight size={14} />
                    </span>
                  </div>
                </article>
              </TiltCard>
            </Link>
          </StaggerItem>

          {/* 2 more posts in a grid */}
          <div className="grid gap-5 md:grid-cols-2">
            {rest.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <TiltCard tiltDegree={4} className="rounded-2xl h-full">
                    <article className="rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors duration-300 h-full flex flex-col overflow-hidden">
                      <div className="w-full h-32 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-5 md:p-6 flex flex-col flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="px-2.5 py-1 rounded-lg bg-accent/10 text-accent text-xs font-semibold">
                            {post.category}
                          </span>
                          <span className="text-muted text-xs">
                            {post.date}
                          </span>
                        </div>
                        <h3 className="text-base font-semibold text-foreground mb-2">
                          {post.title}
                        </h3>
                        <p className="text-muted text-sm leading-relaxed flex-1 mb-3">
                          {post.description}
                        </p>
                        <span className="inline-flex items-center gap-1.5 text-accent text-sm font-medium">
                          Read article <ArrowRight size={14} />
                        </span>
                      </div>
                    </article>
                  </TiltCard>
                </Link>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
