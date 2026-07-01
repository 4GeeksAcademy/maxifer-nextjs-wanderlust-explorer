import { cn } from "@/lib/utils";

interface SpinnerProps {
  className?: string;
}

export default function Spinner({ className }: SpinnerProps) {
  return (
    <span
      className={cn(
        "inline-block h-10 w-10 animate-spin rounded-full border-4 border-primary-soft border-t-primary",
        className,
      )}
      aria-hidden={true}
    />
  );
}
