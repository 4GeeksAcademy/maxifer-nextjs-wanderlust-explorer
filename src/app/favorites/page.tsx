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
      <header className="rounded-2xl border border-border bg-surface px-5 py-6 shadow-card sm:px-8 sm:py-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Coleccion</p>
        <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Favoritos</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
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
