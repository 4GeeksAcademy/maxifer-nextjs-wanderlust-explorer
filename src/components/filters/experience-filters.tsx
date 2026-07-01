"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ExperienceGrid from "@/components/experience/experience-grid";
import FilterBar from "@/components/filters/filter-bar";
import SearchBar from "@/components/filters/search-bar";
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
    <div className="space-y-6">
      <div className="sticky top-2 z-30 px-1 sm:px-0 md:top-24">
        <div className="mx-auto w-full max-w-3xl rounded-full bg-background/95 p-1 backdrop-blur supports-backdrop-filter:bg-background/80">
          <SearchBar value={filters.search} onChange={(value) => updateParam("search", value)} />
        </div>
      </div>

      <div className="px-1 sm:px-0">
        <FilterBar filters={filters} onFilterChange={updateParam} />
      </div>

      <p className="text-sm font-semibold text-muted">
        {filteredExperiences.length} resultado{filteredExperiences.length === 1 ? "" : "s"} encontrado
        {filteredExperiences.length === 1 ? "" : "s"}
      </p>

      <ExperienceGrid items={filteredExperiences} favoriteIds={favoriteIds} onToggleFavorite={toggleFavorite} />
    </div>
  );
}
