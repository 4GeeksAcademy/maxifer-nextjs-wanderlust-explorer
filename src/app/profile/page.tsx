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
    <section className="space-y-6 rounded-3xl bg-background p-4 sm:p-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Perfil</h1>
        <p className="text-sm text-muted sm:text-base">Tu resumen de viajera para seguir descubriendo experiencias inolvidables.</p>
      </header>

      <Card className="space-y-5 border-border bg-surface">
        <div className="flex items-center gap-4">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-white"
            aria-hidden="true"
          >
            SM
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">{simulatedUser.name}</h2>
            <p className="text-sm text-muted">{simulatedUser.handle}</p>
          </div>
        </div>

        <p className="text-sm leading-6 text-foreground sm:text-base">{simulatedUser.bio}</p>

        <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-3">
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted">Pais</dt>
            <dd className="mt-1 text-sm font-medium text-foreground">{simulatedUser.country}</dd>
          </div>
          <div className="rounded-xl border border-border bg-surface p-3">
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted">Estilo favorito</dt>
            <dd className="mt-1 text-sm font-medium text-foreground">{simulatedUser.favoriteStyle}</dd>
          </div>
          <div className="rounded-xl border border-border bg-surface p-3">
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted">Experiencias exploradas</dt>
            <dd className="mt-1 text-sm font-medium text-foreground">{simulatedUser.exploredCount}</dd>
          </div>
          <div className="rounded-xl border border-border bg-surface p-3">
            <dt className="text-xs font-semibold uppercase tracking-wide text-muted">Favoritos guardados</dt>
            <dd className="mt-1 text-sm font-medium text-foreground">{favoriteIds.length}</dd>
          </div>
        </dl>
      </Card>
    </section>
  );
}
