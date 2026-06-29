"use client";

import Card from "@/components/ui/card";
import { useFavorites } from "@/components/providers/favorites-provider";

const simulatedUser = {
  name: "Sofia Martinez",
  handle: "@sofia.routes",
  bio: "Travel lover focused on food, local culture, and hidden gems in every city.",
  country: "Argentina",
  favoriteStyle: "Cultural & Food",
  exploredCount: 42,
};

export default function ProfilePage() {
  const { favoriteIds } = useFavorites();

  return (
    <section className="space-y-8">
      <header className="rounded-2xl border border-border bg-surface px-5 py-6 shadow-card sm:px-8 sm:py-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Cuenta</p>
        <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Perfil</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
          Tu resumen de viajera para seguir descubriendo experiencias inolvidables.
        </p>
      </header>

      <Card className="space-y-6 p-6 sm:p-8">
        <div className="flex items-center gap-4">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full bg-primary font-heading text-lg font-bold text-white shadow-card"
            aria-hidden="true"
          >
            SM
          </div>
          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground">{simulatedUser.name}</h2>
            <p className="text-sm text-muted">{simulatedUser.handle}</p>
          </div>
        </div>

        <p className="max-w-3xl text-sm leading-6 text-muted sm:text-base">{simulatedUser.bio}</p>

        <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface-low p-4">
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted">Pais</dt>
            <dd className="mt-1 text-sm font-medium text-foreground">{simulatedUser.country}</dd>
          </div>
          <div className="rounded-2xl border border-border bg-surface-low p-4">
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted">Estilo favorito</dt>
            <dd className="mt-1 text-sm font-medium text-foreground">{simulatedUser.favoriteStyle}</dd>
          </div>
          <div className="rounded-2xl border border-border bg-surface-low p-4">
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted">Experiencias exploradas</dt>
            <dd className="mt-1 font-heading text-2xl font-bold text-primary">{simulatedUser.exploredCount}</dd>
          </div>
          <div className="rounded-2xl border border-border bg-surface-low p-4">
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted">Favoritos guardados</dt>
            <dd className="mt-1 font-heading text-2xl font-bold text-primary">{favoriteIds.length}</dd>
          </div>
        </dl>
      </Card>
    </section>
  );
}
