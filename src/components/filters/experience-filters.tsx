"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ExperienceGrid from "@/components/experience/experience-grid";
import FilterBar from "@/components/filters/filter-bar";
import SearchBar from "@/components/filters/search-bar";
import { useFavorites } from "@/components/providers/favorites-provider";
import Spinner from "@/components/ui/spinner";
import { experiences } from "@/data/experiences";
import { useExperiences } from "@/hooks/use-experiences";

export default function ExperienceFilters() {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [items, setItems] = useState<typeof experiences>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setItems(experiences);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  const search = searchParams.get("search") ?? "";
  const category = searchParams.get("category") ?? "";
  const destination = searchParams.get("destination") ?? "";
  const filters = { search, category, destination };

  const filteredExperiences = useExperiences(items, filters);

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

      {isLoading ? (
        <div className="flex min-h-[30vh] flex-col items-center justify-start gap-3 pt-4 sm:min-h-[45vh] sm:justify-center sm:pt-0">
          <Spinner />
          <p className="text-sm font-semibold text-muted">Cargando experiencias...</p>
        </div>
      ) : (
        <>
          <p className="text-sm font-semibold text-muted">
            {filteredExperiences.length} resultado{filteredExperiences.length === 1 ? "" : "s"} encontrado
            {filteredExperiences.length === 1 ? "" : "s"}
          </p>

          <ExperienceGrid items={filteredExperiences} favoriteIds={favoriteIds} onToggleFavorite={toggleFavorite} />
        </>
      )}
    </div>
  );
}
