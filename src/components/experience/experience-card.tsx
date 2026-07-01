import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import type { Experience } from "@/types/experience";
import Card from "@/components/ui/card";
import FavoriteToggleButton from "@/components/experience/favorite-toggle-button";

interface ExperienceCardProps {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

function RatingStars({ rating }: { rating: number }) {
  const clampedRating = Math.max(0, Math.min(5, rating));

  return (
    <p className="flex items-center gap-1 text-sm" aria-label={`Calificación ${rating.toFixed(1)} de 5`}>
      <span className="inline-flex items-center gap-0.5" aria-hidden={true}>
        {Array.from({ length: 5 }, (_, index) => {
          const fillPercent = Math.max(0, Math.min(1, clampedRating - index)) * 100;

          return (
            <span key={index} className="relative h-3.5 w-3.5">
              <Star className="h-3.5 w-3.5 text-border" />
              <span className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${fillPercent}%` }}>
                <Star className="h-3.5 w-3.5 fill-current text-primary" />
              </span>
            </span>
          );
        })}
      </span>
      <span className="ml-1 font-medium text-muted">{rating.toFixed(1)}</span>
    </p>
  );
}

export default function ExperienceCard({ experience, isFavorite, onToggleFavorite }: ExperienceCardProps) {
  return (
    <Card className="group relative h-full overflow-hidden bg-surface p-0 transition duration-200 hover:-translate-y-0.5 hover:shadow-card-hover">
      <div className="relative">
        <div className="absolute right-3 top-3 z-20">
          <FavoriteToggleButton isFavorite={isFavorite} onToggle={() => onToggleFavorite(experience.id)} variant="icon" />
        </div>

        <Link
          href={`/experiences/${experience.id}`}
          className="relative block aspect-4/3 w-full overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label={`Ver detalle de ${experience.title}`}
        >
          <Image
            src={experience.imageUrl}
            alt={experience.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
          <span className="absolute left-3 top-3 inline-flex rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold tracking-wide text-primary-hover backdrop-blur-sm">
            {experience.category}
          </span>
        </Link>
      </div>

      <div className="flex min-h-44 flex-col gap-4 p-5">
        <div>
          <h3 className="font-heading text-lg font-semibold leading-6">
            <Link
              href={`/experiences/${experience.id}`}
              className="text-foreground transition hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {experience.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-muted">{experience.destination}</p>
        </div>

        <div className="mt-auto flex items-center justify-between text-sm">
          <p className="font-heading text-lg font-bold text-primary">Desde ${experience.price}</p>
          <RatingStars rating={experience.rating} />
        </div>
      </div>
    </Card>
  );
}
