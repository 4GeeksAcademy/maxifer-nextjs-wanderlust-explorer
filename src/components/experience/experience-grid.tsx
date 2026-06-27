import type { Experience } from "@/types/experience";
import ExperienceCard from "@/components/experience/experience-card";

interface ExperienceGridProps {
  items: Experience[];
  favoriteIds: number[];
  onToggleFavorite: (id: number) => void;
}

export default function ExperienceGrid({ items, favoriteIds, onToggleFavorite }: ExperienceGridProps) {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-surface p-8 text-center">
        <h2 className="text-xl font-semibold text-foreground">No se encontraron resultados</h2>
        <p className="mt-2 text-sm leading-6 text-muted">
          Prueba ajustar la busqueda, cambiar la categoria o borrar el destino para ver mas experiencias.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((experience) => (
        <ExperienceCard
          key={experience.id}
          experience={experience}
          isFavorite={favoriteIds.includes(experience.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
