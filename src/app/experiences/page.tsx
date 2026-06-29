import { Suspense } from "react";
import ExperienceFilters from "@/components/filters/experience-filters";

export default function ExperiencesPage() {
  return (
    <section className="space-y-8">
      <header className="rounded-2xl border border-border bg-surface px-5 py-6 shadow-card sm:px-8 sm:py-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Explorador</p>
        <h1 className="mt-2 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Explorador de experiencias
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
          Descubre 100 planes memorables para tu proximo viaje.
        </p>
      </header>

      <Suspense fallback={<p className="text-sm text-muted">Cargando filtros...</p>}>
        <ExperienceFilters />
      </Suspense>
    </section>
  );
}
