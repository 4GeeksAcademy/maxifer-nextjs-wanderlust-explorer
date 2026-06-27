import Image from "next/image";
import Link from "next/link";
import type { Experience } from "@/types/experience";
import Card from "@/components/ui/card";
import FavoriteToggleButton from "@/components/experience/favorite-toggle-button";

interface ExperienceCardProps {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

export default function ExperienceCard({ experience, isFavorite, onToggleFavorite }: ExperienceCardProps) {
  return (
    <Card className="group h-full overflow-hidden border-border bg-surface p-0 shadow-[0_6px_24px_rgba(0,0,0,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(0,0,0,0.1)]">
      <div className="relative">
        <div className="absolute right-3 top-3 z-10">
          <FavoriteToggleButton
            isFavorite={isFavorite}
            onToggle={() => onToggleFavorite(experience.id)}
            variant="icon"
          />
        </div>

        <Link href={`/experiences/${experience.id}`} className="block" aria-label={`Ver detalle de ${experience.title}`}>
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl">
            <Image
              src={experience.imageUrl}
              alt={experience.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
            <span className="absolute left-3 top-3 inline-flex rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold tracking-wide text-foreground backdrop-blur-sm">
              {experience.category}
            </span>
          </div>
        </Link>
      </div>

      <div className="flex min-h-44 flex-col gap-4 p-4">
        <div>
          <Link href={`/experiences/${experience.id}`} className="text-lg font-semibold leading-6 text-foreground hover:underline">
            {experience.title}
          </Link>
          <p className="mt-1 text-sm text-muted">{experience.destination}</p>
        </div>

        <div className="mt-auto flex items-center justify-between text-sm">
          <p className="font-semibold text-primary">Desde ${experience.price}</p>
          <p className="rounded-full bg-secondary-soft px-3 py-1 font-medium text-secondary">
            {experience.rating.toFixed(1)}
          </p>
        </div>

        <Link href={`/experiences/${experience.id}`} className="inline-flex w-max text-sm font-semibold text-foreground underline underline-offset-4">
          Ver detalle
        </Link>
      </div>
    </Card>
  );
}
