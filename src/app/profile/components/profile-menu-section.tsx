import { ChevronRight } from "lucide-react";
import type { ComponentType } from "react";
import Card from "@/components/ui/card";

export interface ProfileMenuItem {
  id: string;
  label: string;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
}

interface ProfileMenuSectionProps {
  title: string;
  items: ProfileMenuItem[];
}

export default function ProfileMenuSection({ title, items }: ProfileMenuSectionProps) {
  return (
    <section className="space-y-3">
      <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">{title}</h2>

      <Card className="overflow-hidden p-0">
        <ul>
          {items.map((item, index) => {
            const Icon = item.icon;
            const hasBorder = index < items.length - 1;

            return (
              <li key={item.id} className={hasBorder ? "border-b border-border" : ""}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-4 py-4 text-left transition hover:bg-surface-low focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <span className="flex items-center gap-3 text-lg font-medium text-foreground">
                    <Icon className="h-5 w-5 text-muted" aria-hidden={true} />
                    {item.label}
                  </span>
                  <ChevronRight className="h-5 w-5 text-muted" aria-hidden={true} />
                </button>
              </li>
            );
          })}
        </ul>
      </Card>
    </section>
  );
}
