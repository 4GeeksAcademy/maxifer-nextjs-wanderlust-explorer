import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold tracking-wide text-primary-hover">
      {children}
    </span>
  );
}
