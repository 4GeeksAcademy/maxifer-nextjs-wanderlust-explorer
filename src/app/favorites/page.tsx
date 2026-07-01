"use client";

import Link from "next/link";
import ExperienceGrid from "@/components/experience/experience-grid";
import { useFavorites } from "@/components/providers/favorites-provider";
import { experiences } from "@/data/experiences";

export default function FavoritesPage() {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const favoriteExperiences = experiences.filter((experience) => favoriteIds.includes(experience.id));

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Favoritos</h1>
        <p className="max-w-2xl text-sm leading-6 text-muted sm:text-base">
          Guarda tus experiencias preferidas para volver a ellas cuando quieras.
        </p>
      </header>

      {favoriteExperiences.length > 0 ? (
        <ExperienceGrid items={favoriteExperiences} favoriteIds={favoriteIds} onToggleFavorite={toggleFavorite} />
      ) : (
        <div className="space-y-4 rounded-2xl border border-dashed border-border-strong bg-surface p-8 shadow-card">
          <p className="font-heading text-xl font-semibold text-foreground">Aun no tienes experiencias guardadas.</p>
          <Link
            href="/experiences"
            className="inline-flex h-12 items-center rounded-lg bg-primary px-5 text-sm font-semibold text-white transition hover:bg-primary-hover"
          >
            Explorar experiencias
          </Link>
        </div>
      )}
    </section>
  );
}
