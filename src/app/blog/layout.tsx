import type { ReactNode } from "react";
import { BlogNav } from "@/components/BlogNav";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <BlogNav />
      <main>{children}</main>
    </>
  );
}
