import { Suspense } from "react";
import ExperienceFilters from "@/components/filters/experience-filters";

export default function ExperiencesPage() {
  return (
    <section className="space-y-8">


      <Suspense fallback={<p className="text-sm text-muted">Cargando filtros...</p>}>
        <ExperienceFilters />
      </Suspense>
    </section>
  );
}
