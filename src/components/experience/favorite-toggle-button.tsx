interface FavoriteToggleButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
  variant?: "full" | "icon";
}

export default function FavoriteToggleButton({ isFavorite, onToggle, variant = "full" }: FavoriteToggleButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full border border-border bg-surface text-sm font-semibold transition hover:border-primary/50";

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={onToggle}
        aria-pressed={isFavorite}
        aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
        className={`${baseClasses} h-10 w-10 backdrop-blur-sm ${isFavorite ? "text-primary" : "text-foreground"}`}
      >
        <span aria-hidden="true" className="text-lg leading-none">
          {isFavorite ? "♥" : "♡"}
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isFavorite}
      className={`${baseClasses} h-11 gap-2 px-4 ${isFavorite ? "text-primary" : "text-foreground hover:text-primary"}`}
    >
      <span aria-hidden="true" className="text-base leading-none">
        {isFavorite ? "♥" : "♡"}
      </span>
      {isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
    </button>
  );
}