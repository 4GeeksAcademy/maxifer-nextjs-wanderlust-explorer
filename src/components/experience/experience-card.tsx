import type { Experience } from "@/types/experience";
import Badge from "@/components/ui/badge";
import Card from "@/components/ui/card";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card className="flex h-full flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900">{experience.title}</h3>
          <p className="text-sm text-zinc-500">{experience.destination}</p>
        </div>
        <Badge>{experience.category}</Badge>
      </div>

      <p className="text-sm leading-6 text-zinc-600">{experience.description}</p>

      <div className="mt-auto flex items-center justify-between text-sm">
        <p className="font-semibold text-zinc-900">From ${experience.price}</p>
        <p className="text-zinc-500">Rating {experience.rating.toFixed(1)}</p>
      </div>
    </Card>
  );
}
