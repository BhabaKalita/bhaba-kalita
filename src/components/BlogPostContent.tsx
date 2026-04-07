"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { FadeInOnScroll } from "./ParallaxSection";
import type { BlogPost } from "@/data/blog";

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let inCodeBlock = false;
  let codeLines: string[] = [];

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("```")) {
      if (inCodeBlock) {
        elements.push(
          <pre
            key={`code-${i}`}
            className="bg-surface-alt border border-border rounded-xl p-4 overflow-x-auto my-5 text-sm leading-relaxed"
          >
            <code className="text-foreground font-mono">
              {codeLines.join("\n")}
            </code>
          </pre>
        );
        codeLines = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      i++;
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      i++;
      continue;
    }

    if (line.trim() === "") {
      i++;
      continue;
    }

    if (line.startsWith("#### ")) {
      elements.push(
        <h4
          key={`h4-${i}`}
          className="text-base font-semibold text-foreground mt-6 mb-2"
        >
          {parseInline(line.slice(5))}
        </h4>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={`h3-${i}`}
          className="text-lg md:text-xl font-bold text-foreground mt-8 mb-3"
        >
          {parseInline(line.slice(4))}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={`h2-${i}`}
          className="text-xl md:text-2xl font-bold text-foreground mt-10 mb-4"
        >
          {parseInline(line.slice(3))}
        </h2>
      );
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote
          key={`bq-${i}`}
          className="border-l-3 border-accent pl-5 py-2 my-6 text-foreground italic text-base md:text-lg"
        >
          {parseInline(line.slice(2))}
        </blockquote>
      );
    } else if (line.startsWith("- **")) {
      const listItems: string[] = [line];
      while (i + 1 < lines.length && lines[i + 1].startsWith("- ")) {
        i++;
        listItems.push(lines[i]);
      }
      elements.push(
        <ul key={`ul-${i}`} className="space-y-2 my-4 ml-1">
          {listItems.map((item, j) => (
            <li
              key={j}
              className="text-muted text-sm md:text-base leading-relaxed pl-5 relative before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/40"
            >
              {parseInline(item.slice(2))}
            </li>
          ))}
        </ul>
      );
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [line];
      while (i + 1 < lines.length && lines[i + 1].startsWith("- ")) {
        i++;
        listItems.push(lines[i]);
      }
      elements.push(
        <ul key={`ul-${i}`} className="space-y-2 my-4 ml-1">
          {listItems.map((item, j) => (
            <li
              key={j}
              className="text-muted text-sm md:text-base leading-relaxed pl-5 relative before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/40"
            >
              {parseInline(item.slice(2))}
            </li>
          ))}
        </ul>
      );
    } else if (/^\d+\. /.test(line)) {
      const listItems: string[] = [line];
      while (i + 1 < lines.length && /^\d+\. /.test(lines[i + 1])) {
        i++;
        listItems.push(lines[i]);
      }
      elements.push(
        <ol key={`ol-${i}`} className="space-y-2 my-4 ml-1 list-decimal pl-5">
          {listItems.map((item, j) => (
            <li
              key={j}
              className="text-muted text-sm md:text-base leading-relaxed"
            >
              {parseInline(item.replace(/^\d+\.\s/, ""))}
            </li>
          ))}
        </ol>
      );
    } else {
      elements.push(
        <p
          key={`p-${i}`}
          className="text-muted text-sm md:text-base leading-relaxed my-4"
        >
          {parseInline(line)}
        </p>
      );
    }
    i++;
  }

  return elements;
}

function parseInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  const regex = /\*\*(.+?)\*\*|`(.+?)`/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[1]) {
      parts.push(
        <strong key={match.index} className="text-foreground font-semibold">
          {match[1]}
        </strong>
      );
    } else if (match[2]) {
      parts.push(
        <code
          key={match.index}
          className="px-1.5 py-0.5 rounded bg-surface-alt text-accent text-[0.85em] font-mono"
        >
          {match[2]}
        </code>
      );
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length === 1 ? parts[0] : <>{parts}</>;
}

export function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-20 pt-20 pb-32">
      <article className="max-w-3xl mx-auto">
        <FadeInOnScroll>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <header className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-lg bg-accent/10 text-accent text-xs font-semibold">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5 text-muted text-xs">
                <Calendar size={12} />
                {post.date}
              </div>
              <div className="flex items-center gap-1.5 text-muted text-xs">
                <Clock size={12} />
                {post.readTime}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight mb-4">
              {post.title}
            </h1>

            <p className="text-muted text-base md:text-lg leading-relaxed">
              {post.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card border border-border text-muted text-xs font-medium"
                >
                  <Tag size={10} />
                  {tag}
                </span>
              ))}
            </div>
          </header>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.1}>
          <div className="border-t border-border pt-8">
            {renderMarkdown(post.content)}
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:underline"
            >
              <ArrowLeft size={16} />
              Back to all articles
            </Link>
          </div>
        </FadeInOnScroll>
      </article>
    </div>
  );
}
