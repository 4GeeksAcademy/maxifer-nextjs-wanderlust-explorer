"use client";

import { useMemo } from "react";
import type { Experience } from "@/types/experience";

interface ExperienceFilters {
  search: string;
  category: string;
  destination: string;
}

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function createRegex(value: string) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return null;
  }

  try {
    return new RegExp(trimmedValue, "i");
  } catch {
    return new RegExp(escapeRegex(trimmedValue), "i");
  }
}

export function useExperiences(items: Experience[], filters: ExperienceFilters) {
  return useMemo(() => {
    const searchRegex = createRegex(filters.search);
    const destinationRegex = createRegex(filters.destination);

    return items.filter((experience) => {
      const matchesSearch = searchRegex ? searchRegex.test(experience.title) : true;
      const matchesCategory = filters.category ? experience.category === filters.category : true;
      const matchesDestination = destinationRegex ? destinationRegex.test(experience.destination) : true;

      return matchesSearch && matchesCategory && matchesDestination;
    });
  }, [items, filters.search, filters.category, filters.destination]);
}
