import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ExperienceDetailFavorite from "@/components/experience/experience-detail-favorite";
import { experiences } from "@/data/experiences";

interface ExperienceDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ExperienceDetailPage({ params }: ExperienceDetailPageProps) {
  const { id } = await params;
  const parsedId = Number(id);

  if (!Number.isInteger(parsedId) || parsedId <= 0) {
    notFound();
  }

  const experience = experiences.find((item) => item.id === parsedId);

  if (!experience) {
    notFound();
  }

  return (
    <article className="space-y-6 rounded-3xl bg-background p-4 sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <Link
          href="/experiences"
          className="inline-flex items-center text-sm font-semibold text-foreground underline underline-offset-4"
        >
          Volver al explorador
        </Link>
        <ExperienceDetailFavorite experienceId={experience.id} />
      </div>

      <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl border border-border bg-surface sm:aspect-21/9">
        <Image
          src={experience.imageUrl}
          alt={experience.title}
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover"
          priority
        />
      </div>

      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex rounded-full bg-secondary-soft px-3 py-1 text-xs font-semibold tracking-wide text-secondary">
            {experience.category}
          </span>
          <span className="inline-flex rounded-full bg-surface px-3 py-1 text-xs font-medium tracking-wide text-muted">
            {experience.destination}
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{experience.title}</h1>
      </header>

      <section className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
        <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-muted">Descripcion</h2>
        <p className="mt-3 text-base leading-7 text-foreground">{experience.description}</p>
      </section>

      <section className="grid grid-cols-1 gap-4 rounded-2xl border border-border bg-surface p-5 sm:grid-cols-2 sm:p-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-muted">Precio</p>
          <p className="mt-2 text-2xl font-bold text-primary">${experience.price}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-muted">Rating</p>
          <p className="mt-2 text-2xl font-bold text-secondary">{experience.rating.toFixed(1)} / 5</p>
        </div>
      </section>
    </article>
  );
}