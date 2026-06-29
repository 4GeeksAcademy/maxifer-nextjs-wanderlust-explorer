"use client";

import { useEffect } from "react";
import SearchBar from "@/components/filters/search-bar";
import type { ExperienceCategory } from "@/types/experience";

const CATEGORIES: ExperienceCategory[] = ["Adventure", "Culture", "Food", "Wellness", "Nature"];

interface FilterValues {
  search: string;
  category: string;
  destination: string;
}

interface FilterBarProps {
  filters: FilterValues;
  onFilterChange: (key: keyof FilterValues, value: string) => void;
}

export default function FilterBar({ filters, onFilterChange }: FilterBarProps) {
  useEffect(() => {
    const activeFilter = filters.search || filters.destination || filters.category;
    document.title = activeFilter
      ? `${activeFilter} | Wanderlust Explorer`
      : "Experiencias | Wanderlust Explorer";
  }, [filters.search, filters.category, filters.destination]);

  const handleChange = (key: keyof FilterValues, value: string) => {
    onFilterChange(key, value);
  };

  return (
    <div className="space-y-4">
      <SearchBar value={filters.search} onChange={(value) => handleChange("search", value)} />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-foreground">Categoria</span>
          <select
            value={filters.category}
            onChange={(event) => handleChange("category", event.target.value)}
            className="h-12 w-full rounded-lg border border-border bg-surface px-4 text-sm text-foreground shadow-card outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15"
          >
            <option value="">Todas</option>
            {CATEGORIES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-foreground">Destino (ciudad o pais)</span>
          <input
            type="search"
            value={filters.destination}
            onChange={(event) => handleChange("destination", event.target.value)}
            placeholder="Ej: Medellin o Colombia"
            className="h-12 w-full rounded-lg border border-border bg-surface px-4 text-sm text-foreground shadow-card outline-none transition placeholder:text-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/15"
          />
        </label>
      </div>
    </div>
  );
}
