import type { Experience } from "@/types/experience";
import ExperienceCard from "@/components/experience/experience-card";

interface ExperienceGridProps {
  items: Experience[];
}

export default function ExperienceGrid({ items }: ExperienceGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </div>
  );
}
