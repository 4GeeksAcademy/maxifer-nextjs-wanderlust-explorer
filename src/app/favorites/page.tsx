"use client";

import Link from "next/link";
import ExperienceGrid from "@/components/experience/experience-grid";
import { useFavorites } from "@/components/providers/favorites-provider";
import { experiences } from "@/data/experiences";

export default function FavoritesPage() {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const favoriteExperiences = experiences.filter((experience) => favoriteIds.includes(experience.id));

  return (
    <section className="space-y-6 rounded-3xl bg-background p-4 sm:p-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Favoritos</h1>
        <p className="text-sm text-muted sm:text-base">Guarda tus experiencias preferidas para volver a ellas cuando quieras.</p>
      </header>

      {favoriteExperiences.length > 0 ? (
        <ExperienceGrid items={favoriteExperiences} favoriteIds={favoriteIds} onToggleFavorite={toggleFavorite} />
      ) : (
        <div className="space-y-3 rounded-2xl border border-border bg-surface p-5">
          <p className="text-muted">Aun no tienes experiencias guardadas.</p>
          <Link href="/experiences" className="text-sm font-semibold text-foreground underline underline-offset-4">
            Explorar experiencias
          </Link>
        </div>
      )}
    </section>
  );
}
