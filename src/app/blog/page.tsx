"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Search, Calendar, Clock, Tag } from "lucide-react";
import { blogPosts, blogCategories, getAllTags } from "@/data/blog";
import { TiltCard } from "@/components/TiltCard";
import { FadeInOnScroll } from "@/components/ParallaxSection";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => getAllTags(), []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      const matchesTag = !selectedTag || post.tags.includes(selectedTag);

      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [searchQuery, selectedCategory, selectedTag]);

  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-20 pt-20 pb-32">
      <div className="max-w-5xl mx-auto">
        {/* Back link */}
        <FadeInOnScroll>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </FadeInOnScroll>

        {/* Header */}
        <FadeInOnScroll>
          <p className="text-muted text-xs font-semibold uppercase tracking-[0.2em] mb-2">
            Latest from the Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Blog
          </h1>
          <p className="text-muted text-base md:text-lg max-w-xl mb-10">
            Thoughts on software engineering, AI, ServiceNow, and building
            things that matter.
          </p>
        </FadeInOnScroll>

        {/* Search + Filters */}
        <FadeInOnScroll delay={0.1}>
          <div className="space-y-4 mb-10">
            {/* Search bar */}
            <div className="relative">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted/60 focus:outline-none focus:border-accent transition-colors duration-200 text-sm"
              />
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === cat
                      ? "bg-accent text-accent-foreground"
                      : "bg-card border border-border text-muted hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() =>
                    setSelectedTag(selectedTag === tag ? null : tag)
                  }
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-200 ${
                    selectedTag === tag
                      ? "bg-accent/20 text-accent border border-accent/30"
                      : "bg-card border border-border text-muted hover:text-foreground"
                  }`}
                >
                  <Tag size={10} />
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </FadeInOnScroll>

        {/* Post grid */}
        {filteredPosts.length > 0 ? (
          <div className="space-y-5">
            {/* Featured post (first) */}
            <FadeInOnScroll>
              <Link href={`/blog/${filteredPosts[0].slug}`}>
                <TiltCard tiltDegree={4} className="rounded-2xl">
                  <article className="rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors duration-300 overflow-hidden">
                    <div className="relative w-full h-48 md:h-56 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={filteredPosts[0].coverImage}
                        alt={filteredPosts[0].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-lg bg-accent/10 text-accent text-xs font-semibold">
                          {filteredPosts[0].category}
                        </span>
                        <div className="flex items-center gap-1.5 text-muted text-xs">
                          <Calendar size={12} />
                          {filteredPosts[0].date}
                        </div>
                        <div className="flex items-center gap-1.5 text-muted text-xs">
                          <Clock size={12} />
                          {filteredPosts[0].readTime}
                        </div>
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                        {filteredPosts[0].title}
                      </h2>
                      <p className="text-muted text-sm md:text-base leading-relaxed mb-4">
                        {filteredPosts[0].description}
                      </p>
                      <span className="text-accent text-sm font-medium">
                        Read article →
                      </span>
                    </div>
                  </article>
                </TiltCard>
              </Link>
            </FadeInOnScroll>

            {/* Remaining posts in grid */}
            <div className="grid gap-5 md:grid-cols-2">
              {filteredPosts.slice(1).map((post, i) => (
                <FadeInOnScroll key={post.slug} delay={i * 0.05}>
                  <Link href={`/blog/${post.slug}`} className="block h-full">
                    <TiltCard tiltDegree={5} className="rounded-2xl h-full">
                      <article className="rounded-2xl bg-card border border-border hover:border-accent/30 transition-colors duration-300 h-full flex flex-col overflow-hidden">
                        <div className="relative w-full h-36 overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-5 md:p-6 flex flex-col flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span className="px-2.5 py-1 rounded-lg bg-accent/10 text-accent text-xs font-semibold">
                              {post.category}
                            </span>
                            <span className="text-muted text-xs">
                              {post.date}
                            </span>
                          </div>
                          <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">
                            {post.title}
                          </h3>
                          <p className="text-muted text-sm leading-relaxed flex-1 mb-3">
                            {post.description}
                          </p>
                          <span className="text-accent text-sm font-medium">
                            Read article →
                          </span>
                        </div>
                      </article>
                    </TiltCard>
                  </Link>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted text-lg">
              No articles found matching your search.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSelectedTag(null);
              }}
              className="mt-4 text-accent text-sm font-medium hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
