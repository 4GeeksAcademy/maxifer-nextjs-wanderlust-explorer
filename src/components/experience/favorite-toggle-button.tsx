import { Heart } from "lucide-react";

interface FavoriteToggleButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
  variant?: "full" | "icon";
  className?: string;
}

export default function FavoriteToggleButton({
  isFavorite,
  onToggle,
  variant = "full",
  className,
}: FavoriteToggleButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full border border-border bg-surface text-sm font-semibold shadow-card transition hover:border-primary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={onToggle}
        aria-pressed={isFavorite}
        aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
        className={`${baseClasses} h-11 w-11 border-0 bg-white/95 backdrop-blur-sm transition hover:scale-[1.03] ${isFavorite ? "text-primary" : "text-foreground hover:text-primary"} ${className ?? ""}`}
      >
        <Heart aria-hidden="true" className="h-5 w-5" fill={isFavorite ? "currentColor" : "none"} />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isFavorite}
      className={`${baseClasses} h-12 gap-2 px-4 ${isFavorite ? "text-primary" : "text-foreground hover:text-primary"} ${className ?? ""}`}
    >
      <Heart aria-hidden="true" className="h-4 w-4" fill={isFavorite ? "currentColor" : "none"} />
      {isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
    </button>
  );
}
