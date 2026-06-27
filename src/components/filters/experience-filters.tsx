"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ExperienceGrid from "@/components/experience/experience-grid";
import FilterBar from "@/components/filters/filter-bar";
import { useFavorites } from "@/components/providers/favorites-provider";
import { experiences } from "@/data/experiences";
import { useExperiences } from "@/hooks/use-experiences";

export default function ExperienceFilters() {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const search = searchParams.get("search") ?? "";
  const category = searchParams.get("category") ?? "";
  const destination = searchParams.get("destination") ?? "";
  const filters = { search, category, destination };

  const filteredExperiences = useExperiences(experiences, filters);

  const updateParam = (key: keyof typeof filters, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const nextValue = value.trim();

    if (nextValue) {
      params.set(key, nextValue);
    } else {
      params.delete(key);
    }

    const queryString = params.toString();
    router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
  };

  return (
    <div className="space-y-4">
      <FilterBar filters={filters} onFilterChange={updateParam} />

      <p className="text-sm font-medium text-muted">
        {filteredExperiences.length} resultado{filteredExperiences.length === 1 ? "" : "s"} encontrado
        {filteredExperiences.length === 1 ? "" : "s"}
      </p>

      <ExperienceGrid items={filteredExperiences} favoriteIds={favoriteIds} onToggleFavorite={toggleFavorite} />
    </div>
  );
}
