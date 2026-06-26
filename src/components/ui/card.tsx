import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <article className={cn("rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm", className)}>
      {children}
    </article>
  );
}
