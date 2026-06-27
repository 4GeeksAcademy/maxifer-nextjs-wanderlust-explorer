"use client";

import FavoriteToggleButton from "@/components/experience/favorite-toggle-button";
import { useFavorites } from "@/components/providers/favorites-provider";

interface ExperienceDetailFavoriteProps {
  experienceId: number;
}

export default function ExperienceDetailFavorite({ experienceId }: ExperienceDetailFavoriteProps) {
  const { isFavorite, toggleFavorite } = useFavorites();

  return <FavoriteToggleButton isFavorite={isFavorite(experienceId)} onToggle={() => toggleFavorite(experienceId)} />;
}