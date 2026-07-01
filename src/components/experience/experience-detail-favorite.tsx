"use client";

import FavoriteToggleButton from "@/components/experience/favorite-toggle-button";
import { useFavorites } from "@/components/providers/favorites-provider";

interface ExperienceDetailFavoriteProps {
  experienceId: number;
  variant?: "full" | "icon";
  className?: string;
}

export default function ExperienceDetailFavorite({
  experienceId,
  variant = "full",
  className,
}: ExperienceDetailFavoriteProps) {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <FavoriteToggleButton
      isFavorite={isFavorite(experienceId)}
      onToggle={() => toggleFavorite(experienceId)}
      variant={variant}
      className={className}
    />
  );
}