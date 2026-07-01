import {
  Flower2,
  Landmark,
  PersonStanding,
  Trees,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { ExperienceCategory } from "@/types/experience";

const CATEGORY_OPTIONS: Array<{ value: ExperienceCategory; icon: LucideIcon }> = [
  { value: "Gastronomia", icon: Utensils },
  { value: "Aventura", icon: PersonStanding },
  { value: "Cultura", icon: Landmark },
  { value: "Bienestar", icon: Flower2 },
  { value: "Naturaleza", icon: Trees },
];

interface CategoryButtonGroupProps {
  value: string;
  onChange: (value: string) => void;
}

export default function CategoryButtonGroup({ value, onChange }: CategoryButtonGroupProps) {
  return (
    <div className="space-y-3">

      <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 scrollbar-none sm:mx-0 sm:grid sm:grid-cols-5 sm:gap-2 sm:overflow-visible sm:px-0">
        {CATEGORY_OPTIONS.map(({ value: categoryValue, icon: Icon }) => {
          const isActive = value === categoryValue;

          return (
            <button
              key={categoryValue}
              type="button"
              onClick={() => onChange(isActive ? "" : categoryValue)}
              aria-pressed={isActive}
              className="group min-w-24 rounded-2xl p-2 text-center"
            >
              <span
                className={cn(
                  "mx-auto flex h-16 w-16 items-center justify-center rounded-full border transition",
                  isActive
                    ? "border-primary bg-primary text-surface"
                    : "border-transparent bg-surface text-primary group-hover:border-primary/40 group-hover:bg-primary/5",
                )}
              >
                <Icon className="h-8 w-8" aria-hidden={true} />
              </span>
              <span
                className={cn(
                  "mt-2 block text-sm font-medium text-foreground/85 transition group-hover:text-foreground",
                  isActive && "text-foreground",
                )}
              >
                {categoryValue}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}