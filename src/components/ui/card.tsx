import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <article className={cn("rounded-2xl border border-border bg-surface p-5 shadow-card", className)}>
      {children}
    </article>
  );
}
