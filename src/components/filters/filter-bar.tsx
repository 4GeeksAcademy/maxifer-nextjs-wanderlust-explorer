"use client";

import { useEffect } from "react";
import CategoryButtonGroup from "@/components/filters/category-button-group";

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
      <div className="grid grid-cols-1 gap-3">
        <label className="w-full lg:mx-auto lg:max-w-3xl">

          <input
            type="search"
            value={filters.destination}
            onChange={(event) => handleChange("destination", event.target.value)}
            placeholder="Busca por ciudad o país"
            className="h-12 w-full rounded-full border border-border bg-surface px-4 text-sm text-foreground shadow-card outline-none transition placeholder:text-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/15"
          />
        </label>

        <div className="w-full lg:mx-auto lg:max-w-3xl">
          <CategoryButtonGroup
            value={filters.category}
            onChange={(value) => handleChange("category", value)}
          />
        </div>
      </div>
    </div>
  );
}
