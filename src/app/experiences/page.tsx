import { Suspense } from "react";
import ExperienceFilters from "@/components/filters/experience-filters";

export default function ExperiencesPage() {
  return (
    <section className="space-y-6 rounded-3xl bg-background p-4 sm:p-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Explorador de experiencias</h1>
        <p className="text-sm text-muted sm:text-base">Descubre 100 planes memorables para tu proximo viaje.</p>
      </header>

      <Suspense fallback={<p className="text-sm text-muted">Cargando filtros...</p>}>
        <ExperienceFilters />
      </Suspense>
    </section>
  );
}
