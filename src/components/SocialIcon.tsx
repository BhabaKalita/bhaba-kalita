"use client";

import { Mail, Globe } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import type { SocialLink } from "@/data/data";

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
  globe: Globe,
} as const;

export function SocialIcon({
  iconType,
  size = 18,
}: {
  iconType: SocialLink["iconType"];
  size?: number;
}) {
  const Icon = iconMap[iconType];
  return <Icon size={size} />;
}
