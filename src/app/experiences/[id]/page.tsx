import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Share2, Star } from "lucide-react";
import BookingCtaBar from "@/components/experience/booking-cta-bar";
import ExperienceDetailFavorite from "@/components/experience/experience-detail-favorite";
import { experiences } from "@/data/experiences";

interface ExperienceDetailPageProps {
  params: Promise<{ id: string }>;
}

const itineraryItems = [
  {
    time: "04:30 AM",
    title: "Punto de encuentro",
    description: "Recogida en hotel y traslado al punto de salida para iniciar la experiencia.",
  },
  {
    time: "05:15 AM",
    title: "Introducción y preparación",
    description: "Revisión rápida de seguridad, equipo y recomendaciones antes de comenzar.",
  },
  {
    time: "06:00 AM",
    title: "Inicio de la aventura",
    description: "Comienzo de la actividad principal con guia local y vistas panoramicas.",
  },
];

const reviews = [
  {
    name: "Elena Rodriguez",
    rating: 4.9,
    quote: "Experiencia inolvidable. El equipo fue super profesional y el recorrido espectacular.",
  },
  {
    name: "Lucas Pereira",
    rating: 4.7,
    quote: "La organizacion fue excelente y todo salio en horario. Repetiria sin dudarlo.",
  },
];

function BackIcon() {
  return <ArrowLeft aria-hidden="true" className="h-5 w-5" />;
}

function ShareIcon() {
  return <Share2 aria-hidden="true" className="h-5 w-5" />;
}

function StatItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface-low px-3 py-3 text-center">
      <p className="text-xs font-semibold tracking-wide text-muted">{label}</p>
      <p className="mt-1 text-sm font-semibold text-foreground">{value}</p>
    </div>
  );
}

function RatingStars({ rating, className }: { rating: number; className?: string }) {
  const clampedRating = Math.max(0, Math.min(5, rating));

  return (
    <span className={`inline-flex items-center gap-1 ${className ?? ""}`}>
      <span className="inline-flex items-center gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => {
          const fillPercent = Math.max(0, Math.min(1, clampedRating - index)) * 100;

          return (
            <span key={index} className="relative h-4 w-4">
              <Star className="h-4 w-4 text-border" />
              <span className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${fillPercent}%` }}>
                <Star className="h-4 w-4 fill-current text-primary" />
              </span>
            </span>
          );
        })}
      </span>
      <span className="font-semibold">{rating.toFixed(1)}</span>
    </span>
  );
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

  const mapQuery = encodeURIComponent(`${experience.destination}`);
  const mapUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <article className="-mx-4 -mb-24 -mt-20 pb-10 sm:-mx-6 md:mb-0 md:mx-0 md:mt-0 md:pb-16">
      <Link
        href="/experiences"
        aria-label="Volver a experiencias"
        className="fixed left-4 top-[calc(env(safe-area-inset-top)+0.9rem)] z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-foreground shadow-card transition hover:scale-[1.03] md:hidden"
      >
        <BackIcon />
      </Link>

      <section className="sticky top-0 h-[62vh] overflow-hidden bg-surface md:h-160 md:rounded-3xl">
        <Image
          src={experience.imageUrl}
          alt={experience.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/20 to-black/10" />

        <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 pb-5 pt-[calc(env(safe-area-inset-top)+0.9rem)] sm:px-6">
          <Link
            href="/experiences"
            aria-label="Volver a experiencias"
            className="hidden h-11 w-11 items-center justify-center rounded-full bg-white/95 text-foreground shadow-card transition hover:scale-[1.03] md:inline-flex"
          >
            <BackIcon />
          </Link>

          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              aria-label="Compartir experiencia"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-foreground shadow-card transition hover:scale-[1.03]"
            >
              <ShareIcon />
            </button>
            <ExperienceDetailFavorite
              experienceId={experience.id}
              variant="icon"
            />
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-16 rounded-t-4xl bg-background px-4 pb-6 pt-5 shadow-panel sm:px-6 md:-mt-20 md:rounded-3xl md:px-8 md:pt-7">
        <header className="space-y-3">
          <p className="text-sm font-semibold tracking-wide text-primary">{experience.destination}</p>
          <h1 className="font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl">{experience.title}</h1>
          <p className="text-sm text-foreground/90">
            <RatingStars rating={experience.rating} className="align-middle" />
            <span className="ml-1 text-muted">(1.2 mil reseñas)</span>
          </p>
        </header>

        <div className="mt-5 grid grid-cols-3 gap-2 md:gap-3">
          <StatItem label="Duracion" value="4h" />
          <StatItem label="Grupo max" value="10 personas" />
          <StatItem label="Reserva" value="Instantánea" />
        </div>

        <section className="mt-7 space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Descripción general</h2>
          <p className="text-base leading-7 text-foreground/90">{experience.description}</p>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Itinerario</h2>
            <ol className="space-y-5 border-l border-primary/25 pl-4">
              {itineraryItems.map((item) => (
                <li key={item.time} className="relative">
                  <span className="absolute left-[-1.16rem] top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
                  <p className="text-sm font-semibold text-primary">{item.time}</p>
                  <p className="text-xl font-semibold text-foreground">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{item.description}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="space-y-3 lg:sticky lg:top-24">
            <h3 className="text-xl font-semibold text-foreground">Mapa</h3>
            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
              <iframe
                title={`Mapa de ${experience.destination}`}
                src={mapUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0 lg:h-90"
              />
            </div>
          </div>
        </section>

        <section className="mt-8 pb-2">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground">Reseñas</h2>
            <p className="text-sm font-semibold text-primary">Ver todo</p>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
            {reviews.map((review) => (
              <article key={review.name} className="w-72 shrink-0 rounded-2xl border border-border bg-surface p-4">
                <p className="font-semibold text-foreground">{review.name}</p>
                <RatingStars rating={review.rating} className="mt-1" />
                <p className="mt-2 text-sm italic leading-6 text-muted">&quot;{review.quote}&quot;</p>
              </article>
            ))}
          </div>
        </section>
      </section>

      <BookingCtaBar price={experience.price} />
    </article>
  );
}
