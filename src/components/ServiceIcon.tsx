"use client";

import { Server, Code2, Cloud } from "lucide-react";
import type { Service } from "@/data/data";

const iconMap = {
  server: Server,
  code: Code2,
  cloud: Cloud,
} as const;

export function ServiceIcon({
  iconType,
  size = 22,
  className = "",
}: {
  iconType: Service["iconType"];
  size?: number;
  className?: string;
}) {
  const Icon = iconMap[iconType];
  return <Icon size={size} className={className} />;
}
