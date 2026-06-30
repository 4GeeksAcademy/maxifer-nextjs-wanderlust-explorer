import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto flex min-h-[calc(100svh-180px)] max-w-5xl items-start justify-center py-4 sm:items-center sm:py-8">
      <div className="relative w-full max-w-136 pb-14 sm:max-w-4xl sm:pb-16">
        <div className="relative min-h-100 overflow-hidden rounded-[1.4rem] shadow-panel sm:min-h-124 lg:min-h-136">
          <Image
            src="https://picsum.photos/id/1018/1200/900"
            alt="Paisaje de montanas al atardecer para inspirar un viaje"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 896px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-foreground/70 via-foreground/20 to-transparent" />
          <HeroTitle />
        </div>
        <HeroCta />
      </div>
    </section>
  );
}

function HeroTitle() {
  return (
    <header className="absolute inset-x-0 bottom-20 px-7 text-white sm:bottom-24 sm:px-10 lg:px-12">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/85">
        Wanderlust Explorer
      </p>
      <h1 className="max-w-2xl font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
        Descubre tu próxima aventura
      </h1>
    </header>
  );
}

function HeroCta() {
  return (
    <Link
      href="/experiences"
      className="absolute inset-x-3 bottom-0 flex min-h-22 items-center justify-between rounded-full bg-surface px-8 text-base font-semibold text-foreground shadow-panel transition hover:-translate-y-0.5 hover:shadow-card-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:inset-x-6 sm:min-h-24 sm:px-10 sm:text-2xl"
      aria-label="Explorar experiencias"
    >
      <span>Explorar experiencias</span>
      <span className="ml-4 flex size-14 shrink-0 items-center justify-center rounded-full bg-primary text-white sm:size-16">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-7"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
        >
          <circle cx="11" cy="11" r="6" />
          <path d="m16 16 4 4" />
        </svg>
      </span>
    </Link>
  );
}
