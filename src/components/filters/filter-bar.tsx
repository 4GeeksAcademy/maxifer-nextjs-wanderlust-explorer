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
        <label className="space-y-1">
          <span className="text-sm font-medium text-foreground">Categoria</span>
          <select
            value={filters.category}
            onChange={(event) => handleChange("category", event.target.value)}
            className="w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm text-zinc-700 outline-none"
          >
            <option value="">Todas</option>
            {CATEGORIES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-1">
          <span className="text-sm font-medium text-foreground">Destino (ciudad o pais)</span>
          <input
            type="search"
            value={filters.destination}
            onChange={(event) => handleChange("destination", event.target.value)}
            placeholder="Ej: Medellin o Colombia"
            className="w-full rounded-xl border border-zinc-200 bg-white p-3 text-sm text-zinc-700 outline-none placeholder:text-zinc-400"
          />
        </label>
      </div>
    </div>
  );
}
